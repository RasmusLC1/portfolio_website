import React from 'react';
import KULink from '../links/KULink';
import AULink from '../links/AULink';

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



  // Function to get the logo based on the university name
  const getLogoForUniversity = () => {
    switch (university) {
      case "Copenhagen University":
        return <KULink link = "https://www.ku.dk/studies/bachelor/computer-science"/>;
      case "Aarhus University":
        return <AULink link = "https://bachelor.au.dk/filosofi"/>
      default:
        console.log(university)
        return null;
    }
  };
  
  const activeLogo = getLogoForUniversity();


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
