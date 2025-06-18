import ExperienceLayout from "../components/ExperienceLayout";
import IntroSection from "../components/IntroSection";
import ProjectLayout from "../components/ProjectLayout";
import SkillLayout from "../components/SkillLayout";
import "./MainPage.css";
function SystemsAnalyst() {
  return (
    <div className="main-page">
      <div className="systems-analyst-page">
        <IntroSection title="Systems Analyst" resumeLink="https://docs.google.com/document/d/1RvsjKek3cGc4eorcBxRd0jxa2y2fBXBtUkWeWLBsQBs/edit?usp=sharing" />
        <div id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <SkillLayout specialty="systems-analyst" />
        </div>
        <div id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <ExperienceLayout specialty="systems-analyst" />
        </div>
        <div id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <ProjectLayout specialty="systems-analyst" />
        </div>

        <div className="footer-information"></div>
      </div>
    </div>
  );
}

export default SystemsAnalyst;
