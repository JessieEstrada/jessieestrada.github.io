import "./IntroSection.css";

const IntroSection = ({ title, resumeLink }) => (
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
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" style={{ borderRadius: "10%" }} />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:jestrada3745@gmail.com" className="social-button">
          <img src="./images/Email-icon.png" alt="Email" />
          <span>Email</span>
        </a>
      </div>
      <div className="intro-information">
        <div className="intro-name">Jessie Estrada</div>
        <div className="intro-title">{title}</div>
        <div className="intro-education">
          <p>
            B.S. Computer Information Systems <br />- California State University of Los Angeles
          </p>
        </div>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <button className="resume-button">View My Resume</button>
        </a>
      </div>
      <div className="intro-picture">
        <img src="./images/Jessie-Profile-Picture.png" alt="Profile" className="profile-picture" />
      </div>
    </div>
  </div>
);

export default IntroSection;
