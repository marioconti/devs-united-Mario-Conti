import React, { useContext } from "react";
import "./App.css";
import { SignIn } from "./Components/SignIn";
import { User } from "../src/Components/User/index";
import { userContext } from "../src/Context/userProvider";

function App() {
  const user = useContext(userContext);
  return <>{user ? <User /> : <SignIn />}</>;
}

export default App;
