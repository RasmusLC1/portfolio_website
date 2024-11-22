import React from "react";
import Image from "../Image";
import AppleLink from "../links/appleLink";
import MicrosoftLink from "../links/microsoftLink";
import GoogleLink from "../links/GoogleLink";
import LanguageWireLink from "../links/LanguageWireLink";

interface JobProps {
  job: {
    company: string;
    title: string;
    period: string;
    responsibilities: string[];
  };
}

const Job: React.FC<JobProps> = ({ job }) => {
  const { company, title, period, responsibilities } = job;

  // Function to extract the company name (before the comma)
  const getCompanyName = (fullCompanyName: string): string => {
    return fullCompanyName.split(",")[0].trim().toLowerCase();
  };

  // Function to get the logo based on the company name
  const getLogoForCompany = (companyName: string): JSX.Element | null => {
    switch (companyName) {
      case "apple":
        return <AppleLink link = "https://www.apple.com/"/>;
      case "languagewire":
        return <LanguageWireLink link = "https://www.languagewire.com/en"/>;
      case "accenture":
        return <GoogleLink link = "https://about.google/"/>;
      case "concentrix":
        return <MicrosoftLink link = "https://www.microsoft.com/en-us/"/>;
      default:
        return null;
    }
  };

  // Extract the company name and get the active logo
  const companyName = getCompanyName(company);
  const activeLogo = getLogoForCompany(companyName);

  return (
    <div className="job">
      <h3>
        {activeLogo}
        {company}
      </h3>
      <p className="job-title">{title}</p>

      <p className="job-period">{period}</p>
      <ul className="responsibilities">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Job;
