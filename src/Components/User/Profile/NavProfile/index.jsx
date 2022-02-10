import React, { useContext } from "react";
import "./styles.css";
import { ReactComponent as Back } from "../../../../Assets/SVGS/back.svg";
import { userContext } from "../../../../Context/userProvider";
import { SignOut } from "./SignOut";

export const NavProfile = ({ setShowProfile }) => {
  const { nameUser } = useContext(userContext);
  return (
    <div className="nav">
      <div className="contain-nav">
        <div onClick={() => setShowProfile(false)} className="back">
          <Back className="back-svg" /> {nameUser.toUpperCase()}
        </div>
        <SignOut />
      </div>
    </div>
  );
};