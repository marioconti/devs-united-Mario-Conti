import { useInput } from "../../../Hooks/useInput";
import { addData } from "../../../Services/Operationes";

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
    <form action="#">
      <h1>Twitter Devs</h1>
      <textarea
        onChange={handleTweet}
        type="text"
        value={tweet}
        placeholder="Escribe un tweet"
      ></textarea>
      <input
        onChange={handleAutor}
        type="text"
        value={autor}
        placeholder="Type your username" // este input no hará falta
      ></input>
      <button
        type="submit"
        onClick={handleSendTweet}
        //FIXME: como hacemos que solo se pueda enviar si está completo { = 0 && "disabled"}. ¿Cómo accedo al valor de los inputos para hacer un condicional
      >
        Enviar
      </button>
    </form>
  );
};
