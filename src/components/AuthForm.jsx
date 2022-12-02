import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import { styles } from "../styles/AuthForm";

const AuthForm = ({ sign, isSignUp, btnText, classes }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const changeHandler = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
    // if (password === confirmPassword) {
    //   setCheckPassword(null);
    // } else {
    //   setCheckPassword("Password must match Confirm Password");
    // }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "" && password === "" && confirmPassword === "") {
      return;
    }

    if (isSignUp) {
      if (password !== confirmPassword) {
        setCheckPassword("Password must match Confirm Password");
      } else {
        // setEmail("");
        // setPassword("");
        // setConfirmPassword("");
        // setCheckPassword("");
        sign(email, password, confirmPassword);
      }
    } else {
      sign(email, password);
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter Email"
          required
          onChange={changeHandler}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter Password"
          required
          onChange={changeHandler}
        />
        {isSignUp && (
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            required
            onChange={changeHandler}
          />
        )}
        <div className={classes.error}>{checkPassword}</div>
        <button className={classes.btn}>{btnText}</button>
      </form>
    </div>
  );
};

export default withStyles(styles)(AuthForm);
