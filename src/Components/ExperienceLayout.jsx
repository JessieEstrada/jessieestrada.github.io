import React from "react";
import "./ExperienceLayout.css";

const ExperienceLayout = () => {
  const experiences = [
    {
      title: "Web Development Alumni",
      company: "CodePath",
      date: "Sep 2023 - Nov 2023",
      location: "Los Angeles",
      bulletPoints: [
        "Applied React for interactive frontends and integrated APIs for dynamic data presentation, demonstrating strong problem-solving skills and attention to detail",
        "Developed and deployed a HobbyHub, an engaging online forum allowing users to create, edit, delete posts, leave comments, and upvote content based on shared interests. Specialized in handling complex user inputs to ensure a seamless and dynamic user experience",
        "Implemented dynamic data display through the Petfinder API, utilizing advanced conditional rendering techniques for the Petfinder project. Constructed a dashboard view showcasing summary statistics, such as the most common age group and popular breed of available dogs for adoption",
      ],
    },
    {
      title: "Netflix Pathways Advanced Software Engineering Bootcamp",
      company: "Netflix",
      date: "Jan 2023 - April 2023",
      location: "Los Angeles",
      bulletPoints: [
        "Launched a REST API using Spring Boot and AWS for a video game marketplace app to enable users to purchase and sell video games, consoles, and gaming clothing",
        "Automated deployments for a bookstore inventory system and a customer management system using Circle CI",
        "Used MockMVC, Insomnia, and other API testing tools to validate API functionality and security, resulting in a 100% validation rate",
        "Collaborated with teammates to contribute to the design and implementation of APIs through effective communication via Jira and participating in code reviews to ensure high code quality and implementation of best practices",
      ],
    },
    {
      title: "Certificate in Computer Programming",
      company: "California State University of Los Angeles",
      date: "May 2020 – Dec 2023",
      location: "Los Angeles",
      bulletPoints: [
        "Completed coursework in programming and web development, building a foundation in full-stack development",
        "Proficient in Java, HTML, CSS, and JavaScript to build dynamic and responsive applications",
        "Relevant Coursework: Application Programming, Web Design and Development, Advanced Java",
      ],
    },
    {
      title: "Bachelor of Science in Computer Information Systems",
      company: "California State University of Los Angeles",
      date: "May 2020 – Dec 2023",
      location: "Los Angeles, CA",
      bulletPoints: [
        "Developed a strong foundation in information systems, with an emphasis on application and web development",
        "Used various data visualization techniques and software to transform raw data into actionable insights",
        "Relevant Coursework: Database Design and Development, Systems Analysis and Design, Big Data, Information Security",
      ],
    },
  ];

  return (
    <div className="experience-section">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3>{exp.title}</h3>
          <p>
            <strong>{exp.company}</strong> | {exp.date} | {exp.location}
          </p>
          <ul>
            {exp.bulletPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceLayout;
