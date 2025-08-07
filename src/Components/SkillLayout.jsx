import SkillCard from "./SkillCard";
import "./SkillCards.css";

const SkillLayout = ({ specialty }) => {
  const skillSets = {
    "software-engineer": [
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", title: "Git/Github" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", title: "Java" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", title: "Python" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", title: "JavaScript" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg", title: "HTML" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg", title: "CSS" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", title: "React" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", title: "SQL" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", title: "PostgreSQL" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", title: "MySQL" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", title: "SQLite" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", title: "Django" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", title: "SpringBoot" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", title: "AWS" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", title: "GraphQL" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain.svg", title: "CircleCI" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg", title: "Jenkins" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg", title: "Insomnia" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg", title: "OAuth2" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", title: "Jira" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg", title: "Docker" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg", title: "Maven" },
    ],

    "data-analyst": [
      { iconUrl: "https://img.icons8.com/?size=100&id=Ny0t2MYrJ70p&format=png&color=000000", title: "PowerBI" },
      { iconUrl: "https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000", title: "Tableau" },
      { iconUrl: "https://img.icons8.com/?size=100&id=117561&format=png&color=000000", title: "Excel" },
      { iconUrl: "https://img.icons8.com/?size=100&id=YZ35lXuPhBsK&format=png&color=000000", title: "SAS Studio" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", title: "SQL" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", title: "Python" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", title: "Java" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg", title: "PowerShell" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", title: "MySQL" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", title: "SQLite" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", title: "Git/Github" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", title: "AWS" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain.svg", title: "CircleCI" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg", title: "Docker" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", title: "Jira" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg", title: "Salesforce" },
      { iconUrl: "https://img.icons8.com/?size=100&id=iFag1p40O89x&format=png&color=22C3E6", title: "SDLC" },
      { iconUrl: "https://img.icons8.com/?size=100&id=6p3lpWgIuhhR&format=png&color=40c059", title: "Agile Development" },
      { iconUrl: "https://img.icons8.com/?size=100&id=105414&format=png&color=FAB005", title: "Statistical Analysis" },
      { iconUrl: "https://img.icons8.com/?size=100&id=zdCVorJjwkbq&format=png&color=7950F2", title: "Data Visualization" },
    ],

    "it-specialist": [
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg", title: "Windows (7-11)" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg", title: "MacOS" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg", title: "ChromeOS" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", title: "Java" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", title: "Python" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg", title: "PowerShell" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", title: "SQL" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg", title: "HTML" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg", title: "CSS" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", title: "JavaScript" },
      { iconUrl: "https://img.icons8.com/?size=100&id=lalV1z6lDBdj&format=png&color=40C057", title: "ServiceNow" },
      { iconUrl: "https://img.icons8.com/?size=100&id=45841&format=png&color=768eb1", title: "Jamf Pro, Now, School" },
      { iconUrl: "https://img.icons8.com/?size=100&id=GTUAnLIBADuV&format=png&color=000000", title: "Remote Desktop Protocol" },
      { iconUrl: "https://img.icons8.com/?size=100&id=6kZdxe7t8OL1&format=png&color=000000", title: "Office 365" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg", title: "Google Suite" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg", title: "Salesforce" },
      { iconUrl: "https://img.icons8.com/?size=100&id=40465&format=png&color=000000", title: "Podio" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", title: "Jira" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", title: "React" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", title: "Git/Github" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", title: "AWS" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain.svg", title: "CircleCI" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg", title: "Docker" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", title: "SpringBoot" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", title: "MySQL" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", title: "SQLite" },
      { iconUrl: "https://img.icons8.com/?size=100&id=Ny0t2MYrJ70p&format=png&color=000000", title: "PowerBI" },
      { iconUrl: "https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000", title: "Tableau" },
    ],

    "systems-analyst": [
      { iconUrl: "https://img.icons8.com/?size=100&id=Ny0t2MYrJ70p&format=png&color=000000", title: "PowerBI" },
      { iconUrl: "https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000", title: "Tableau" },
      { iconUrl: "https://img.icons8.com/?size=100&id=117561&format=png&color=000000", title: "Excel" },
      { iconUrl: "https://img.icons8.com/?size=100&id=YZ35lXuPhBsK&format=png&color=000000", title: "SAS Studio" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", title: "Python" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", title: "Java" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", title: "SQL" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg", title: "PowerShell" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg", title: "HTML" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg", title: "CSS" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", title: "JavaScript" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", title: "SpringBoot" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", title: "React" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", title: "Git/Github" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", title: "AWS" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain.svg", title: "CircleCI" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg", title: "Docker" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg", title: "Salesforce" },
      { iconUrl: "https://img.icons8.com/?size=100&id=lalV1z6lDBdj&format=png&color=40C057", title: "ServiceNow" },
      { iconUrl: "https://img.icons8.com/?size=100&id=iFag1p40O89x&format=png&color=22C3E6", title: "SDLC" },
      { iconUrl: "https://img.icons8.com/?size=100&id=6p3lpWgIuhhR&format=png&color=40c059", title: "Agile Development" },
      { iconUrl: "https://img.icons8.com/?size=100&id=105414&format=png&color=FAB005", title: "Statistical Analysis" },
      { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", title: "Jira" },
      { iconUrl: "https://img.icons8.com/?size=100&id=zdCVorJjwkbq&format=png&color=7950F2", title: "Data Visualization" },
    ],
  };
  const skills = skillSets[specialty] || [];

  return (
    <div className="skills-container">
      {skills.map(({ iconUrl, title }) => (
        <SkillCard key={title} iconUrl={iconUrl} title={title} />
      ))}
    </div>
  );
};

export default SkillLayout;
