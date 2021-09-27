import React from "react";

const ThumbImage = ({ image }) => {
  return (
    <img
      // provide preview of image to upload
      // URL.createObjectURL() takes an object and creats a temporary local URL tied to window object/document.
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

export default ThumbImage;
