import "./ExperienceLayout.css";

const experienceSets = {
  "software-engineer": [
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
      title: "Software Engineering Fellow",
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
  ],

  "it-specialist": [
    {
      title: "Technical Support Intern ",
      company: "Jamf",
      date: "Jan 2023 – Aug 2023",
      location: "Remote",
      bulletPoints: [
        "Provided IT support for Jamf products, troubleshooting issues via ServiceNow and online knowledge bases, reducing ticket resolution time by an estimated 20%",
        "Handled customer support via 3CLogic, Jamf Pro, Jamf Now, and Jamf School, improving service response times and contributing to a 30% improvement in overall customer satisfaction",
        "Collaborated with cross-functional teams to optimize Jamf product performance, integrating solutions with AWS and Jamf Cloud to enhance reliability and minimize downtime",
      ],
    },
    {
      title: "Technical Support Specialist ",
      company: "Super Purposes",
      date: "Jan 2022 – April 2022",
      location: "Remote",
      bulletPoints: [
        "Managed system configurations, virtual access, and communication tools, improving IT reliability and reducing downtime for remote teams",
        "Utilized CRM software to track and resolve IT support requests, averaging 12 tickets per day, enhancing response efficiency and cutting issue resolution time by about 25%",
        "Led IT onboarding and security training for new employees, increasing adoption of security tools and improving company-wide cybersecurity awareness",
        "Collaborated with Cyber Security Specialists to implement data security measures, strengthening compliance and reducing security risks across the organization",
      ],
    },
    {
      title: "Software Engineering Fellow",
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
  ],

  "data-analyst": [
    {
      title: "Systems Analyst Intern",
      company: "YMCA of Metropolitan Los Angeles",
      date: "Aug 2023 – Dec 2023",
      location: "Los Angeles",
      bulletPoints: [
        "Documented system use cases and created detailed UML diagrams (use case, state machine, class, and sequence) to map reporting workflows and automate business processes",
        "Cleaned and transformed Excel datasets and leveraged Power BI to create dynamic, automated dashboards",
        "Translated complex data insights into clear, actionable visualizations in Power BI, enabling non-technical stakeholders to understand and leverage key metrics in decision-making",
        "Delivered a complete design package including Power BI integration strategy and stakeholder-ready system diagrams",
      ],
    },
    {
      title: "Software Engineering Fellow",
      company: "Netflix",
      date: "Jan 2023 – Apr 2023",
      location: "Los Angeles",
      bulletPoints: [
        "Built and deployed REST APIs with Spring Boot on AWS, strengthening knowledge of backend systems and cloud infrastructure",
        "Automated CI/CD pipelines with CircleCI for book and customer microservices, reducing deployment time and increasing release consistency",
        "Automated API testing and ensured system reliability through MockMVC, supporting seamless customer experiences",
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
  ],

  "systems-analyst": [
    {
      title: "Systems Analyst Intern",
      company: "YMCA of Metropolitan Los Angeles",
      date: "Aug 2023 – Dec 2023",
      location: "Los Angeles",
      bulletPoints: [
        "Analyzed and documented business processes, gathering requirements through stakeholder communication to map reporting workflows using detailed UML diagrams (use case, state machine, class, sequence)",
        "Designed and proposed system integration to automate reporting, increasing efficiency and reducing manual errors",
        "Cleaned, transformed, and validated Excel datasets to ensure data quality for Power BI dashboards",
        "Developed interactive Power BI dashboards translating complex data into actionable insights, empowering non-technical stakeholders with real-time metrics",
        "Delivered a comprehensive design package including system diagrams and Power BI integration strategy, facilitating seamless handoff to development teams",
      ],
    },
    {
      title: "Technical Support Intern",
      company: "Jamf",
      date: "Jan 2023 – Aug 2023",
      location: "Remote",
      bulletPoints: [
        "Provided IT support for Jamf products, troubleshooting issues via ServiceNow and online knowledge bases, reducing ticket resolution time by an estimated 20%",
        "Handled customer support via 3CLogic, Jamf Pro, Jamf Now, and Jamf School, improving service response times and contributing to a 30% improvement in overall customer satisfaction",
        "Collaborated with cross-functional teams to optimize Jamf product performance, integrating solutions with AWS and Jamf Cloud to enhance reliability and minimize downtime",
      ],
    },
    {
      title: "Software Engineering Fellow",
      company: "Netflix",
      date: "Jan 2023 – Apr 2023",
      location: "Los Angeles",
      bulletPoints: [
        "Translated functional requirements into REST API solutions using Spring Boot deployed on AWS, enhancing backend capabilities to support business needs",
        "Automated CI/CD pipelines with CircleCI to streamline deployment processes, reducing release time and increasing development efficiency",
        "Designed and executed automated API tests to ensure system stability, directly supporting seamless user experiences",
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
  ],
};

const ExperienceLayout = ({ specialty }) => {
  const experiences = experienceSets[specialty] || [];

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
