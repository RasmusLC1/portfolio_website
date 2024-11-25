import React from "react";
import Carousel from "../Images/Carousel";
import CodeDisplay from "../codeDisplay/CodeDisplay";

interface SlideTemplateProps {
  headline: string;
  description: React.ReactNode; // Updated to accept JSX
  codeString: string;
  slides: string[];
}

const SlideTemplate = ({ headline, description, codeString, slides }: SlideTemplateProps) => {
    
    const renderHeadline = () => {
        return (
            <div className="headline">
        <h2>{headline}</h2>
      </div>
        )
    }
const renderDisplay = () => {
    return (<div className="split-container">
        <div className="display">
          <Carousel slides={slides} />
          {description}
        </div>
        <div className="code">
          <CodeDisplay codeString={codeString} />
        </div>
      </div>
    )
}
  return (
    <div id="levelgeneration" className="section">
      {renderHeadline()}
      {renderDisplay()}

    </div>
  );
};

export default SlideTemplate;
