import ProjectCard from "./ProjectCard";
import "./ProjectCards.css";

const ProjectLayout = ({ specialty }) => {
  const projectSets = {
    "software-engineer": [
      {
        image: "./images/E-Commerce-Website-Backend-API-Screenshot.png",
        title: "E-Commerce Website Backend API",
        description:
          "A production-grade e-commerce backend built with Spring Boot. This RESTful API handles product listings, user authentication with JWT, shopping cart operations, order processing, and role-based access — all designed with best practices and scalability in mind.",
        techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "MySQL", "PostgreSQL", "AWS (EC2)"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/E-Commerce-Website-Backend-API",
      },
      {
        image: "./images/WormHole-Gaming-Screenshot.png",
        title: "WormHole Gaming",
        description:
          "Explore our front-end application for the Game Store API. Features include easy navigation, checkout, addition of new items, and display of all items. Striving for a user-friendly experience, high performance, and secure transactions.",
        techStack: ["Java", "SpringBoot", "AWS", "GraphQL", "JWT", "Thymeleaf", "MySQL", "SQL", "CircleCI", "DBeaver", "Docker"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/Game-Store-Fullstack-App",
      },
      {
        image: "./images/Bookstore-Inventory-System-Screenshot.png",
        title: "Bookstore Inventory System API",
        description:
          "This Bookstore Inventory System REST API manages inventory for any bookstore. Users can create, read, update, and delete books, publishers, and authors. Built using Spring Boot, JPA, and GraphQL, with Docker and DBeaver for development and testing.",
        techStack: ["Java", "SpringBoot", "GraphQL", "DBeaver", "Docker", "MySQL", "SQL"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/Bookstore-Inventory",
      },
      {
        image: "./images/Doggie-Dashboard-Screenshot.png",
        title: "Doggie Dash",
        description:
          "This webpage accesses a public API and constructs a dashboard view of the data. It uses the Petfinder API by Purina to show summary statistics and searchable/filterable lists of adoptable dogs.",
        techStack: ["React", "HTML", "CSS", "Javascript"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/CodePath-Web102-Projects/tree/main/CodePath-Web102-Project-Data%20Dashboard",
      },
      {
        image: "./images/Crewmates-Screenshot.png",
        title: "Crewmates",
        description:
          "A web app inspired by 'Bloons Tower Defense' that lets users build a custom team of Monkeys. Users can create, read, update, and delete entries. The app uses Supabase to manage data storage.",
        techStack: ["React", "HTML", "CSS", "Javascript", "Supabase"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/CodePath-Web102-Projects/tree/main/CodePath-Web102-Project-Crewmates",
      },
      {
        image: "./images/More-Projects-Screenshot.png",
        title: "More Projects",
        description: "Check out more of my projects on GitHub. You'll find a collection of projects I have worked on with varying technologies and challenges.",
        techStack: ["Various Technologies"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada",
      },
    ],

    "it-specialist": [
      {
        image: "./images/Network-Design-BSB-Screenshot.png",
        title: "Network Design: Biological Science Building",
        description:
          "Developed a comprehensive network design for the Biological Science Building, including detailed logical and physical architecture, server and client software setup plans, and secure access protocols. Produced via system setup documentation and installation procedures for Windows Server 2022 and associated software, demonstrating strong planning and network design skills.",
        techStack: [
          "Windows Server 2022",
          "Windows 11",
          "Microsoft Office 365",
          "Cat6 Cabling",
          "Wireless Access Points",
          "Network Security",
          "Network Design",
        ],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/Biological-Science-Building-Network-Design",
      },
    ],

    "data-analyst": [
      {
        image: "./images/Uber-NYC-For-Hire-Vehicles-Trip-Data-Analysis-2021-Screenshot.png",
        title: "Uber NYC For-Hire Vehicles Trip Data Analysis (2021)",
        description:
          "Data analysis project using Hadoop and Hive to process and visualize ride-sharing trip data from Uber, Lyft, Via, and Juno in NYC. Explores trip patterns, driver pay, congestion surcharges, and popular pickup locations to identify trends and improve service placement.",
        techStack: ["Hadoop", "Hive", "Python", "Excel", "3D Maps"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/NYC-Uber-Trip-Data-2021-Project",
      },
      {
        image: "./images/Spotify-2023-Top-Songs-Analysis-Screenshot.png",
        title: "Spotify 2023 Top Songs Analysis",
        description:
          "Analyzed top-streamed songs of 2023 using Power BI. Cleaned data, modeled key metrics, and built interactive dashboards revealing trends in artist popularity, platform dominance, and seasonal release patterns.",
        techStack: ["Power BI", "Data Cleaning", "Data Modeling", "Visualization", "Business Insights"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/Spotify-2023-Top-Songs-Analysis",
      },
      {
        image: "./images/Washington-State-EV-Analysis-Screenshot.png",
        title: "Washington State EV Data Analysis",
        description:
          "Analyzed Washington's electric vehicle registrations to uncover trends in EV adoption, model popularity, and range efficiency. Delivered actionable insights using Tableau and Excel, revealing Tesla's market dominance and growing BEV adoption.",
        techStack: ["Excel", "Tableau", "Data Visualization", "Statistical Analysis"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/Washington-State-Electric-Vehicle-Data-Analysis",
      },
    ],

    "systems-analyst": [
      {
        image: "./images/Spotify-2023-Top-Songs-Analysis-Screenshot.png",
        title: "Spotify 2023 Top Songs Analysis",
        description:
          "Cleaned and modeled streaming data to deliver actionable business insights via dynamic Power BI dashboards highlighting artist engagement, platform usage, and seasonal trends.",
        techStack: ["Power BI", "Data Cleaning", "Data Modeling", "Data Visualization"],
        linkIcon: "https://img.icons8.com/?size=100&id=30464&format=png&color=000000",
        linkUrl: "https://github.com/JessieEstrada/Spotify-2023-Top-Songs-Analysis",
      },
      {
        image: "./images/Understanding-Tutoring-Student-Impact-Screenshot.png",
        title: "Understanding Tutoring: The Analysis on Student Impact",
        description:
          "Analyzed Southeast Community Foundation tutoring data to evaluate the impact of tutoring hours, tutor effectiveness, and skill practice on student diagnostic growth and question answering performance. Delivered insights to optimize tutoring schedules, implement tutor rotations, and improve student outcomes.",
        techStack: ["Data Analysis", "Data Visualization", "Dashboarding", "Business Intelligence", "Excel", "Tableau"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/Understanding-Tutoring-Student-Impact",
      },
      {
        image: "./images/Washington-State-EV-Analysis-Screenshot.png",
        title: "Washington State EV Data Analysis",
        description:
          "Analyzed Washington's electric vehicle registrations to uncover trends in EV adoption, model popularity, and range efficiency. Delivered actionable insights using Tableau and Excel, revealing Tesla's market dominance and growing BEV adoption.",
        techStack: ["Excel", "Tableau", "Data Visualization", "Statistical Analysis"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/Washington-State-Electric-Vehicle-Data-Analysis",
      },
      {
        image: "./images/Uber-NYC-For-Hire-Vehicles-Trip-Data-Analysis-2021-Screenshot.png",
        title: "Uber NYC For-Hire Vehicles Trip Data Analysis (2021)",
        description:
          "Data analysis project using Hadoop and Hive to process and visualize ride-sharing trip data from Uber, Lyft, Via, and Juno in NYC. Explores trip patterns, driver pay, congestion surcharges, and popular pickup locations to identify trends and improve service placement.",
        techStack: ["Hadoop", "Hive", "Python", "Excel", "3D Maps"],
        linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        linkUrl: "https://github.com/JessieEstrada/NYC-Uber-Trip-Data-2021-Project",
      },
    ],
  };

  const projects = projectSets[specialty] || [];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          linkUrl={project.linkUrl}
          linkIcon={project.linkIcon}
        />
      ))}
    </div>
  );
};

export default ProjectLayout;
