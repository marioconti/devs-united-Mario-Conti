import React from "react";
import "./styles.css";
import { NavProfile } from "./NavProfile";
import { UserProfile } from "./UserProfile";
import { ListaTweetsProfile } from "./ListaTweetsProfile";

export const Profile = ({
  setShowProfile,
  showPosts,
  setShowPosts,
  showFavorites,
  setShowFavorites,
}) => {
  return (
    <div className="profile-container">
      <NavProfile setShowProfile={setShowProfile} />
      <UserProfile
        showPosts={showPosts}
        setShowPosts={setShowPosts}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />
      <ListaTweetsProfile
        showPosts={showPosts}
        showFavorites={showFavorites}
        setShowProfile={setShowProfile}
        setShowPosts={setShowPosts}
        setShowFavorites={setShowFavorites}
      />
    </div>
  );
};
