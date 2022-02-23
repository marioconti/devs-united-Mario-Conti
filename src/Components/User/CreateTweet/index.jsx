/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
import { userContext } from "../../../Context/userProvider";
import "./styles.css";
import { useInput } from "../../../Hooks/useInput";
import { addData } from "../../../Services/Operationes";

export const CreateTweet = () => {
  const { displayName, photoURL, uid, color, nameUser } =
    useContext(userContext);
  const dateCreation = new Date().toLocaleDateString("es-AR", { timeZone: "UTC" });
  const [tweet, handleTweet, clearTweet] = useInput(null);
  const CHAR_LIMIT = 200;


  // Fx que crea el objeto con la data que se agregará a la base de datos
  const handleSendTweet = async () => {
    // Aquí solo ponemos el nombre de la propiedad porque es el mismo que está en la base de datos
    // si aquí agregamos otra propiedad que no esté presente en la base de datos se agrega. Ej. id
    await addData("tweets", {
      tweet,
      name: displayName,
      uid,
      photo: photoURL,
      userLikes: [],
      likes:0,
      color,
      nameUser,
      dateCreation,
    });
    clearTweet();
  };
  // Barra de progreso
  const calculatePercentage = () => (tweet.length / CHAR_LIMIT) * 100;

  // Enviar tweet con ctrl + enter
  const handleKeyPress = (e) => {
    if (e.ctrlKey) {
      if (e.code === "Enter") handleSendTweet();
    }
  };

  return (
    <form className="form-container" action="#">
      <div className="creat-tweet-container">
        <div className="create-tweet-area">
          <div className="image-profile">
            <img src={photoURL} className="photo-profile" alt="image profile"/>
          </div>
          <div className="text-area">
            <textarea
              className="text-tweet"
              onKeyPress={handleKeyPress}
              onChange={handleTweet}
              type="text"
              value={tweet}
              placeholder="What’s happening?"
              maxLength="200"
            ></textarea>
            <div className="progress-wrapper">
              <div
                className="progress-bar"
                style={{ width: `${calculatePercentage()}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="create-tweet-post">
          <p className="counter-words">{tweet.length}</p>
          <p className="max-words">200 max.</p>
        </div>
        <button
          className="post-button"
          type="submit"
          title="PRESS TO SEND: CTRL + ENTER"
          onClick={handleSendTweet}
          disabled={tweet.length > 0 ? false : true}
        >
          POST
        </button>
      </div>
    </form>
  );
};
