import React from 'react';
import Job from './Job';
import './Resume.css';

const WorkExperience = () => {
  const LanguageWire = {
    company: 'LanguageWire, Copenhagen',
    title: 'IT Student Assistant',
    period: 'March 2023 - September 2024',
    responsibilities: [
      'Managed Azure and Active Directory databases',
      'Created an inventory database in SQL',
      'Internal IT support for hardware and software',
    ],
  };

  const Apple = {
    company: 'Apple, Cork',
    title: 'Specialist Product Support',
    period: 'May 2020 - September 2020 (COVID-19)',
    responsibilities: [
      'Completed Apple level 3 training for enterprise, including router and networking support',
      'Remote support for enterprise-level hardware and software issues',
      'Managed server and business account administration',
    ],
  };

  const Accenture = {
    company: 'Accenture, Dublin',
    title: 'QA Testing for Google',
    period: 'December 2017 - August 2018',
    responsibilities: [
      'Automated bug reporting and testing to streamline workflow',
      'Developed and executed automated and manual tests',
      'Coordinated tasks and reporting with a global team',
    ],
  };

  const Concentrix = {
    company: 'Concentrix, Belfast',
    title: 'Social Media Representative for Microsoft',
    period: 'November 2016 - September 2017',
    responsibilities: [
      'Windows, Office, and Microsoft Account support',
      'Public relations via Social Media'
    ],
  };

  return (
    <div id="work" className="work-experience">
      <h2>WORK EXPERIENCE</h2>
      <Job job={LanguageWire} />
      <Job job={Apple} />
      <Job job={Accenture} />
      <Job job={Concentrix} />
    </div>
  );
};

export default WorkExperience;
