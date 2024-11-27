
interface ImageProps {
  className: string;
  src: string; // Image path imported using import
  style?: string; // Styling class suffix, e.g., "rounded"
  width?: string; // Width of the image
  height?: string; // Height of the image
}

const ImportImage = ({ className, src, style = "rounded", width, height }: ImageProps) => {
  return (
    <img
      src={src}
      className={`${className} ${style}-image`}
      alt="" // Optional: add a meaningful description
      style={{ width, height }} // Inline styles for width and height
    />
  );
};

export default ImportImage;
