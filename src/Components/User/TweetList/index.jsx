/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./styles.css";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../../../Context/userProvider";
import { onSnapshot } from "firebase/firestore";
import { deleteData, updateData } from "../../../Services/Operationes";
import { getCollection, getDataById } from "../../../Services/Operationes";
// import { ReactComponent as Like } from "../../../Assets/SVGS/like.svg";
import { ReactComponent as Unlike } from "../../../Assets/SVGS/unlike.svg";
import { ReactComponent as Trush } from "../../../Assets/SVGS/trush.svg";

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

  const handleRemove = (id) => {
    deleteData("tweets", id);
  };

  // const handleLikes = async () => {
  //   const likesCounter = likes ? likes + 1 : 1;
  //   await updateData("tweets", id, { likes: likesCounter });
  //   // return countLikes;
  // };

  return (
    <div>
      {listaTweets.map((tweet) => {
        return (
          <div className="tweet-container">
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
                  <a href="#" className="user-name">
                    {tweet.name}
                  </a>
                  <p className="date">- 5 jun.</p>
                </div>
                {uid === tweet.uid ? (
                  <button
                    className="trush-svg"
                    onClick={() => handleRemove(tweet.id)}
                  >
                    <Trush />
                  </button>
                ) : null}
              </div>
              <div className="tweet-post">
                <p>{tweet.tweet}</p>
              </div>
              <div className="likes-container">
                <button className="like-svg" onClick={() => {}}>
                  <Unlike className="unlike" />

                  {/* <Like className="like" /> */}
                </button>
                <p>{}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
