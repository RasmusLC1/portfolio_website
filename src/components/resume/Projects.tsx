import React, { useState } from 'react'
import Project from './Project';
import ProgrammingLanguageLogos from '../links/ProgrammingLanguageLogos';

interface ResumeProps{
    setCurrentPage: (page: string) => void;
  }

const Projects = ({setCurrentPage}: ResumeProps) => {
    const dungeonCrawler = {
        title: 'Dungeon Crawler',
        language: ["Python"],
        libraries: ["Numpy", "Pygame"],
        technologies: ["JSON",  "Data Pickling"],
        period: 'August 2024- Present',
        github: "https://github.com/RasmusLC1/Dungeon-Crawler",
        features: "2D Dungeon Crawler game with randomised dungeons, dynamic lighting and engaging enemy AI",
      };
      
      const polynomialMultiplication = {
        title: 'Polynomial Multiplication',
        language: ["C", "Python"],
        libraries: ["MPFR", "GMP"],
        technologies: ["Build Essentials",  "check"],
        period: 'February 2024- June 2024',
        github: "https://github.com/RasmusLC1/Polynomial-Multiplication",
        features: "Bachelor Project in Optimising Polynomial Multiplication using Karatsuba, Recursive and Iterative Fast Fourier Transform",
      };

      const WolfensteinRenderer = {
        title: 'Wolfenstein Renderer',
        language: ["C#"],
        libraries: [".NET", "Windows Form"],
        technologies: [],
        period: 'September 2023 - October 2023',
        github: "https://github.com/RasmusLC1/Wolfenstein-Renderer",
        features: "Focus on simulating 3D rendering using Wolfenstein rendering method",
      };

      const recipePage = {
        title: 'Recipe Web App',
        language: ["JavaScript", "TypeScript", "CSS", "HTML"],
        libraries: ["React", "Express", "Bootstrap", "Multer", "Axios" ],
        technologies: ["Node.js", "Vite", "ESLint"],
        period: 'November 2024 - Present',
        github: "https://github.com/RasmusLC1/Recipe-Web-App",
        features: "Learning full stack web development by building an interactive web app with backend support",
      };

  const [activeProject, setActiveProject] = useState(0)

  const dungeonCrawlerButton = () => {
    return (
      <button
        className={`ProjectButton ${activeProject === 0 ? 'active' : ''}`}
        onClick={() => setActiveProject(0)}
      >
      Dungeon Crawler <ProgrammingLanguageLogos language="Python" />

      </button>
    );
  };

  const polynomialMultiplicationButton = () => {
    return (
      <button
        className={`ProjectButton ${activeProject === 1 ? 'active' : ''}`}
        onClick={() => setActiveProject(1)}
      >
        Polynomial Multiplication <ProgrammingLanguageLogos language="C" />
      </button>
    );
  };

  const recipePageAppButton = () => {
    return (
      <button
        className={`ProjectButton ${activeProject === 2 ? 'active' : ''}`}
        onClick={() => setActiveProject(2)}
      >
        Recipe Page <ProgrammingLanguageLogos language="TypeScript" />
      </button>
    );
  };

  const wolfensteinRendererButton = () => {
    return (
      <button
        className={`ProjectButton ${activeProject === 3 ? 'active' : ''}`}
        onClick={() => setActiveProject(3)}
      >
        Wolfenstein Renderer <ProgrammingLanguageLogos language="C#" />
      </button>
    );
  };

  const selectProjectButtons = () => {
    return(
      <div className = "selectProjectButtons">
        {dungeonCrawlerButton()}
        {polynomialMultiplicationButton()}
        {recipePageAppButton()}
        {wolfensteinRendererButton()}  
</div>
    )
  }
    
  const renderActiveProject = () => {

    switch(activeProject){
      case 0:
       return <Project project={dungeonCrawler} setCurrentPage={setCurrentPage}/>
      case 1:
        return <Project project={polynomialMultiplication} setCurrentPage={setCurrentPage}/>
      case 2:
        return <Project project={recipePage} setCurrentPage={setCurrentPage}/>
      case 3:
        return <Project project={WolfensteinRenderer} setCurrentPage={setCurrentPage}/>
      default:
       return null
    }

  }

  return (
    <div id="projects"  className = "projects-section">
        <h2>PROJECTS</h2>
        {selectProjectButtons()}
        {renderActiveProject()}
    </div>
  )
}

export default Projects