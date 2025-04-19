import React from "react";
import skillsData from "../../resumeInfo/skillsData"; // Now importing the .jsx file
import "./Skills.css";
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <div className='skills-section'>
      <h2>My Skills</h2>
      {skillsData.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  );
}

export default Skills;
