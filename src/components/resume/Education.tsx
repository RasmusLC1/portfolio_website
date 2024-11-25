import React from 'react';
import Degree from './degree';
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

  return (
    <div className="education">
      <Degree degree={KUCompsci} />
    </div>
  );
};

export default Education;
