import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import "./ProfileStats.css";

const ProfileStats = ({ stats }) => {
  return (
    <div className="profile-stats">
      <div className="stat-item">
        <FaInstagram className="stat-icon" />
        <span>{stats.followers}</span>
        <p>Followers</p>
      </div>
      <div className="stat-item">
        <FaYoutube className="stat-icon" />
        <span>{stats.subscribers}</span>
        <p>Subscribers</p>
      </div>
    </div>
  );
};

export default ProfileStats;
