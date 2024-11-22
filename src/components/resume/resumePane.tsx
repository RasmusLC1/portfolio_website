import React from 'react'
import WorkExperience from './workExperience'
import About from './about'
import Education from './Education'


const resumePane = () => {
  return (
    <div className="pane pane-scrollable">
        <About/>
        <WorkExperience/>
        <Education/>
      </div>
  )
}

export default resumePane