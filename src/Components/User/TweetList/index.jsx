/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./styles.css";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../../../Context/userProvider";
import { onSnapshot, arrayRemove } from "firebase/firestore";
import { deleteData, updateData } from "../../../Services/Operationes";
import { getCollection } from "../../../Services/Operationes";
import { ReactComponent as Heart } from "../../../Assets/SVGS/like.svg";
import { ReactComponent as UnHeart } from "../../../Assets/SVGS/unlike.svg";
import { ReactComponent as Trush } from "../../../Assets/SVGS/trush.svg";

export const TweetList = () => {
  const [listaTweets, setListaTweets] = useState([]);
  const [deleteBox, setDeleteBox] = useState(false);
  const { uid } = useContext(userContext);

  console.log(listaTweets);

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
    setDeleteBox(false);
  };

  const handleDelete = () => {
    setDeleteBox(true);
  };

  const handleLike = async ({ tweet }) => {
    const { userLikes, likes, id } = tweet;
    const updateUserLikes = [...userLikes, uid];
    const updateLikes = likes;

    if (userLikes.includes(uid)) {
      await updateData("tweets", id, {
        userLikes: arrayRemove(uid),
        likes: updateLikes - 1,
      });
    } else {
      await updateData("tweets", id, {
        userLikes: updateUserLikes,
        likes: updateLikes + 1,
      });
    }
  };

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
                    // FIXME: aquí a la función hay que ver de pasarle los parametros que condiconen que solo sea para ese tweet. Algo parecido a como está en el otro proyecto
                    onClick={() => handleDelete()}
                  >
                    <Trush />
                  </button>
                ) : null}
              </div>
              {deleteBox && (
                <div className="delete-message">
                  <div className="texto-aviso">
                    If you press delete the tweet will be deleted permanently
                  </div>
                  <button
                    className="botton delete"
                    onClick={() => handleRemove(tweet.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="botton"
                    onClick={() => setDeleteBox(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
              <div className="tweet-post">
                <p>{tweet.tweet}</p>
              </div>
              <div className="likes-container">
                <button
                  className="like-svg"
                  onClick={() => {
                    handleLike({ tweet });
                  }}
                >
                  {tweet.likes === 0 ? (
                    <UnHeart className="unlike" />
                  ) : (
                    <Heart className="like" />
                  )}
                </button>
                <p className={tweet.likes > 0 && "favorite"}>{tweet.likes}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
