/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./styles.css";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../../../Context/userProvider";
import { onSnapshot } from "firebase/firestore";
import { getCollection } from "../../../Services/Operationes";
import { ReactComponent as Heart } from "../../../Assets/SVGS/like.svg";
import { ReactComponent as UnHeart } from "../../../Assets/SVGS/unlike.svg";
import { ReactComponent as Trush } from "../../../Assets/SVGS/trush.svg";
import { handleDelete } from "./functions";
import { handleLike } from "./functions";
export const TweetList = () => {
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

  return (
    <div className="container-tweet-list">
      {listaTweets.map((tweet) => {
        return (
          <div className="tweet-container" key={tweet.id}>
            <div className="image-profile">
              <img
                src={tweet.photo}
                className="photo-profile"
                alt="profile image"
              />
            </div>
            <div className="post-info">
              <div className="user-name-date">
                <div className="flex-row">
                  <a
                    href="#"
                    className="user-name"
                    style={{ backgroundColor: tweet.color }}
                  >
                    {tweet.nameUser}
                  </a>
                  <p className="date">- {tweet.dateCreation}</p>
                </div>
                {uid === tweet.uid ? (
                  <button
                    className="trush-svg"
                    title="Borrar tweet"
                    onClick={() => handleDelete(tweet.id)}
                  >
                    <Trush />
                  </button>
                ) : null}
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
                  {tweet.likes === 0 ? (
                    <UnHeart className="unlike" />
                  ) : (
                    <Heart className="like" />
                  )}
                </button>
                <p className={tweet.likes > 0 ? "favorite" : ""}>
                  {tweet.likes}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
