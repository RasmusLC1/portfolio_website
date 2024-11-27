import ImportImage from '../Images/ImportImage';
import lwLogo from '../../assets/pictures/languagewire.jpg'; // Import the image


interface Props {
  link: string; 
}

const LanguageWireLink = ({ link }: Props) => {

  return (
    <span className="company-logo">
    <a
      href= {link}
      target="_blank"
      rel="noopener noreferrer"
      >
         <ImportImage className="img-fluid languagewire-img" src={lwLogo} />

    </a>
      </span>

  );
};

export default LanguageWireLink;
