import "./styles.css";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../../../Context/userProvider";
import { onSnapshot } from "firebase/firestore";
import { deleteData } from "../../../Services/Operationes";
import { getCollection } from "../../../Services/Operationes";
import { ReactComponent as Like } from "../../../Assets/SVGS/like.svg";
// import { ReactComponent as Unlike } from "../../../Assets/SVGS/unlike.svg";
import { ReactComponent as Trush } from "../../../Assets/SVGS/trush.svg";

export const TweetList = () => {
  const [listaTweets, setListaTweets] = useState([]);
  const {photoURL, displayName } = useContext(userContext);

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
              <img src={photoURL} className="photo-profile" alt="profile image" />
            </div>
            <div className="post-info">
              <div className="user-name-date">
                <div className="flex-row">
                  <a href="#" className="user-name">
                    {displayName}
                  </a>
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
