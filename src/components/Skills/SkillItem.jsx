import React from "react";
import "./SkillItem.css"; // Make sure you have this CSS file

function SkillItem({ skill }) {
  const barStyle = {
    width: `${skill.level}%`,
    backgroundColor: skill.color,
  };

  return (
    <div className='skill-item'>
      <div className='skill-info'>
        {skill.logo && <img src={`/logos/${skill.logo}`} alt={`${skill.name} logo`} className='skill-logo' />}
        <span>{skill.name}</span>
      </div>
      <div className='skill-bar-container'>
        <div className='skill-bar' style={barStyle}>
          <span className='skill-level'>{skill.level}%</span>
        </div>
      </div>
    </div>
  );
}

export default SkillItem;
