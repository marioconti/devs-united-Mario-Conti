/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import "./styles.css";
import { userContext } from "../../../../Context/userProvider";

export const UserProfile = ({
  showPosts,
  setShowPosts,
  showFavorites,
  setShowFavorites,
}) => {
  const { photoURL, nameUser, color } = useContext(userContext);

  const handleSetShowPosts = () => {
    setShowPosts(true);
    setShowFavorites(false);
  };

  const handleSetShowFavorites = () => {
    setShowFavorites(true);
    setShowPosts(false);
  };

  return (
    <div className="user-profile-container">
      <img
        src={photoURL}
        className="photo-user"
        alt="profile image"
        style={{ borderColor: `${color}` }}
      />
      <div className="name-user" style={{ background: `${color}` }}>
        {nameUser.toUpperCase()}
      </div>
      <div className="sections-container">
        <div
          onClick={handleSetShowPosts}
          className={`section ${!showPosts && "active"}`}
        >
          Post
        </div>
        <div
          onClick={handleSetShowFavorites}
          className={`section ${!showFavorites && "active"}`}
        >
          Favorites
        </div>
      </div>
    </div>
  );
};
