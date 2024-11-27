import { useState } from "react";

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
  width="32"
  height="32"
  viewBox="0 0 48 48"
  xmlns="http://www.w3.org/2000/svg"
>
  <g className={isHovered ? "hovered-icon" : "default-icon"}>
    <polygon points="24,37.1 13,24 35,24" />
    <rect x="20" y="4" width="8" height="4" />
    <rect x="20" y="10" width="8" height="4" />
    <rect x="20" y="16" width="8" height="11" />
    <rect x="6" y="40" width="36" height="4" />
  </g>
</svg>
      </a>
      <p
        style={{
          height: "16px",
          visibility: isHovered ? "visible" : "hidden",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.2s",
          margin: 0,
          fontSize: "12px",
          color: "white",
        }}
      >
        {isHovered ? "Download Resume" : "\u00A0"}
      </p>
    </div>
  );
};

export default ResumeLink;
