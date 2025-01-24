import React, { useState } from 'react';

const Scanner = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your file upload logic here
    console.log(selectedFile);
  };

  return (
    <div className="container mt-5">
      <h1>Upload a Photo to Scan</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fileInput">Select a photo:</label>
          <input type="file" className="form-control-file" id="fileInput" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
};

export default Scanner;