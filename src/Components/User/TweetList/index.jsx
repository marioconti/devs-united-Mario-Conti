import "./styles.css";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { deleteData } from "../../../Services/Operationes";
import { getCollection } from "../../../Services/Operationes";
import { ReactComponent as Like } from "../../../Assets/SVGS/like.svg";
import { ReactComponent as Unlike } from "../../../Assets/SVGS/unlike.svg";
import { ReactComponent as Trush } from "../../../Assets/SVGS/trush.svg";
import { ReactComponent as Photo } from "../../../Assets/SVGS/photo.svg";

export const TweetList = () => {
  const [listaTweets, setListaTweets] = useState([]);

  useEffect(async () => {
    const unSuscribe = await onSnapshot(getCollection("tweets"), (data) => {
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

  const handleRemove = (id) => {
    deleteData("tweets", id);
  };

  return (
    <div>
      {listaTweets.map((tweet) => {
        return (
          <div className="tweet-container">
            <div className="image-profile">
              <Photo className="photo-profile" />
            </div>
            <div className="post-info">
              <div className="user-name-date">
                <div className="flex-row">
                  <a href="#" className="user-name">USERNAME</a>
                  <p className="date">- 5 jun.</p>
                </div>
                <button
                  className="trush-svg"
                  onClick={() => handleRemove(tweet.id)}
                >
                  <Trush />
                </button>
              </div>
              <div className="tweet-post">
                <p>{tweet.tweet}</p>
              </div>
              <div className="likes-container">
                <button className="like-svg">
                  {/* <Unlike className="unlike" /> */}
                  <Like className="like" />
                </button>
                <p>100</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
