import { useState } from 'react'
import Project from '../resume/Project'
const Introduction = () => {

    const [temp, setTemp] = useState("")

    const WolfensteinRenderer = {
      title: 'Wolfenstein Renderer',
      language: ["C#"],
      libraries: [".NET", "Windows Form"],
      technologies: [],
      period: 'September 2023 - October 2023',
      github: "https://github.com/RasmusLC1/Wolfenstein-Renderer",
      features: "Focus on simulating 3D rendering using Wolfenstein rendering method and early demo for my Python Dungeon Crawler game",
    };
    
    const techSection = () => {
        return (<div className='techsection'>
            <Project project={WolfensteinRenderer} setCurrentPage={setTemp}/>
            </div>)
    }

  return (
    <div id = "introduction" className='section'>
    <div  className='introduction-Wolfenstein'>
        
        {techSection()}
    </div>
    </div>
  )
}

export default Introduction