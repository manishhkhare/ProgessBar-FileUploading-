import axios from "axios";
import React, { useState } from 'react';

export default function ProgressBar() {
  const [file, setFile] = useState();
  const [percent, setPercent] = useState(0);

  // Function to handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Function to submit the form
  const submit = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    let data = new FormData();
    data.append("Files", file);

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:1337/api/images",
        data:{
          File:file
        },
        onUploadProgress: (e) => {
          const percentValue = Math.round((e.loaded * 100) / e.total);
          setPercent(percentValue);
        }
      });

      console.log("File uploaded successfully:", response.data);
      // Optionally handle success here
    } catch (error) {
      console.error("Error uploading file:", error);
      // Optionally handle error here
    }
  };

  return (
    <div className="mb-3 border p-5 m-5">
      <label htmlFor="formFile" className="form-label">Default file input example</label>
      <input className="form-control username" type="file" id="formFile" onChange={handleFileChange} />
      
      {/* Progress bar */}
      <div className="progress mt-3">
        <div className="progress-bar" role="progressbar" style={{ width: `${percent}%` }} aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
          {percent}%
        </div>
      </div>
      
      {/* Submit button */}
      <button className='btn btn-primary mt-4' onClick={submit}>Submit</button>
    </div>
  );
}
