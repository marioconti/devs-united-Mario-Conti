import React from "react";
import "./styles.css";
import { NavProfile } from "./NavProfile";
import { UserProfile } from "./UserProfile";
import { UserTweetList } from "./UserTweetsList";

export const Profile = () => {
  return (
    <div className="profile-container">
      <NavProfile />
      <UserProfile />
      <UserTweetList />
    </div>
  );
};
