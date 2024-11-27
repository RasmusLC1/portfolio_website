import { useState } from 'react'
import Project from '../resume/Project'
const Introduction = () => {

    const [temp, setTemp] = useState("")

    const dungeonCrawler = {
        title: 'Dungeon Crawler',
        language: ["Python"],
        libraries: ["Numpy", "Pygame"],
        technologies: ["JSON",  "Data Pickling"],
        period: 'August 2024- Present',
        github: "https://github.com/RasmusLC1/Dungeon-Crawler",
        features: "This page showcases some key features from this project which you can see below",
      };
    console.log(temp)
    const techSection = () => {
        return (<div className='techsection'>
            <Project project={dungeonCrawler} setCurrentPage={setTemp}/>
            </div>)
    }

  return (
    <div id = "introduction" className='section'>
    <div  className='introduction-dungeoncrawler'>
        
        {techSection()}
    </div>
    </div>
  )
}

export default Introduction