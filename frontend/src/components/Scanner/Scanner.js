import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import Quagga from "quagga";

const Scanner = () => {
  const [image, setImage] = useState(null);
  const [detectedObjects, setDetectedObjects] = useState([]);
  const [barcodeData, setBarcodeData] = useState(null);
  const [error, setError] = useState("");
  const [cameraActive, setCameraActive] = useState(false);
  const [barcodeScanning, setBarcodeScanning] = useState(false);
  const webcamRef = useRef(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setBarcodeData(null);
    setError("");
  };

  const handleUpload = async () => {
    if (!image) {
      setError("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/scanner/scan/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setDetectedObjects(response.data.detected_objects || []);
      setError(response.data.detected_objects ? "" : "No objects detected.");
    } catch (err) {
      setError("Error uploading image.");
    }
  };

  const startCamera = () => {
    setCameraActive(true);
    setDetectedObjects([]);
    setBarcodeData(null);
    setError("");
  };

  const stopCamera = () => {
    setCameraActive(false);
    setBarcodeScanning(false);
    Quagga.stop(); // Ensure Quagga is stopped to avoid runtime errors.
  };

  const captureFromCamera = async () => {
    if (!webcamRef.current) return;

    const screenshot = webcamRef.current.getScreenshot();
    const blob = await fetch(screenshot).then((res) => res.blob());
    const file = new File([blob], "camera_capture.jpg", { type: "image/jpeg" });
    setImage(file);
    setCameraActive(false); // Stop the camera
    setBarcodeData(null);
  };

  const startBarcodeScanning = () => {
    setBarcodeScanning(true);
    setCameraActive(true);
    setError("");

    // Ensure the DOM element exists before initializing Quagga
    const scannerElement = document.querySelector("#barcode-scanner");
    if (!scannerElement) {
      setError("Barcode scanner element not found.");
      setBarcodeScanning(false);
      return;
    }

    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: scannerElement, // Attach to the scanner DOM element
        },
        decoder: {
          readers: ["ean_reader", "upc_reader"], // Add any other formats you need
        },
      },
      (err) => {
        if (err) {
          console.error("Quagga initialization failed:", err);
          setError("Failed to initialize barcode scanner.");
          setBarcodeScanning(false);
          return;
        }
        Quagga.start();
      }
    );

    // Handle barcode detection
    Quagga.onDetected((data) => {
      const barcode = data.codeResult.code;
      console.log("Detected barcode:", barcode);

      // Stop Quagga after detecting a barcode
      Quagga.stop();
      setBarcodeScanning(false);
      setCameraActive(false);
      fetchBarcodeData(barcode);
    });
  };

  const fetchBarcodeData = async (barcode) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/scanner/barcode/${barcode}/`);
      setBarcodeData(response.data);
      setError("");
    } catch (err) {
      setError("Error fetching barcode data.");
    }
  };

  return (
    <div>
      <h1>Eco Scanner</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Image</button>
        <button onClick={startCamera}>Open Camera</button>
        <button onClick={stopCamera}>Close Camera</button>
        <button onClick={startBarcodeScanning}>Scan Barcode</button>
      </div>

      {/* Image preview section */}
      {image && (
        <div>
          <h3>Uploaded Image Preview:</h3>
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            style={{ maxWidth: "400px", maxHeight: "300px", marginTop: "20px" }}
          />
        </div>
      )}

      {cameraActive && !barcodeScanning && (
        <div>
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            width={400}
            videoConstraints={{
              facingMode: "environment",
            }}
          />
          <button onClick={captureFromCamera}>Capture Image</button>
        </div>
      )}

      {barcodeScanning && (
        <div id="barcode-scanner" style={{ width: "400px", height: "300px" }}>
          {/* Barcode scanner will render here */}
        </div>
      )}

      {detectedObjects.length > 0 && (
        <ul>
          {detectedObjects.map((obj, index) => (
            <li key={index}>
              <strong>{obj.label}</strong> ({obj.confidence * 100}%)
            </li>
          ))}
        </ul>
      )}

      {barcodeData && (
        <div>
          <h2>Barcode Details</h2>
          <p>Product: {barcodeData.product_name}</p>
          <p>Eco Rating: {barcodeData.eco_rating}</p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Scanner;
