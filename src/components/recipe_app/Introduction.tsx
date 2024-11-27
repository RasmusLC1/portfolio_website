import { useState } from 'react'
import Project from '../resume/Project'
const Introduction = () => {

    const [temp, setTemp] = useState("")

    const recipePage = {
      title: 'Recipe Web App',
      language: ["JavaScript", "TypeScript", "CSS", "HTML"],
      libraries: ["React", "Express", "Bootstrap", "Multer", "Axios" ],
      technologies: ["Node.js", "Vite", "ESLint"],
      period: 'November 2024 - Present',
      github: "https://github.com/RasmusLC1/Recipe-Web-App",
      features: "First small fullstack project in Typescript to learn the basics",
    };
    console.log(temp)
    
    const techSection = () => {
        return (<div className='techsection'>
            <Project project={recipePage} setCurrentPage={setTemp}/>
            </div>)
    }

  return (
    <div id = "introduction" className='section'>
    <div  className='introduction-recipeapp'>
        
        {techSection()}
    </div>
    </div>
  )
}

export default Introduction