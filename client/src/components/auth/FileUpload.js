import React, { useRef } from "react";

const FileUpload = ({ onFileSelect }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileInput} />
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      >
        Upload{" "}
      </button>
    </div>
  );
};

export default FileUpload;
