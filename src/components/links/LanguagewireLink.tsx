import { useState } from 'react';
import Image from '../Image';

interface Props {
  link: string; // Email address to link to
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
