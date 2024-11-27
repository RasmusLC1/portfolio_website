
interface ImageProps {
  className: string;
  path?: string;
  style?: string;
  width?: string; 
  height?: string;
  clickable?: boolean;
}

const Image = ({ className, path, style = "rounded", width, height, clickable = false }: ImageProps) => {
  const imagePath = `../../public/pictures/${path}`;
  const fullResolutionPath = `../../public/pictures/${path}`; 
  
  const clickablePicture = () => (
    <a href={fullResolutionPath} target="_blank" rel="noopener noreferrer">
      <img
        src={imagePath}
        className={`${className} ${style}-image`}
        alt="" 
        style={{ width: width, height: height }}
      />
    </a>
  );

  const notClickablePicture = () => (
    <img
      src={imagePath}
      className={`${className} ${style}-image`} 
      alt="" 
      style={{ width: width, height: height }}
    />
  );

  return clickable ? clickablePicture() : notClickablePicture(); 
};

export default Image;
