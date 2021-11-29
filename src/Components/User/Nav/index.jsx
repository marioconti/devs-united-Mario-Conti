import "./styles.css";
import React from "react";
import { ReactComponent as Logonav } from "../../../Assets/SVGS/logo-nav.svg";
import { ReactComponent as Photo } from "../../../Assets/SVGS/photo.svg";
export const Nav = () => {
  return (
    <div className="nav">
      <div className="contain-nav">
        <div className="image">
          <Photo className="photo" />
        </div>
        <a className="logo-nav" href="#">
          <Logonav className="logo-svg" />
        </a>
        <h1 className="text-nav">
          DEVS_<span>UNITED</span>
        </h1>
      </div>
    </div>
  );
};
