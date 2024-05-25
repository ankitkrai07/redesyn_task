import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import Tabs from "./Tabs";
import Posts from "./Posts";
import Footer from "./Footer";
import data from "../data.json";
import "./Profile.css";

const Profile = () => {
  const { user } = data;

  return (
    <div className="profile-container">
      <ProfileHeader user={user} />
      <ProfileDetails user={user} />
      <Tabs />
      <Posts />
      <Footer />
    </div>
  );
};

export default Profile;
