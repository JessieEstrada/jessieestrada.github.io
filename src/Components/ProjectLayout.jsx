import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectCards.css";

const ProjectLayout = () => {
  return (
    <div className="projects-container">
      <ProjectCard
        image="./images/WormHole-Gaming-Screenshot.png"
        title="WormHole Gaming"
        description="Explore our front-end application for the Game Store API. Features include easy navigation, checkout, addition of new items, and display of all items. Striving for a user-friendly experience, high performance, and secure transactions."
        techStack={["Java", "SpringBoot", "AWS", "GraphQL", "JWT", "Thymeleaf", "MySQL", "SQL", "CircleCI", "DBeaver", "Docker"]}
        githubLink="https://github.com/JessieEstrada/Game-Store-Complete-App"
      />
      <ProjectCard
        image="./images/Bookstore-Inventory System-Screenshot.png"
        title="Bookstore Invntory System API"
        description="This Bookstore Inventory System REST API manages inventory for any bookstore! Our development team has successfully crafted an extensive and entirely operational API designed to emulate the functionalities of a bookstore inventory system. Our users would be able to create, read, update, and delete: books, publishers, and authors. By employing the capabilitites of Spring Boot JPA and Java, we have constructed models, controllers, repositories, a GraphQL, and comprehensive testing to ensure functionality of the API."
        techStack={["Java", "SpringbBoot", "GraphQL", "DBeaver", "Docker", "MySQL", "SQL"]}
        githubLink="https://github.com/JessieEstrada/Bookstore-Inventory"
      />
      <ProjectCard
        image="./images/Doggie-Dashboard-Screenshot.png"
        title="Doggie Dash"
        description="This webpage accesses a public API and constructs a dashboard view of the data. The dashboard view contains summary statistics and a list view of the data that can be searched and filtered. In specific, this website uses the Petfinder API by Purina to provide a dashboard view of different dogs available for adoption."
        techStack={["React", "HTML", "CSS", "Javascript"]}
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
