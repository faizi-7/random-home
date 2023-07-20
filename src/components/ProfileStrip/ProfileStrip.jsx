import React from "react";
import "./ProfileStrip.scss";
import DevProfile from '../../assets/DevProfile.jpg'


const ProfileStrip = () => {
  return (
    <div className="dev-profile">
        <div className="container">
            <img src={DevProfile} />
            <span>Made By Saifur Rahman , A FullStack Developer</span>
        </div>
    </div>
  );
};

export default ProfileStrip;
