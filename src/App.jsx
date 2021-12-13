import React, { useContext, useEffect } from "react";

import "./App.css";
import { SignIn } from "./Components/SignIn";
import { Register } from "../src/Components/Register/index";
import { userContext } from "../src/Context/userProvider";

function App() {
  const user = useContext(userContext);
  let color;
  useEffect(() => {
    if (user) {
      color = user.color;
    }
  }, [user]);

  return <>{!user ? <SignIn /> : color === undefined && <Register />}</>;
}
export default App;
