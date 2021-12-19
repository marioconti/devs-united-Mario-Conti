import React, { useContext } from "react";
import "./App.css";
import { SignIn } from "./Components/SignIn";
import { Register } from "../src/Components/Register/index";
import { userContext } from "../src/Context/userProvider";
import { User } from "./Components/User";

const Main = () => {
  const { color } = useContext(userContext);

  return color ? <User /> : <Register />;
};

function App() {
  const user = useContext(userContext);
  return !user ? <SignIn /> : <Main />;
}

export default App;
