import { useState } from 'react';

interface Props {
  link: string; // Email address to link to
}

const MicrosoftLink = ({ link }: Props) => {

  return (
    <span className="company-logo">
    <a
      href= {link}
      target="_blank"
      rel="noopener noreferrer"
      >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <path fill="#f1511b" d="M121.666 121.666H0V0h121.666z" />
      <path fill="#80cc28" d="M256 121.666H134.335V0H256z" />
      <path fill="#00adef" d="M121.663 256.002H0V134.336h121.663z" />
      <path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z" />
  </svg>
    </a>
      </span>

  );
};

export default MicrosoftLink;
