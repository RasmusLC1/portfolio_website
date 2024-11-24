import { useState } from 'react';
import Image from '../Images/Image';

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
         <Image className="img-fluid languagewire-img" path={"languagewire.jpg"} />

    </a>
      </span>

  );
};

export default LanguageWireLink;
