import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectCards.css";

const ProjectLayout = () => {
  return (
    <div className="projects-container">
      <ProjectCard
        image="./images/E-Commerce-Website-Backend-API-Screenshot.png"
        title="E-Commerce Website Backend API"
        description="A production-grade e-commerce backend built with Spring Boot. This RESTful API handles product listings, user authentication with JWT, shopping cart operations, order processing, and role-based access — all designed with best practices and scalability in mind."
        techStack={["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "MySQL", "PostgreSQL", "AWS (EC2)",]}
        githubLink="https://github.com/JessieEstrada/E-Commerce-Website-Backend-API"
      />
      <ProjectCard
        image="./images/WormHole-Gaming-Screenshot.png"
        title="WormHole Gaming"
        description="Explore our front-end application for the Game Store API. Features include easy navigation, checkout, addition of new items, and display of all items. Striving for a user-friendly experience, high performance, and secure transactions."
        techStack={["Java", "SpringBoot", "AWS", "GraphQL", "JWT", "Thymeleaf", "MySQL", "SQL", "CircleCI", "DBeaver", "Docker"]}
        githubLink="https://github.com/JessieEstrada/Game-Store-Complete-App"
      />
      <ProjectCard
        image="./images/Bookstore-Inventory-System-Screenshot.png"
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
        githubLink="https://github.com/JessieEstrada/CodePath-Web102-Projects/tree/main/CodePath-Web102-Project-Data%20Dashboard"
      />
      <ProjectCard
        image="./images/Crewmates-Screenshot.png"
        title="Crewmates"
        description='This web app: Allows the user to assemble their own team of Monkeys, inspired by the game "Bloons Tower Defense". The user can view, create, edit, and delete Monkeys whenever they choose. This web app is connected to Supabase which is a Firebase alternative that allowed this web app to store database information.'
        techStack={["React", "HTML", "CSS", "Javascript", "Supabase"]}
        githubLink="https://github.com/JessieEstrada/CodePath-Web102-Projects/tree/main/CodePath-Web102-Project-Crewmates"
      />
      <ProjectCard
        image="./images/More-Projects-Screenshot.png"
        title="More Projects"
        description="Check out more of my projects on GitHub. You'll find a collection of projects I have worked on with varying technologies and challenges."
        techStack={["Various Technologies"]}
        githubLink="https://github.com/JessieEstrada"
      />
    </div>
  );
};

export default ProjectLayout;
