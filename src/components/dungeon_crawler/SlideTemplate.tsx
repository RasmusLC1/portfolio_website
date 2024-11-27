import React from "react";
import Carousel from "../Images/Carousel";
import CodeDisplay from "../codeDisplay/CodeDisplay";

interface SlideTemplateProps {
  id: string;
  headline: string;
  description: React.ReactNode; // JSX content for description
  codeString: string;
  language: string;
  slides: { image: string; description: string }[];
}

const SlideTemplate = ({
  id,
  headline,
  description,
  codeString,
  language,
  slides,
}: SlideTemplateProps) => {
  const renderHeadline = () => (
    <div className="headline">
      <h2>{headline}</h2>
    </div>
  );

  const renderDisplay = () => (
    <div className="split-container-slides">
      <div className="display">
        <Carousel slides={slides} /> {/* Pass the entire slides array */}
        {description}
      </div>
      <div className="code">
        <CodeDisplay codeString={codeString} language = {language} />
      </div>
    </div>
  );

  return (
    <div id={id} className="section">
      {renderHeadline()}
      {renderDisplay()}
    </div>
  );
};

export default SlideTemplate;
