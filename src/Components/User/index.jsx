import React, { useState } from "react";
import { CreateTweet } from "./CreateTweet/index";
import { TweetList } from "./TweetList/index";
import { Nav } from "./Nav/index";
import { Profile } from "./Profile/index";

export const User = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showPosts, setShowPosts] = useState(true);
  const [showFavorites, setShowFavorites] = useState(false);

  return showProfile ? (
    <Profile
      showProfile={showProfile}
      setShowProfile={setShowProfile}
      showPosts={showPosts}
      setShowPosts={setShowPosts}
      showFavorites={showFavorites}
      setShowFavorites={setShowFavorites}
    />
  ) : (
    <>
      <Nav showProfile={showProfile} setShowProfile={setShowProfile} />
      <CreateTweet />
      <TweetList
        setShowProfile={setShowProfile}
        setShowPosts={setShowPosts}
        setShowFavorites={setShowFavorites}
      />
    </>
  );
};
