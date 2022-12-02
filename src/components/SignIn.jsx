import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { withStyles } from "@mui/styles";
import styles from "../styles/SignIn";

const SignIn = ({ classes }) => {
  const navigate = useNavigate();
  const [loginErr, setLogimErr] = useState("");

  const logInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);

        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
        if (err.message.includes("user-not-found")) {
          setLogimErr("Incorrect Email");
        }
        if (err.message.includes("wrong-password")) {
          setLogimErr("Incorrect Password");
        }
      });
  };

  // const signout = () => {
  //   signOut(auth);
  // };

  const logIn = (email, password) => {
    logInUser(email, password);
  };

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <>
      <h2 style={{ marginTop: "2.5em", textAlign: "center", fontSize: "2em" }}>
        Sign In
      </h2>
      <div className={classes.root}>
        {/* <span className={classes.error}>{loginErr}</span> */}
        <div className={classes.logInForm}>
          <div>
            <AuthForm sign={logIn} isSignUp={false} btnText={"Log In"} />
          </div>

          <div className={classes.or}>
            <span className={classes.line}></span>
            or
            <span></span>
          </div>

          <div>
            <button className={classes.btn} onClick={signUpWithGoogle}>
              <img src="/images/google.svg" alt="Sign in with google" />
              Sign In With Google
            </button>
          </div>
        </div>
        <p
          style={{ position: "absolute", bottom: 0 }}
          className={classes.signUp}
        >
          Don't have an account ?
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/signup");
            }}
          >
            Sign up
          </button>
        </p>
      </div>
    </>
  );
};

export default withStyles(styles)(SignIn);
