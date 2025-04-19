import React from "react";
import ExperienceItem from "./ExperienceItem";
import resumeData from "../../resumeInfo/resumeData";
import "./Experience.css"; // Import the CSS file

function Experience() {
  return (
    <div className='experience-section'>
      <h2>Experiences</h2>
      {resumeData.experience.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </div>
  );
}

export default Experience;
