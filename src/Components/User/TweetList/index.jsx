/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./styles.css";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../../../Context/userProvider";
import { onSnapshot } from "firebase/firestore";
import { deleteData, updateData } from "../../../Services/Operationes";
import { getCollection } from "../../../Services/Operationes";
import { ReactComponent as Heart } from "../../../Assets/SVGS/like.svg";
import { ReactComponent as UnHeart } from "../../../Assets/SVGS/unlike.svg";
import { ReactComponent as Trush } from "../../../Assets/SVGS/trush.svg";

export const TweetList = () => {
  const [listaTweets, setListaTweets] = useState([]);
  const [deleteBox, setDeleteBox] = useState(false);
  const [like, setLike] = useState(false);
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
    setDeleteBox(false);
  };

  const handleDelete = () => {
    setDeleteBox(true);
  };
  const handleLike = async ({ tweet }) => {
    const { userLikes, id } = tweet;
    const updateUserLikes = [...userLikes, uid];

    // !like
    // ?
    await updateData("tweets", id, { userLikes: updateUserLikes });
    // :
    setLike(!like);
    console.log(tweet);
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
                    onClick={() => handleDelete()}
                  >
                    <Trush />
                  </button>
                ) : null}
              </div>
              {deleteBox &&(
                <div className="delete-message">
                  <div className="texto-aviso">
                    If you press delete the tweet will be deleted permanently
                  </div>
                  <button className="botton delete" onClick={() => handleRemove(tweet.id)}>Delete</button>
                  <button className="botton" onClick={()=>setDeleteBox(false)}>Cancel</button>
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
                  {tweet.likes >= 1 ? (
                    <Heart className="like" />
                  ) : (
                    <UnHeart className="unlike" />
                  )}
                  {/* si el numero es mayor a 0 el corazón se pone rojo, sino no. Para el contador hacer .lenght del array */}
                </button>
                <p>{tweet.likes ? tweet.likes : 0}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
