import React from "react";

interface ImageProps {
  className: string;
  path?: string; // Only the filename, e.g., "lasanga.jpg"
  style?: string; // Only the filename, e.g., "lasanga.jpg"
}

const Image = ({ className, path, style = "rounded"}: ImageProps) => {
  const imagePath = `../../public/pictures/${path}`;
  return (
    <img
      src={imagePath}
      className={`${className} ${style}-image`} // Add the rounded-image class
      alt="" // Picture not found message
    />
  );
};



export default Image;
