import React from "react";

const SkillCard = (props) => {
  return (
    <div className="SkillCard">
      <img src={props.iconUrl} alt={props.title} className="skill-icon" />
      <h3 className="skill-title">{props.title}</h3>
    </div>
  );
};

export default SkillCard;
