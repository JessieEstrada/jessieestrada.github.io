import React, { useEffect } from "react";
import "./MainPage.css";
import ProjectLayout from "../components/ProjectLayout";
import SkillLayout from "../components/SkillLayout";
import ExperienceLayout from "../components/ExperienceLayout";
const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="main-page">
        <div className="intro-section">
          <div className="intro-grid">
            <div className="intro-social">
              <a href="https://github.com/JessieEstrada" target="_blank" rel="noopener noreferrer" className="social-button">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt="GitHub"
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/JessieEstrada" target="_blank" rel="noopener noreferrer" className="social-button">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                  style={{ borderRadius: "10%" }}
                />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:jestrada3745@gmail.com" className="social-button">
                <img src="./images/Email-icon.png" alt="Email" />
                <span>Email</span>
              </a>
            </div>
            <div className="intro-information">
              <div className="intro-name">Jessie Estrada</div>
              <div className="intro-title">Software Engineer</div>
              <div className="intro-education">
                <p>
                  B.S. Computer Information Systems <br />- California State University of Los Angeles
                </p>
              </div>
              <a
                href="https://docs.google.com/document/d/14-AHRLg02YdlsaOtvqPb9O92XWZ9RD1hKWdQm-G8hzs/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="resume-button">View My Resume</button>
              </a>
            </div>
            <div className="intro-picture">
              <img src="./images/Jessie-Profile-Picture.png" alt="Profile" className="profile-picture" />
            </div>
          </div>
        </div>
        <div id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <SkillLayout />
        </div>
        <div id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <ProjectLayout />
        </div>
        <div id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <ExperienceLayout />
        </div>
        <div className="footer-information"></div>
      </div>
    </>
  );
};

export default MainPage;
