import React, { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState("");

  // e.target.files is an ARRAY, NOT an object. Hence for profileImage we only want the first element of the array [0]
  const changeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();

    formData.append("file", file);
    //formData.append("user", user);

    //fetch or axios POST request OR send to Reducer and have ACTION send POST request
    // in sending a file content-type header should NOT be specified. FILES are NOT JSON.
    // Browsers will annotate automatically
    // also pass the whole file to the body of the request.
    console.log(formData);
  };

  const ImageThumb = ({ image }) => {
    return (
      <img
        src={URL.createObjectURL(image)}
        alt={image.name}
        style={{
          maxHeight: "500px",
          maxWidth: "500px",
          margin: "10px 20px 10px 20px",
        }}
      />
    );
  };

  return (
    <div>
      <form
        action="submit"
        onSubmit={onSubmit}
        style={{ border: "solid 2px", padding: "10px" }}
      >
        <div>
          <input
            type="file"
            name="profileImage"
            onChange={changeHandler}
            style={{}}
          />
        </div>
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>

        <div>{file && <ImageThumb image={file} />}</div>
        <button className="btn btn-primary">Upload Image</button>
      </form>
    </div>
  );
};

export default ImageUpload;
