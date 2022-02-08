/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./styles.css";
import { ReactComponent as Logonav } from "../../../Assets/SVGS/logo-nav.svg";
import { userContext } from "../../../Context/userProvider";

export const Nav = () => {
  const { photoURL, color } = useContext(userContext);
  return (
    <div className="nav">
      <div className="contain-nav">
          {/* esto tiene q hacer el link hacia el profile */}
        <a href="#" className="image">
          <img src={photoURL} className="photo" alt="profile image" style={{ borderColor: `${color}` }} />
        </a>
        <a className="logo-nav" href="#">
          <Logonav className="logo-svg" />
        </a>
        <a href="#" className="text-nav">
          DEVS_<span>UNITED</span>
        </a>
      </div>
    </div>
  );
};
