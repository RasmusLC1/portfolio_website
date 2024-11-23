import Image from './Image';
import GitHubLink from './links/githubLink';
import EmailLink from './links/emailLink';
import LinkedInLink from './links/linkedinLink';
import ResumeLink from './links/resumeLink';

interface ProfileProps{
  setCurrentPage: (page: string) => void;
}

const ProfilePane = ({setCurrentPage}: ProfileProps) => {
  const githubURL = 'https://github.com/RasmusLC1';
  const linkedinhubURL = 'https://www.linkedin.com/in/rcarlsen853/';
  const emailURL = 'rasmus.lc3@gmail.com';
  const resumeURL = '../../public/CV/CV - Rasmus Ladefoged Carlsen.pdf';




  const renderLinks = () => {
    return (
        
      <div className="links-container">
        <GitHubLink link={githubURL} />
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
      <Image
        className="img-fluid profile-picture"
        path={'profile.jpg'}
        style="circular"
      />
      {information()}
      {renderLinks()}
      
    </>
  );
};

export default ProfilePane;
