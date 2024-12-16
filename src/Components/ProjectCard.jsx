import React from "react";
import "./ProjectCards.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="project-details">
        <h2 className="project-title">{props.title}</h2>
        <p className="project-description">{props.description}</p>
        <ul className="project-tech-stack">
          {props.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <a href={props.githubLink} className="project-github-link" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
