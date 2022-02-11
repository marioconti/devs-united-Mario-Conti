import React, { useContext, useState } from "react";
import "./styles.css";
import { ReactComponent as Logo } from "../../Assets/SVGS/logo.svg";
import { ReactComponent as TextFooter } from "../../Assets/SVGS/text-footer.svg";
import { useInput } from "../../Hooks/useInput";
import { updateData } from "../../Services/Operationes";
import { userContext } from "../../Context/userProvider";
import { User } from "../User";

export const Register = () => {
  const { uid, color } = useContext(userContext);
  const [favoriteColor, setFavoriteColor] = useState("");
  const [nameUser, handleSendNameUser, clearNameUser] = useInput(null);

  const handlePickColor = (e) => {
    setFavoriteColor(e.nativeEvent.path[0].attributes.color.value);
  };

  const handleSendRegister = async () => {
    await updateData("users", uid, {
      nameUser,
      color: favoriteColor,
    });
    clearNameUser();
  };

  return (
    <>
      {!color ? (
        <div>
          <div className="login-container">
            <div className="logo-container">
              <Logo className="logo" />
            </div>
            <div className="section-credentials">
              <div className="container-contain">
                <div className="welcome-text">
                  WELCOME
                  <br /> <span>NAME!</span>
                </div>
                <input
                  className="type-username"
                  type="text"
                  value={nameUser}
                  placeholder="Type your username"
                  onChange={handleSendNameUser}
                />
              </div>
              <div className="favorite-color">
                <p className="text-favorite-color">
                  Select your favorite color
                </p>
                <div className="container-colors">
                  <div
                    className="box red"
                    color="#f50d5a"
                    onClick={handlePickColor}
                  ></div>
                  <div
                    className="box orange"
                    color="#ff865c"
                    onClick={handlePickColor}
                  ></div>
                  <div
                    className="box yellow"
                    color="#ffea5c"
                    onClick={handlePickColor}
                  ></div>
                  <div
                    className="box green"
                    color="#00da76"
                    onClick={handlePickColor}
                  ></div>
                  <div
                    className="box blue"
                    color="#0096ce"
                    onClick={handlePickColor}
                  ></div>
                  <div
                    className="box purple"
                    color="#800fff"
                    onClick={handlePickColor}
                  ></div>
                </div>
                <button
                  className="button-continue"
                  onClick={() => {
                    handleSendRegister();
                  }}
                  disabled={
                    nameUser.length > 0 && favoriteColor.length > 0
                      ? false
                      : true
                  }
                >
                  CONTINUE
                </button>
              </div>
              <TextFooter className="text-footer" />
            </div>
          </div>
          <div className="footer-signIn"></div>
        </div>
      ) : (
        <User />
      )}
    </>
  );
};
