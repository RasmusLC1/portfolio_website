import { useState } from 'react';

interface Props {
  link: string; // Email address to link to
}

const EmailLink = ({ link }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="link-container">
      <a
        href={`mailto:${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className="email-link"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8 6"
          width="32"
          height="32"
          fill="white"
          aria-label="Email"
        >
          <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />

        </svg>
      </a>
      <p
        style={{
          height: '16px',
          visibility: isHovered ? 'visible' : 'hidden',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.2s',
          margin: 0,
          fontSize: '12px',
          color: 'white',
        }}
      >
        {isHovered ? link : '\u00A0'}
      </p>
    </div>
  );
};

export default EmailLink;
