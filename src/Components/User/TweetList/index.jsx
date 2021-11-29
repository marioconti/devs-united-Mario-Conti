import "./styles.css";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { deleteData } from "../../../Services/Operationes";
import { getCollection } from "../../../Services/Operationes";
import { ReactComponent as Like } from "../../../Assets/SVGS/like.svg";
import { ReactComponent as Trush } from "../../../Assets/SVGS/trush.svg";

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
          <>
            <h3>{tweet.tweet}</h3>
            <h1>{tweet.autor}</h1>
            <button className="like-svg">
              <Like class="like" />
            </button>
            <button
              className="trush-svg"
              onClick={() => handleRemove(tweet.id)}
            >
              <Trush />
            </button>
          </>
        );
      })}
    </div>
  );
};
