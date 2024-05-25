import React from "react";
import "./ProfileDetails.css";

const ProfileDetails = ({ user }) => {
  return (
    <div className="profile-details">
      <div className="details-left">
        <div className="user-follow">
          <div className="user-details">
            <h1>{user.name}</h1>
            <p>{user.role}</p>
          </div>
          <button className="follow-button">+ Follow</button>
        </div>
        <p>{user.details}</p>
        <p>Social media - {user.contacts.social_media}</p>
        <p>Acting inquiries - {user.contacts.acting_inquiries}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
