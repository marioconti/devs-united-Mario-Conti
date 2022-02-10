import React from "react";
import { UserPosts } from "../UserProfile/Userposts";
import { UserFavorites } from "../UserProfile/UserFavorites";

export const ListaTweetsProfile = ({
  showPosts,
  showFavorites,
  setShowProfile,
  setShowPosts,
  setShowFavorites,
}) => {
  return (
    <>
      {showFavorites && (
        <UserFavorites
          setShowProfile={setShowProfile}
          setShowPosts={setShowPosts}
          setShowFavorites={setShowFavorites}
        />
      )}
      {showPosts && (
        <UserPosts
          setShowProfile={setShowProfile}
          setShowPosts={setShowPosts}
          setShowFavorites={setShowFavorites}
        />
      )}
    </>
  );
};
