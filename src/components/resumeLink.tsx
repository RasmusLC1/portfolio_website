import { useState } from 'react';

interface Props {
  link: string;
}

const ResumeLink = ({ link }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="link-container">
      <a
        href={link}
        download // This attribute prompts the browser to download the file
        className="resume-link"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* You can use any icon you prefer. Here's an example of a download icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="white"
          aria-label="Download Resume"
        >
          <path d="M5 20h14v-2H5v2zm7-18l-6 6h4v6h4v-6h4l-6-6z" />
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
        {isHovered ? 'Download Resume' : '\u00A0'}
      </p>
    </div>
  );
};

export default ResumeLink;
