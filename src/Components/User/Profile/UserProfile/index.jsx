/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import "./styles.css";
import { userContext } from "../../../../Context/userProvider";

export const UserProfile = () => {
  const { photoURL, nameUser, color } = useContext(userContext);
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
        <div className="section">Post</div>
        <div className="section">Favorites</div>
      </div>
    </div>
  );
};
