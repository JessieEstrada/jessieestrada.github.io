import React from "react";
import "./MainPage.css";
const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <div className="intro-section">
          <div className="intro-grid">
            <div className="intro-social"></div>
            <div className="intro-picture"></div>
            <div className="intro-information">
              <div className="intro-name">Jessie Estrada</div>
              <div className="intro-title">Software Engineer</div>
              <div className="intro-resume">
                <a href="/path-to-resume.pdf" className="resume-button">
                  View My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="skills"></div>
        <div className="projects"></div>
        <div></div>
        <div className="footer-information"></div>
      </div>
    </>
  );
};
export default MainPage;
