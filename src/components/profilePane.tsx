import React from "react";
import ImportImage from "./Images/ImportImage";
import GitHubLink from "./links/githubLink";
import EmailLink from "./links/emailLink";
import LinkedInLink from "./links/linkedinLink";
import ResumeLink from "./links/resumeLink";

import profilePicture from "../assets/pictures/profile.jpg"; // Import the image
import GitHubCalendar, { Activity } from "react-github-calendar";

const ProfilePane: React.FC = () => {
  const githubURL = "https://github.com/RasmusLC1";
  const linkedinhubURL = "https://www.linkedin.com/in/rcarlsen853/";
  const emailURL = "rasmus.lc3@gmail.com";
  const resumeURL = `${
    import.meta.env.BASE_URL
  }/PDF/CV - Rasmus Ladefoged Carlsen.pdf`;

  // Calculate dates
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const currentDate = new Date();

  // Format dates
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const sixMonthsAgoStr = sixMonthsAgo.toLocaleDateString(undefined, options);
  const currentDateStr = currentDate.toLocaleDateString(undefined, options);

  // Function to select contributions from the last six months
  const selectLastHalfYear = (contributions: Activity[]): Activity[] => {
    const halfYearAgo = new Date();
    halfYearAgo.setMonth(halfYearAgo.getMonth() - 6);
    return contributions.filter((day) => new Date(day.date) > halfYearAgo);
  };

  // Render links
  const renderLinks = (): JSX.Element => {
    return (
      <div className="links-container">
        <GitHubLink
          link={githubURL}
          size="32"
          className="link-container"
          showLink={true}
        />
        <LinkedInLink link={linkedinhubURL} />
        <EmailLink link={emailURL} />
        <ResumeLink link={resumeURL} text="Download Resume" />
      </div>
    );
  };

  // Render information
  const information = (): JSX.Element => {
    return (
      <>
        <h1>Rasmus Ladefoged</h1>
        <p>Full Stack Developer</p>
        <p>🎈Copenhagen Denmark🇩🇰</p>
      </>
    );
  };

  // Render GitHub contributions section
  const githubSection = (): JSX.Element => {
    return (
      <div className="github-section" style={{ marginTop: "30px" }}>
        <h2>GitHub Contributions</h2>
        <h3>
          from {sixMonthsAgoStr} to {currentDateStr}
        </h3>
        <GitHubCalendar
          username="RasmusLC1"
          transformData={selectLastHalfYear}
          hideTotalCount={true}
          hideColorLegend={false}
          hideMonthLabels={false}
        />
      </div>
    );
  };

  return (
    <>
      <ImportImage
        className="img-fluid profile-picture"
        src={profilePicture}
        style="circular"
      />
      {information()}
      {renderLinks()}
      {githubSection()}
    </>
  );
};

export default ProfilePane;
