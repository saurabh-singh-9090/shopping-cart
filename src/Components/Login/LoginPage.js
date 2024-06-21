import React, { useState } from "react";
import { IonIcon } from "react-ion-icon";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";


let userName;
const LoginPage = () => {
//   const dispatch = useDispatch();
  const navigate = useNavigate();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    

    // let userArray:[user:user];
    // const users: user[] = [];

    JSON.parse(localStorage.getItem("token-info")).map((user) => {
      if (
        enteredUsername === user.enteredUsername &&
        enteredPassword === user.enteredPassword
      ) {
        // setIsLoggedIn(true);

        // userName = enteredEmail
        //   .split("@")[0]
        //   .split(".")
        //   .join(" ")
        //   .toUpperCase();
        userName = enteredUsername;

        localStorage.setItem("isLoggedIn", "1");
        localStorage.setItem("userLoggedIn", userName);
        // dispatch(loginUser());
        navigate("../");
        // console.log(userName);
        return 1;
      } else {
        setErrorMessage("User not Found");
        return 0;
        // prompt("User not found");
      }
    });

    setEnteredUsername("");
    setEnteredPassword("");
  };

  //   const logout = () => {
  //     localStorage.removeItem("token-info");
  //     setIsLoggedIn(false);
  //   };

  return (
    <div className="form_container">
      <h2>Login</h2>
      <span>
        Don't have an account? <Link to="/signup">Signup</Link>
      </span>
      <form onSubmit={loginHandler}>
        <div className="form">
          <div className="form_input">
            <label>
              <IonIcon name="person" />
            </label>
            <input
              value={enteredUsername}
              onChange={usernameChangeHandler}
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="form_input">
            <label>
              <IonIcon name="lock-closed" />
            </label>
            <input
              value={enteredPassword}
              onChange={passwordChangeHandler}
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          {errorMessage === "" ? null : (
            <p
              className="login_error_message"
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {errorMessage}
            </p>
          )}
          <div className="form_btn">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
