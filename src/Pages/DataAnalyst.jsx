import ExperienceLayout from "../components/ExperienceLayout";
import IntroSection from "../components/IntroSection";
import ProjectLayout from "../components/ProjectLayout";
import SkillLayout from "../components/SkillLayout";
import "./MainPage.css";
function DataAnalyst() {
  return (
    <div className="main-page">
      <div className="data-analyst-page">
        <IntroSection title="Data Analyst" />
        <div id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <SkillLayout specialty="data-analyst" />
        </div>
        <div id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <ProjectLayout specialty="data-analyst" />
        </div>
        <div id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <ExperienceLayout specialty="data-analyst" />
        </div>
        <div className="footer-information"></div>
      </div>
    </div>
  );
}

export default DataAnalyst;
