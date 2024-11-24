import React from "react";
import WorkExperience from "./WorkExperience";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";

interface ResumeProps {
  setCurrentPage: (page: string) => void;
}

const ResumePane = ({ setCurrentPage }: ResumeProps) => {
  return (
    <div className="pane pane-scrollable">
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Experience setCurrentPage={setCurrentPage} />
      </div>
      <div className="section">
        <WorkExperience />
      </div>
      <div className="section">
        <Projects setCurrentPage={setCurrentPage} />
      </div>
      <div className="section">
        <Education />
      </div>
    </div>
  );
};

export default ResumePane;
