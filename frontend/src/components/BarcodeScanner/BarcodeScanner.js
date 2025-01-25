import React, { useState, useRef } from 'react';
import { BrowserBarcodeReader } from '@zxing/library';
import axios from 'axios';
import Webcam from 'react-webcam';

const BarcodeScanner = () => {
  const [barcodeData, setBarcodeData] = useState(null);
  const [error, setError] = useState('');
  const [image, setImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const webcamRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      decodeBarcode(file);
    }
  };

  const decodeBarcode = async (file) => {
    const codeReader = new BrowserBarcodeReader();
    const reader = new FileReader();

    reader.onloadend = async () => {
      try {
        const result = await codeReader.decodeFromImageUrl(reader.result);
        console.log('Barcode result:', result);
        fetchBarcodeData(result.text);
      } catch (err) {
        console.error('Barcode decoding failed:', err);
        setError('Failed to decode barcode.');
      }
    };

    reader.readAsDataURL(file);
  };

  const fetchBarcodeData = async (barcode) => {
    try {
      // Assuming your backend is handling the eco rating and product details
      const response = await axios.get(`http://127.0.0.1:8000/api/scanner/barcode/${barcode}`);
      const product = response.data.product;
      if (product) {
        setBarcodeData({
          product_name: product.product_name || 'Product name not available',
          eco_score: product.eco_score || 'Eco-Score not available',
        });
      } else {
        setError('Product not found.');
      }
      setError('');
    } catch (err) {
      console.error('Error fetching barcode data:', err);
      setError('Error fetching barcode data.');
    }
  };

  const startScanning = () => {
    setIsScanning(true);
    const codeReader = new BrowserBarcodeReader();
    const videoTrack = webcamRef.current.stream.getVideoTracks()[0];

    const scan = () => {
      codeReader.decodeFromVideoDevice(null, videoTrack, (result, err) => {
        if (result) {
          fetchBarcodeData(result.text);
          setIsScanning(false); // Stop scanning once barcode is found
        } else if (err) {
          console.error(err);
        }
      });
    };
    scan();
  };

  const stopScanning = () => {
    setIsScanning(false);
    const videoTrack = webcamRef.current.stream.getVideoTracks()[0];
    videoTrack.stop(); // Stop the webcam feed
  };

  return (
    <div>
      <h1>Barcode Scanner</h1>

      {/* Webcam Feed */}
      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="320px" // Set width to 320px
          height="240px" // Set height to 240px
          videoConstraints={{
            facingMode: "environment",
          }}
        />
      </div>

      {/* Start/Stop Scanning */}
      <div>
        {!isScanning ? (
          <button onClick={startScanning}>Start Scanning</button>
        ) : (
          <button onClick={stopScanning}>Stop Scanning</button>
        )}
      </div>

      {/* Barcode Image Upload */}
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {image && (
        <div>
          <h3>Uploaded Image</h3>
          <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '300px' }} />
        </div>
      )}

      {/* Display Barcode Data */}
      {barcodeData && (
        <div>
          <h2>Barcode Details</h2>
          <p>Product: {barcodeData.product_name}</p>
          <p>Eco-Score: {barcodeData.eco_score}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default BarcodeScanner;
