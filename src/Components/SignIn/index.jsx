import React from "react";
import "./styles.css";
import { ReactComponent as Logo } from "../../Assets/SVGS/logo.svg";
import { ReactComponent as SignInButton } from "../../Assets/SVGS/sing-in-google.svg";
import { ReactComponent as TextFooter } from "../../Assets/SVGS/text-footer.svg";
import {signIn} from "../../Services/Auth"


export const SignIn = () => {
  return (
    <>
      <div className="login-container">
        <div className="logo-container">
          <Logo className="logo" />
        </div>
        <div className="section-credentials">
          {/* SECTION LOGIN */}
          <div className="container-contain">
            <h1 className="titulo-signIn">
              Lorem
              <br /> ipsum dolor
            </h1>
            <p className="text-signIn">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <SignInButton className="button-google" onClick={signIn} />
          {/* ///////////////////////////////////////////// */}
          {/* SECTION REGISTER */}
          {/* <div className="container-contain">
            <div className="welcome-text">
              WELCOME
              <br /> <span>NAME!</span>
            </div>
            <input
              className="type-username"
              type="text"
              placeholder="Type your username"
            />
          </div>
          <div className="favorite-color">
            <p className="text-favorite-color">Select your favorite color</p>
            <div className="container-colors">
              <div className="box red"></div>
              <div className="box orange"></div>
              <div className="box yellow"></div>
              <div className="box green"></div>
              <div className="box blue"></div>
              <div className="box purple"></div>
            </div>
            <button className="button-continue">CONTINUE</button>
          </div> */}
          {/* ///////////////////////////////////////////// */}
          <TextFooter className="text-footer" />
        </div>
      </div>
      <div className="footer-signIn"></div>
    </>
  );
};
