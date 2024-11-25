import React from 'react';

interface MenuPaneProps {
  setshowEducation: (state: boolean) => void;
  setScrollRequested: (state: boolean) => void;
  scrollRequested: boolean;
  
}

const MenuPane = ({ setshowEducation, setScrollRequested, scrollRequested }: MenuPaneProps) => {
  const aboutButton = () => (
    <li>
      <button
        className="menuButton"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        About Me
      </button>
    </li>
  );

  const experienceButton = () => (
    <li>
      <button
        className="menuButton"
        onClick={() => {
          document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Technical Skills
      </button>
    </li>
  );

  const workButton = () => (
    <li>
      <button
        className="menuButton"
        onClick={() => {
          setshowEducation(false);
          setScrollRequested(!scrollRequested);
        }}
      >
        Work Experience
      </button>
    </li>
  );

  const educationButton = () => (
    <li>
      <button
        className="menuButton"
        onClick={() => {
          setshowEducation(true);
          setScrollRequested(!scrollRequested);
        }}
      >
        Education
      </button>
    </li>
  );

  const projectButton = () => (
    <li>
      <button
        className="menuButton"
        onClick={() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Projects
      </button>
    </li>
  );

  return (
    <div className="pane pane-menu">
      <nav className="menu">
        <ul>
          {aboutButton()}
          {experienceButton()}
          {workButton()}
          {educationButton()}
          {projectButton()}
        </ul>
      </nav>
    </div>
  );
};

export default MenuPane;
