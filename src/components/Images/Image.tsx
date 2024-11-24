import React from "react";

interface ImageProps {
  className: string;
  path?: string; // Image filename, e.g., "pygame.png"
  style?: string; // Styling class suffix, e.g., "rounded"
  width?: string; // Width of the image
  height?: string; // Height of the image
}

const Image = ({ className, path, style = "rounded", width, height }: ImageProps) => {
  const imagePath = `../../public/pictures/${path}`;
  return (
    <img
      src={imagePath}
      className={`${className} ${style}-image`}
      alt="" // Optional: add a meaningful description
      style={{ width: width, height: height }} // Inline styles for width and height
    />
  );
};

export default Image;
