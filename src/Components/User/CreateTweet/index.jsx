import React, { useContext } from "react";
import { userContext } from "../../../Context/userProvider";
import "./styles.css";
import { useInput } from "../../../Hooks/useInput";
import { addData } from "../../../Services/Operationes";

export const CreateTweet = () => {
  const { displayName, photoURL } = useContext(userContext);

  const [tweet, handleTweet, clearTweet] = useInput("");

  const handleSendTweet = async () => {
    // Aquí creamos un objeto que corresponderá a la data que agregaremos a la colección
    const dataTweet = {
      tweet,
      // Aquí solo ponemos el nombre de la propiedad porque es el mismo que está en la base de datos
      // si aquí agregamos otra propiedad que no esté presente en la base de datos se agrega. Ej. id
    };
    await addData("tweets", dataTweet, { user: displayName });
    clearTweet();
  };

  return (
    <form className="form-container" action="#">
      <div className="creat-tweet-container">
        <div className="create-tweet-area">
          <div className="image-profile">
            <img src={photoURL} className="photo-profile" alt="image profile" />
          </div>
          <textarea
            className="text-tweet"
            onChange={handleTweet}
            type="text"
            value={tweet}
            placeholder="What’s happening?"
          ></textarea>
        </div>
        <div className="create-tweet-post">
          <p className="counter-words">17</p>
          <p className="max-words">200 max.</p>
        </div>
        <button
          className="post-button"
          type="submit"
          onClick={handleSendTweet}
          //FIXME: como hacemos que solo se pueda enviar si está completo { = 0 && "disabled"}. ¿Cómo accedo al valor de los inputos para hacer un condicional
        >
          POST
        </button>
      </div>
    </form>
  );
};
