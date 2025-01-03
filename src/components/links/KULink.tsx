import ImportImage from '../Images/ImportImage';
import kuLogo from '../../assets/pictures/ku_logo.jpg'; // Import the image

interface Props {
  link: string; // Email address to link to
}

const KULink = ({ link }: Props) => {
  return (
    <span className="company-logo">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ImportImage className="img-fluid ku-img" src={kuLogo} />
      </a>
    </span>
  );
};

export default KULink;