import ExperienceLayout from "../components/ExperienceLayout";
import IntroSection from "../components/IntroSection";
import ProjectLayout from "../components/ProjectLayout";
import SkillLayout from "../components/SkillLayout";
import "./MainPage.css";
function ITSpecialist() {
  return (
    <div className="main-page">
      <div className="it-support-page">
        <IntroSection title="IT Specialist" />
        <div id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <SkillLayout specialty="it-specialist" />
        </div>
        <div id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <ExperienceLayout specialty="it-specialist" />
        </div>
        <div id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <ProjectLayout specialty="it-specialist" />
        </div>

        <div className="footer-information"></div>
      </div>
    </div>
  );
}

export default ITSpecialist;
