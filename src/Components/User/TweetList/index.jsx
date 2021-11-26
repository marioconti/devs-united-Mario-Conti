import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { deleteData } from "../../../Services/Operationes";
import { getCollection } from "../../../Services/Operationes";

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
      <h1>Lista de Tweets</h1>
      {listaTweets.map((tweet) => {
        return (
          <>
            <h3>{tweet.tweet}</h3>
            <h1>{tweet.autor}</h1>
            <button>Like</button>
            <button onClick={() => handleRemove(tweet.id)}>Remove</button>
          </>
        );
      })}
    </div>
  );
};
