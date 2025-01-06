import './Resume.css';
import Project from './Project';

interface ResumeProps{
    setCurrentPage: (page: string) => void;
  }

const Experience = ({setCurrentPage}: ResumeProps) => {
    const experience = {
        title: '',
        language: ["Python", "C#", "JavaScript", "TypeScript", "C", "C++", "CSS"],
        libraries: ["React", "Next.js", "Prisma", ".NET", "Numpy", "GNU"],
        technologies: ["Node.js", "Stripe", "Resend", "Prisma ORM", "Git", "Azure", "PostgreSQL", "JSON"],
        period: '',
        github: "",
        features: "",
      };
      

  return (
    <div id="experience" className="experience">
      <h2>TECHNICAL SKILLS</h2>
      <Project project={experience} projectName='technical-skills' setCurrentPage={setCurrentPage} techLink = {true}/>
    </div>
  );
};

export default Experience;
