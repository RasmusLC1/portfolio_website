import React from 'react';
import './Resume.css';
import Project from './Project';

interface ResumeProps{
    setCurrentPage: (page: string) => void;
  }

const Experience = ({setCurrentPage}: ResumeProps) => {
    const experience = {
        title: '',
        language: ["Python", "C#", "JavaScript", "TypeScript", "CSS", "HTML"],
        libraries: ["React", "Express", "Bootstrap", ".NET", "Numpy", "GNU", "Pygame"],
        technologies: ["Node.js", "Vite", "ESLint", "JSON", "check"],
        period: '',
        github: "",
        features: "",
      };
      

  return (
    <div id="experience" className="experience">
      <h2>TECHNICAL SKILLS</h2>
      <Project project={experience} projectName='technical-skills' setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default Experience;
