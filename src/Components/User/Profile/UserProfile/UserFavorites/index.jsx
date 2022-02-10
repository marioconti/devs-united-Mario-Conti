/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "../../../styles.css";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../../../../../Context/userProvider";
import { onSnapshot } from "firebase/firestore";
import { getCollection } from "../../../../../Services/Operationes";
import { ReactComponent as Heart } from "../../../../../Assets/SVGS/like.svg";
import { ReactComponent as UnHeart } from "../../../../../Assets/SVGS/unlike.svg";
import { ReactComponent as Trush } from "../../../../../Assets/SVGS/trush.svg";
import { handleDelete } from "../../../TweetList/functions";
import { handleLike } from "../../../TweetList/functions";

export const UserFavorites = ({
  setShowProfile,
  setShowPosts,
  setShowFavorites,
}) => {
  const [listaTweets, setListaTweets] = useState([]);
  const { uid } = useContext(userContext);

  useEffect(() => {
    const unSuscribe = onSnapshot(getCollection("tweets"), (data) => {
      setListaTweets(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
    return () => {
      unSuscribe();
    };
  }, []);

  const handleInProfile = () => {
    setShowProfile(true);
    setShowPosts(true);
    setShowFavorites(false);
  };

  return (
    <div className="container-tweet-list">
      {listaTweets.map((tweet) => {
        return (
          tweet.userLikes.includes(uid) && (
            <div className="tweet-container" key={tweet.id}>
              <div
                onClick={uid === tweet.uid ? handleInProfile : null}
                className="image-profile"
              >
                <img
                  src={tweet.photo}
                  className="photo-profile"
                  alt="profile image"
                />
              </div>
              <div className="post-info">
                <div className="user-name-date">
                  <div className="flex-row">
                    <div
                      className="user-name"
                      style={{ backgroundColor: tweet.color }}
                    >
                      {tweet.nameUser}
                    </div>
                    <p className="date">- {tweet.dateCreation}</p>
                  </div>
                  {uid === tweet.uid && (
                    <button
                      className="trush-svg"
                      title="Borrar tweet"
                      onClick={() => handleDelete(tweet.id)}
                    >
                      <Trush />
                    </button>
                  )}
                </div>
                <div className="tweet-post">
                  <p>{tweet.tweet}</p>
                </div>
                <div className="likes-container">
                  <button
                    className="like-svg"
                    onClick={() => {
                      handleLike({ tweet }, uid);
                    }}
                  >
                    {tweet.userLikes.includes(uid) ? (
                      <Heart className="like" />
                    ) : (
                      <UnHeart className="unlike" />
                    )}
                  </button>
                  <p
                    className={tweet.userLikes.includes(uid) ? "favorite" : ""}
                  >
                    {tweet.likes}
                  </p>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};
