import React from 'react'
import WorkExperience from './workExperience'
import About from './about'
import Education from './Education'
import Projects from './Projects'
import Experience from './Experience'
import { motion } from 'framer-motion';

interface ResumeProps{
  setCurrentPage: (page: string) => void;
}

const ResumePane = ({setCurrentPage}: ResumeProps) => {


  return (
    <div className="pane pane-scrollable">

        <About/>
        <Experience setCurrentPage={setCurrentPage}/>
        <WorkExperience/>
        <Projects setCurrentPage={setCurrentPage}/>
        <Education/>
      </div>
  )
}

export default ResumePane