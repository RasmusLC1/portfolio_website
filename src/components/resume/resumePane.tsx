import React from 'react'
import WorkExperience from './workExperience'
import About from './about'
import Education from './Education'
import Projects from './Projects'

interface ResumeProps{
  setCurrentPage: (page: string) => void;

}

const ResumePane = ({setCurrentPage}: ResumeProps) => {
  return (
    <div className="pane pane-scrollable">
        <About/>
        <WorkExperience/>
        <Projects setCurrentPage={setCurrentPage}/>
        <Education/>
      </div>
  )
}

export default ResumePane