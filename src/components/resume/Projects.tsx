import React from 'react'
import Project from './Project';

interface ResumeProps{
    setCurrentPage: (page: string) => void;
  }

const Projects = ({setCurrentPage}: ResumeProps) => {
    const dungeonCrawler = {
        title: 'Dungeon Crawler',
        period: 'August 2024- Present',
        features: [
          'Dynamic lighting engine',
          'Enemy AI',
          'Tile system',
          'Spatial Hashing',
          'Cellular Automata',
          'Data handling',
        ],
      };
  return (
    <div className = "projects-section">
        <h2>PROJECTS</h2>
        <Project project={dungeonCrawler} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Projects