import axios from "axios"; // corrected import for axios
import React, { useState } from 'react';
import config from "./config.json";

export default function ProgressBar() {
  const [file, setFile] = useState(null);
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
      // Upload file using axios
      const response = await axios.post("http://localhost:1337/api/images", data, 
       {
        headers: {"Authorization" : `Bearer ${config.token}`},
        // headers: {
        //   token:"f311338631b6d64bf69520b11d216cde776840ffdb44f4cc1b3672c392f2bb11ca328b4b04982fc9d0ae3e36e89e391914560efa69c3b2ffde05e16f5bbdd6842461121d0459fcf5f758c3b5f441886852b97dee21e678651edfde7c0eb2958958b4543e2e84e29516a1955697c25dd7751829f60e6661cbaac1a05e64fead96",
        // },
        onUploadProgress: (progressEvent) => {
          // Calculate percent completed
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setPercent(percentCompleted); // Update progress bar
        }
      });

      // Handle response
      console.log("File uploaded successfully:", response.data);
      // Optionally, you can add code to handle successful upload here
    } catch (error) {
      console.error("Error uploading file:", error);
      // Optionally, you can add code to handle errors here
    }
  };

  return (
    <div className="mb-3 border p-5 m-5">
      <label htmlFor="formFile" className="form-label">Default file input example</label>
      <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
      
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
