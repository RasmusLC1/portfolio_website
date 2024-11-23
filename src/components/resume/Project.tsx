import React from "react";
import ProgrammingLanguageLogos from "../links/ProgrammingLanguageLogos";
import TechLogos from "../links/TechnologiesLogo";
import Libraries from "../links/LibrariesLogos";
import GitHubLink from "../links/githubLink";

interface ProjectProps {
  project: {
    title: string;
    language: string[];
    libraries: string[];
    technologies: string[];
    period: string;
    github: string;
    features: string;
  };
  projectName?: string
  setCurrentPage: (page: string) => void;
}

const Project: React.FC<ProjectProps> = ({
  project,
  projectName = "project-language",
  setCurrentPage,
}) => {
  const { title, language, libraries, technologies, period, github, features } = project;

  const renderLanguages = () => {
    if (language.length == 0){
      return
    }
    return (
      <ul  className={projectName}>
        <strong>Languages:  </strong>
        {language.map((item, index) => (
          <span key={index} className="project-language-item">
            {item}<ProgrammingLanguageLogos language={item} /> 
            {index < language.length - 1 && ', '}
          </span>
        ))}
      </ul>
    );
  };

  const renderTechnologies = () => {
    if (technologies.length == 0){
      return
    }
    return (
      <ul  className={projectName}>
        <strong>Technologies:  </strong>
        {technologies.map((item, index) => (
          <span key={index} className="project-language-item">
            {item}<TechLogos tech={item} /> 
            {index < technologies.length - 1 && ', '}
          </span>
        ))}
      </ul>
    );
  };

  const renderLibraries = () => {
    if (libraries.length == 0){
      return
    }
    return (

      <ul className={projectName}>
        <strong>Libraries/Frameworks: </strong>
        {libraries.map((item, index) => (
          <span key={index} className="project-language-item">
            {item}
            <Libraries library={item} />
            {index < libraries.length - 1 && ", "}
          </span>
        ))}
      </ul>
    );
  };

  const renderFeatures = () => {
    return (
      <div className="project-features">
        {features}
      </div>
    );
  };

  const renderPeriod = () => {
    return (
      <p className="project-period"> {period}</p>
    )
  }
  
  const renderTitle = () => {
    return (
      <>
      <h3>
        <button
          className="project-title"
          onClick={() => setCurrentPage(title)}
          style={{
            background: "none",
            border: "none",
            fontSize: "inherit",
            cursor: "pointer",
            padding: 0,
            textAlign: "left",
          }}
        >
          {title}
        </button>
        {github &&<GitHubLink link = {github} size = "1em" className = "github-project-link"/>}
      </h3>
      </>
    )
  }
  

  return (
    <div className="project">
      {title && renderTitle()}

      {period && renderPeriod()}
        {renderLanguages()}
        {renderLibraries()}
        {renderTechnologies()}
      {features && renderFeatures()}
    </div>
  );
};

export default Project;
