import React from "react";
import SkillCard from "./SkillCard";
import "./SkillCards.css";

const SkillLayout = () => {
  return (
    <div className="skills-container">
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" title="Git/Github" />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" title="Java" />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" title="Python" />
      <SkillCard
        iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        title="JavaScript"
      />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" title="HTML" />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" title="CSS" />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" title="React" />
      <SkillCard
        iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
        title="SQL"
      />
      <SkillCard
        iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
        title="MySQL"
      />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" title="SQLite" />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" title="Django" />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" title="SpringBoot" />
      <SkillCard
        iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        title="AWS"
      />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" title="GraphQL" />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain.svg" title="CircleCI" />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" title="Jenkins" />

      <SkillCard
        iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg"
        title="Insomnia"
      />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" title="OAuth2" />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" title="Jira" />
      <SkillCard iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" title="Docker" />
    </div>
  );
};

export default SkillLayout;
