import ExperienceLayout from "../components/ExperienceLayout";
import IntroSection from "../components/IntroSection";
import ProjectLayout from "../components/ProjectLayout";
import SkillLayout from "../components/SkillLayout";
import "./MainPage.css";
function SoftwareEngineer() {
  return (
    <div className="main-page">
      <div className="software-engineer-page">
        <IntroSection title="Software Engineer" />
        <div id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <SkillLayout specialty="software-engineer" />
        </div>
        <div id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <ProjectLayout specialty="software-engineer" />
        </div>
        <div id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <ExperienceLayout specialty="software-engineer" />
        </div>
        <div className="footer-information"></div>
      </div>
    </div>
  );
}

export default SoftwareEngineer;
