import React, { useEffect, useState } from "react";
import { IonIcon } from "react-ion-icon";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

let userName;
const SignupPage = () => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsvalid] = useState();
  const [emailIsValid, setEmailIsvalid] = useState(false);
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [FormIsValid, setFormIsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setFormIsValid(
      usernameIsValid === true &&
        enteredEmail.includes("@") &&
        passwordIsValid === true
    );
  }, [enteredEmail, passwordIsValid, usernameIsValid]);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredPassword.trim().length === 0 ||
      enteredEmail.trim().length === 0
    ) {
      return;
    }
    // console.log(enteredUsername, enteredEmail, enteredPassword);
    if (usernameIsValid && passwordIsValid && emailIsValid && FormIsValid) {
      const userData = {
        enteredUsername,
        enteredEmail,
        enteredPassword,
      };

      if (!localStorage.getItem("token-info")) {
        const Users = [userData];
        localStorage.setItem("token-info", JSON.stringify(Users));
      } else {
        const Users = JSON.parse(localStorage.getItem("token-info"));
        Users.push(userData);
        localStorage.setItem("token-info", JSON.stringify(Users));
      }
      setIsLoggedIn(true);
      // userName = enteredEmail.split("@")[0].split(".").join(" ").toUpperCase();
      userName = enteredUsername;
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("userLoggedIn", userName);

      setEnteredUsername("");
      setEnteredEmail("");
      setEnteredPassword("");

      //   dispatch(loginUser()); //redux
      navigate("../", {
        state: { message: `${userName}`, loginStatus: { isLoggedIn } },
      });
    } else {
      // alert("Invalid Credentials");
      console.log("Invalid Credentials");
    }
  };

  const validateUsernameHandler = () => {
    setUsernameIsValid(enteredUsername.trim().length > 5);
  };

  const validateEmailHandler = () => {
    setEmailIsvalid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = (event) => {
    if (event.target.value === enteredPassword) {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{6,}/;
      const passwordLength = enteredPassword.trim().length;
      const uppercasePassword = uppercaseRegExp.test(enteredPassword);
      const lowercasePassword = lowercaseRegExp.test(enteredPassword);
      const digitsPassword = digitsRegExp.test(enteredPassword);
      const specialCharPassword = specialCharRegExp.test(enteredPassword);
      const minLengthPassword = minLengthRegExp.test(enteredPassword);
      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password can't be empty";
      } else if (!uppercasePassword) {
        errMsg = "Password must contain atleast one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "Password must contain atleast one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "Password must contain atleast one digit";
      } else if (!specialCharPassword) {
        errMsg = "Password must contain atleast one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "Password must contain atleast minumum 6 characters";
      } else {
        errMsg = "";
        setPasswordIsvalid(true);
      }
      setErrorMessage(errMsg);
    }
  };

  return (
    <div className="form_container">
      <h2>Create your Account</h2>
      <span>
        Already have an account? <Link to="/login">Login</Link>
      </span>
      <form onSubmit={addUserHandler}>
        <div className="form">
          <div className="form_input">
            <label htmlFor="username">
              <IonIcon name="person" />
            </label>
            <input
              onChange={usernameChangeHandler}
              onBlur={validateUsernameHandler}
              value={enteredUsername}
              type="text"
              placeholder="Username"
              id="username"
              required
            />
          </div>
          <div className="form_input">
            <label htmlFor="email">
              <IonIcon name="mail" />
            </label>
            <input
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              value={enteredEmail}
              type="email"
              placeholder="Enter your email"
              id="email"
              required
            />
          </div>
          <div className="form_input">
            <label htmlFor="password">
              <IonIcon name="lock-closed" />
            </label>
            <input
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
              value={enteredPassword}
              type="password"
              placeholder="Enter password"
              id="password"
              required
            />
          </div>
          <div
            style={{
              color: "black",
              fontWeight: "lighter",
              fontSize: "0.8em",
              marginBottom:"6px"
            }}
          >
            <span>
              *Password should be atleast 6 characters long containing
              [A-Z],[a-z],[0-9] and [#?!@$%^&*-]
            </span>
          </div>
          {errorMessage !== "" && (
            <>
              <p
                className="signup_error_message"
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {errorMessage}
              </p>
            </>
          )}
          <div className="form_btn">
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
