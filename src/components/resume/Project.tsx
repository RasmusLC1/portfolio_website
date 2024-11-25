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
  projectName?: string;
  setCurrentPage: (page: string) => void;
  techLink?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  project,
  projectName = "project-language",
  setCurrentPage,
  techLink = false,
}) => {
  const { title, language, libraries, technologies, period, github, features } =
    project;

  const getLink = (item: string) => {
    if (!techLink) {
      return "";
    }
    switch (item) {
      case "Python":
        return "Dungeon Crawler";
      case "C#":
        return "Wolfenstein Renderer";
      case "JavaScript":
        return "Recipe Web App";
      case "TypeScript":
        return "Recipe Web App";
      case "CSS":
        return "Recipe Web App";
      case "C":
        return "Polynomial Multiplication";
      case "React":
        return "Recipe Web App";
      case "Express":
        return "Recipe Web App";
      case "Bootstrap":
        return "Recipe Web App";
      case "Node.js":
        return "Recipe Web App";
      case "Vite":
        return "Recipe Web App";
      case "ESLint":
        return "Recipe Web App";
      case ".NET":
        return "Wolfenstein Renderer";
      case "Numpy":
        return "Dungeon Crawler";
      case "JSON":
        return "Dungeon Crawler";
      case "check":
        return "Polynomial Multiplication";
      case "GNU":
        return "Polynomial Multiplication";
      default:
        return "";
    }
  };

  const renderLanguages = () => {
    if (language.length == 0) {
      return;
    }
    return (
      <ul className={projectName}>
        <strong>Languages: </strong>
        {language.map((item, index) => (
          <button
            key={index}
            className="project-language-item"
            onClick={() => setCurrentPage(getLink(item))}
          >
            {item}
            <ProgrammingLanguageLogos language={item} />
          </button>
        ))}
      </ul>
    );
  };

  const renderTechnologies = () => {
    if (technologies.length == 0) {
      return;
    }
    return (
      <ul className={projectName}>
        <strong>Technologies: </strong>
        {technologies.map((item, index) => (
          <button
            key={index}
            className="project-language-item"
            onClick={() => setCurrentPage(getLink(item))}
          >
            {item}
            <TechLogos tech={item} />
          </button>
        ))}
      </ul>
    );
  };

  const renderLibraries = () => {
    if (libraries.length == 0) {
      return;
    }
    return (
      <ul className={projectName}>
        <strong>Libraries/Frameworks: </strong>
        {libraries.map((item, index) => (
          <button
            key={index}
            className="project-language-item"
            onClick={() => setCurrentPage(getLink(item))}
          >
            {item}
            <Libraries library={item} />
          </button>
        ))}
      </ul>
    );
  };

  const renderFeatures = () => {
    return <div className="project-features">{features}</div>;
  };

  const renderPeriod = () => {
    return <p className="project-period"> {period}</p>;
  };

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
          {github && (
            <GitHubLink
              link={github}
              size="1em"
              className="github-project-link"
            />
          )}
        </h3>
      </>
    );
  };

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
