import Degree from './Degree';
import './Resume.css';

const Education = () => {
  const KUCompsci = {
    university: 'Copenhagen University',
    degreeName: 'Bachelor in Computer Science',
    period: 'September 2021 - November 2024',
    courses: [
      {
        course: 'Computer Systems',
        description: 'Low-level programming in C, cybersecurity, and computer architecture.',
      },
      {
        course: 'Software Development',
        description: 'Object-Oriented Programming, Design Patterns, and SOLID Principles.',
      },
      {
        course: 'Algorithms and Data Structures',
        description: 'Efficient algorithm implementation and runtime analysis.',
      },
      {
        course: 'Modelling and Analysis of Data',
        description: 'Data modeling, handling, and statistics.',
      },
      {
        course: 'IT Security',
        description: 'Principles of computer systems security and general IT security concepts.',
      },
      {
        course: 'Introduction to Computer Graphics',
        description: 'C++ and OpenGL applied to create a 3D renderer.',
      },
      {
        course: 'Linear Algebra',
        description: 'Vector spaces, matrices, determinants, eigenvalues, and eigenvectors.',
      },
      {
        course: 'Mathematical Analysis and Probability Theory',
        description: 'Calculus and probability theory.',
      },
    ],
  };

  const AUPhil = {
    university: 'Aarhus University',
    degreeName: 'Bachelor in Philosophy',
    period: 'September 2020 - June 2021',
    courses: [
      {
        course: 'Reason for Ending Degree',
        description: 'I have always been interested in philosophy, but I also know it is not something I wish to work with. When Covid-19 started, I decided to study philosophy for a year and plan the next steps after',
      },
      {
        course: 'Ethics',
        description: 'Studied different aspects of ethics and the complexities involved in ethical decisions.',
      },
      {
        course: 'History of Philosophy',
        description: 'Explored key philosophical ideas and their development through history.',
      },
      {
        course: 'Logic',
        description: 'Learned formal logic, which later helped in programming.',
      },
      {
        course: 'Epistemology and Philosophy of Science',
        description: 'Studied scientific methods, theories, and how knowledge is understood and gained.',
      },
    ],
  };


  return (
    <div id="workeducation" className="education">
      <Degree degree={KUCompsci} />
      <Degree degree={AUPhil} />
    </div>
  );
};

export default Education;
