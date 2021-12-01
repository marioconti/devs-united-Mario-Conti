import React from "react";
import { signOut } from "../../Services/Auth";

export const SignOut = () => {
  return (
    <>
      <button onClick={() => signOut}>LOGOUT</button>
    </>
  );
};
