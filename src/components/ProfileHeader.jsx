import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import "./ProfileHeader.css";

const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-header">
      <img src={user.cover_image} alt="Cover" className="cover-image" />
      <div className="header-content">
        <img src={user.profile_image} alt="Profile" className="profile-image" />
        <div className="profile-stats">
          <div className="stat-item">
            <FaInstagram className="stat-icon" />
            <span>{user.stats.followers}</span>
            <p>Followers</p>
          </div>
          <div className="stat-item">
            <FaYoutube className="stat-icon" />
            <span>{user.stats.subscribers}</span>
            <p>Subscribers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
