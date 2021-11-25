import "./App.css";
import { useState } from "react";
import { CreateTweet } from "../src/Components/CreateTweet/index";
import { TweetList } from "./Components/TweetList/index";
import { createUser, logout, signIn } from "../src/Services/Auth";
import { useInput } from "../src/Hooks/useInput";

function App() {
  const [email, HandleEmail] = useInput("");
  const [password, HandlePassword] = useInput("");
  const [userState, setUserState] = useState(null);

  const createNewUser = async () => {
    const user = await createUser(email, password);
    setUserState(user);
  };

  const logIn = async () => {
    const user = await signIn(email, password);
    setUserState(user);
  };

  const logoutUser = async () => {
    await logout();
    setUserState(null);
  };

  return (
    <div>
      {userState ? (
        <button
          onClick={() => {
            logoutUser();
          }}
        >
          Sign Out
        </button>
      ) : (
        <>
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={HandleEmail}
          />
          <input
            type="password"
            placeholder="usuarioeholder"
            value={password}
            onChange={HandlePassword}
          />
          <button onClick={() => createNewUser()}>Crear usuario</button>
          <button onClick={() => logIn()}>Ingresar</button>
        </>
      )}
      <CreateTweet />
      <TweetList />
    </div>
  );
}

export default App;
