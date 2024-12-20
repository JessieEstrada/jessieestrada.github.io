import React, { useEffect } from "react";
import "./MainPage.css";
import ProjectLayout from "../components/ProjectLayout";
import SkillLayout from "../components/SkillLayout";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <>
      <div className="main-page">
        <div className="intro-section">
          <div className="intro-grid">
            <div className="intro-social">
              <a href="https://github.com/JessieEstrada" target="_blank" rel="noopener noreferrer" className="social-button">
                <img src="/images/github-mark.jpeg" alt="GitHub" style={{ borderRadius: "50%" }} />
                <span>GitHub</span>
              </a>

              <a href="https://linkedin.com/in/JessieEstrada" target="_blank" rel="noopener noreferrer" className="social-button">
                <img src="/images/In-Blue-96@2x.jpeg" style={{ borderRadius: "10%" }} />

                <span>LinkedIn</span>
              </a>
              <a href="mailto:your-email@example.com" className="social-button">
                <img src="/images/Email-icon.png" alt="Email" />
                <span>Email</span>
              </a>
            </div>
            <div className="intro-information">
              <div className="intro-name">Jessie Estrada</div>
              <div className="intro-title">Software Engineer</div>
              <div className="intro-resume">
                <a
                  href="https://docs.google.com/document/d/14-AHRLg02YdlsaOtvqPb9O92XWZ9RD1hKWdQm-G8hzs/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="resume-button">View My Resume</button>
                </a>
              </div>
            </div>
            <div className="intro-picture">
              <img src="/images/Jessie-Profile-Picture.jpg" alt="Profile" className="profile-picture" />
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
        <div className="footer-information"></div>
      </div>
    </>
  );
};

export default MainPage;
