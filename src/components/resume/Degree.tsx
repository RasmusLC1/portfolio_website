import React from 'react';
import KULink from '../links/KULink';

interface Course {
  course: string;
  description: string;
}

interface DegreeProps {
  degree: {
    university: string;
    degreeName: string;
    period: string;
    courses: Course[];
  };
}

const Degree: React.FC<DegreeProps> = ({ degree }) => {
  const { university, degreeName, period, courses } = degree;



  // Function to extract the university name (before the comma)
  const getUniversityName = (fullUniversityName: string): string => {
    return fullUniversityName.split(",")[0].trim().toLowerCase();
  };

  // Function to get the logo based on the university name
  const getLogoForUniversity = (universityName: string): JSX.Element | null => {
    switch (universityName) {
      case "copenhagen university":
        return <KULink link = "https://www.ku.dk/en"/>;
      default:
        console.log(universityName)
        return null;
    }
  };
  
  const universityName = getUniversityName(university);
  const activeLogo = getLogoForUniversity(universityName);


  return (
    <div className="degree">
      <h3>
        {activeLogo}
        {university}
      </h3>
      <p className="degree-title">{degreeName}</p>
      <p className="degree-period">{period}</p>
      <ul className="courses">
        {courses.map((courseItem, index) => (
          <li key={index}>
            <strong>{courseItem.course}</strong>: {courseItem.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Degree;
