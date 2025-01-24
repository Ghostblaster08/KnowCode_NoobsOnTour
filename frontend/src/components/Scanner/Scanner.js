// Scanner.js (React component)
import React, { useState } from 'react';
import axios from 'axios';

const Scanner = () => {
  const [image, setImage] = useState(null);
  const [detectedObjects, setDetectedObjects] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/scanner/scan/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setDetectedObjects(response.data.detected_objects);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <h1>Object Detection</h1>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>

      <div>
        {detectedObjects.length > 0 && (
          <ul>
            {detectedObjects.map((obj, index) => (
              <li key={index}>
                <strong>{obj.label}</strong> ({obj.confidence * 100}%)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Scanner;
