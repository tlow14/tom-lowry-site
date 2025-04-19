import React from "react";
import "./ProfilePicture.css";

function ProfilePicture() {
  return (
    <div className='profile-picture-container'>
      <img src='/images/profile.jpg' alt='Your Profile' className='profile-image' />
    </div>
  );
}

export default ProfilePicture;
