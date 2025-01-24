import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const Scanner = () => {
  const [image, setImage] = useState(null);
  const [detectedObjects, setDetectedObjects] = useState([]);
  const [barcodeData, setBarcodeData] = useState(null);
  const [error, setError] = useState("");
  const [cameraActive, setCameraActive] = useState(false);
  const webcamRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setBarcodeData(null);
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
      if (response.data.detected_objects) {
        setDetectedObjects(response.data.detected_objects);
      } else {
        setError("No objects detected.");
      }
    } catch (err) {
      setError("Error uploading image.");
    }
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

  const handleBarcodeScan = async (barcode) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/scanner/barcode/${barcode}/`);
      setBarcodeData(response.data);
    } catch (err) {
      setError("Error fetching barcode data.");
    }
  };

  const startCamera = () => {
    setCameraActive(true);
    setDetectedObjects([]);
    setBarcodeData(null);
  };

  const stopCamera = () => {
    setCameraActive(false);
  };

  return (
    <div>
      <h1>Eco Scanner</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Image</button>
        <button onClick={startCamera}>Open Camera</button>
        <button onClick={stopCamera}>Close Camera</button>
      </div>

      {cameraActive && (
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
