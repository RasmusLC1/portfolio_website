import ImportImage from './Images/ImportImage';
import GitHubLink from './links/githubLink';
import EmailLink from './links/emailLink';
import LinkedInLink from './links/linkedinLink';
import ResumeLink from './links/resumeLink';

import profilePicture from '../assets/pictures/profile.jpg'; // Import the image


const ProfilePane = () => {
  const githubURL = 'https://github.com/RasmusLC1';
  const linkedinhubURL = 'https://www.linkedin.com/in/rcarlsen853/';
  const emailURL = 'rasmus.lc3@gmail.com';
  const resumeURL = `${import.meta.env.BASE_URL}/public/CV/CV - Rasmus Ladefoged Carlsen.pdf`;





  const renderLinks = () => {
    return (
        
      <div className="links-container">
        <GitHubLink link={githubURL} size = "32" className = "link-container" showLink = {true} />
        <LinkedInLink link={linkedinhubURL} />
        <EmailLink link={emailURL} />
        <ResumeLink link = {resumeURL}/>
      </div>
    );
  };

  const information = () => {
    return (
      <>
      <h1>Rasmus Ladefoged</h1>
      <p>Full Stack Developer</p>
      <p>🎈Copenhagen Denmark🇩🇰</p>
      </>
    )
  }

  return (
    <>
      <ImportImage
        className="img-fluid profile-picture"
        src={profilePicture}
        style="circular"
      />
      {information()}
      {renderLinks()}
      
    </>
  );
};

export default ProfilePane;
