import React from 'react'
import Project from './Project';

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
        title: 'Wolfenstein renderer',
        language: ["C#"],
        libraries: ["Windows Form"],
        technologies: [".NET"],
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


  return (
    <div id="projects"  className = "projects-section">
        <h2>PROJECTS</h2>
        <Project project={dungeonCrawler} setCurrentPage={setCurrentPage}/>
        <Project project={polynomialMultiplication} setCurrentPage={setCurrentPage}/>
        <Project project={recipePage} setCurrentPage={setCurrentPage}/>
        <Project project={WolfensteinRenderer} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Projects