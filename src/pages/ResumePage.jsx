import React from "react";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";

function ResumePage() {
  return (
    <div className='resume-page-container'>
      <div className='profile-section'>
        <ProfilePicture />
        {/* You might want to add your name and title here again or in the header */}
      </div>
      <div className='skills-section-container'>
        <Skills />
      </div>
      <div className='experience-section-container'>
        <Experience />
      </div>
      {/* Add your education section here */}
    </div>
  );
}

export default ResumePage;
