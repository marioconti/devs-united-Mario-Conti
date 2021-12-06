import React, { useContext } from "react";
import "./App.css";
import { SignIn } from "./Components/SignIn";
import { User } from "../src/Components/User/index";
import { userContext } from "../src/Context/userProvider";
import { Register } from "../src/Components/Register/index";

function App() {
  const user = useContext(userContext);

  return (
    <>
      <Register />
      {!user ? <SignIn /> : <User />}
    </>
  );
}
export default App;
