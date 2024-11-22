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
  setCurrentPage: (page: string) => void;
}

const Project: React.FC<ProjectProps> = ({
  project,
  setCurrentPage,
}) => {
  const { title, language, libraries, technologies, period, github, features } = project;

  const renderLanguages = () => {
    return (
      <ul  className="project-language">
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
    return (
      <ul  className="project-language">
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
    return (
      <ul className="project-language">
        <strong>Frameworks/Libraries: </strong>
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
  
  

  return (
    <div className="project">
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
        <GitHubLink link = {github} size = "1em" className = "github-project-link"/>
      </h3>

      {renderPeriod()}
        <li>{renderLanguages()}</li>
        <li>{renderLibraries()}</li>
        <li>{renderTechnologies()}</li>
      {renderFeatures()}
    </div>
  );
};

export default Project;
