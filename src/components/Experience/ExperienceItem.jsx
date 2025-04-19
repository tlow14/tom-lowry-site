import React from "react";

function ExperienceItem({ experience }) {
  return (
    <div className='experience-item'>
      <h3>{experience.company}</h3>
      <div className='experience-details'>
        <h4>{experience.title}</h4>
        <p className='location'>{experience.location}</p>
        <p className='dates'>{experience.dates}</p>
        <ul className='responsibilities'>
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;
