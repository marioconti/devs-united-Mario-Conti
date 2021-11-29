import "./styles.css";
import { useInput } from "../../../Hooks/useInput";
import { addData } from "../../../Services/Operationes";
import { ReactComponent as Photo } from "../../../Assets/SVGS/photo.svg";
export const CreateTweet = () => {
  const [tweet, handleTweet, clearTweet] = useInput("");
  const [autor, handleAutor, clearAutor] = useInput("");

  const handleSendTweet = () => {
    // Aquí creamos un objeto que corresponderá a la data que agregaremos a la colección
    const dataTweet = {
      tweet,
      autor,
      // Aquí solo ponemos el nombre de la propiedad porque es el mismo que está en la base de datos
      // si aquí agregamos otra propiedad que no esté presente en la base de datos se agrega. Ej. id
    };
    addData("tweets", dataTweet);
    clearTweet();
    clearAutor();
  };

  return (
    <form className="form-container" action="#">
      <div className="creat-tweet-container">
        <div className="create-tweet-area">
          <div className="image-profile">
            <Photo className="photo-profile" />
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
