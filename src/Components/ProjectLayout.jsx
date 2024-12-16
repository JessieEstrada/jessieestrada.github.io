import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectCards.css";

const ProjectLayout = () => {
  return (
    <div className="projects-container">
      <ProjectCard
        image="/path-to-image1.jpg"
        title="Project 1"
        description="Description for project 1."
        techStack={["React", "JavaScript", "CSS"]}
        githubLink="https://github.com/project1"
      />
      <ProjectCard
        image="/path-to-image2.jpg"
        title="Project 2"
        description="Description for project 2."
        techStack={["Node.js", "Express", "MongoDB"]}
        githubLink="https://github.com/project2"
      />
      <ProjectCard
        image="/path-to-image3.jpg"
        title="Project 3"
        description="Description for project 3."
        techStack={["Python", "Django", "PostgreSQL"]}
        githubLink="https://github.com/project3"
      />
      <ProjectCard
        image="/path-to-image4.jpg"
        title="Project 4"
        description="Description for project 4."
        techStack={["Vue", "JavaScript", "Sass"]}
        githubLink="https://github.com/project4"
      />
    </div>
  );
};

export default ProjectLayout;
