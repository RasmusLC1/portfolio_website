import React, { useState, useEffect } from 'react';
import WorkExperience from './WorkExperience';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

interface ResumeProps {
  setCurrentPage: (page: string) => void;
  showEducation: boolean;
  setshowEducation: (state: boolean) => void;
  scrollRequested: boolean;
  setScrollRequested: (state: boolean) => void;
}

const ResumePane: React.FC<ResumeProps> = ({
  setCurrentPage,
  showEducation,
  setshowEducation,
  scrollRequested,

}) => {



  useEffect(() => {
    document.getElementById('workeducation')?.scrollIntoView({ behavior: 'smooth' });
  }, [scrollRequested, setshowEducation]);
  

  const handleWorkButtonClick = (state: boolean) => {
    setshowEducation(state); 
  };

  const toggleButtons = () => {
    return (
      <div className="toggle-button-education-works">
        <div className="toggle-button-education-works-container">
          <div className={`toggle-slider ${showEducation ? 'right' : 'left'}`}></div>
          <button
            className={`toggle-button-education-work ${!showEducation ? 'active' : ''}`}
            onClick={() => 
              handleWorkButtonClick(false)
            }
          >
            Work Experience
          </button>
          <button
            className={`toggle-button-education-work ${showEducation ? 'active' : ''}`}
            onClick={() =>               handleWorkButtonClick(true)
            }
          >
            Education
          </button>
        </div>
      </div>
    );
  };

  const workEducationTransition = () => {
    return (
      <div id="workeducation">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={showEducation ? 'education' : 'work'}
            classNames="slide"
            unmountOnExit
            mountOnEnter
          >
            {showEducation ? <Education /> : <WorkExperience />}
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  };
  

  return (
    <div className="pane pane-scrollable">
      <div id="about">
        <About />
      </div>
      {toggleButtons()}
      {workEducationTransition()}
      <div id="experience">
        <Experience setCurrentPage={setCurrentPage} />
      </div>
      <div id="projects">
        <Projects setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default ResumePane;
