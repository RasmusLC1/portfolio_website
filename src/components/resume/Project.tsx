import React from "react";

interface ProjectProps {
  project: {
    title: string;
    period: string;
    features: string[];
  };
  setCurrentPage: (page: string) => void;
}

const Project: React.FC<ProjectProps> = ({ project, setCurrentPage}) => {
  const {title, period, features } = project;

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
</h3>

      <p className="project-period">{period}</p>
      <ul className="project-features">
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
