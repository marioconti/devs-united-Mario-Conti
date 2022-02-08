import React from "react";
import "./styles.css";
import { logOut } from "../../../../../Services/Auth";
import { ReactComponent as Logout } from "../../../../../Assets/SVGS/logout.svg";

export const SignOut = () => {
  return (
    <>
      <button className="logout" onClick={() => logOut()}>
        LOGOUT {<Logout className="cuadraditoLogout" />}
      </button>
    </>
  );
};
