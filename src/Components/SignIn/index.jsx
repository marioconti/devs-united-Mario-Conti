import React from "react";
import "./styles.css";
import { ReactComponent as Logo } from "../../Assets/SVGS/logo.svg";
import { ReactComponent as SignInButton } from "../../Assets/SVGS/sing-in-google.svg";
import { ReactComponent as TextFooter } from "../../Assets/SVGS/text-footer.svg";
import { signIn } from "../../Services/Auth";

export const SignIn = () => {
  return (
    <>
      <div className="login-container">
        <div className="logo-container">
          <Logo className="logo" />
        </div>
        <div className="section-credentials">
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
          <TextFooter className="text-footer" />
        </div>
      </div>
      <div className="footer-signIn"></div>
    </>
  );
};
