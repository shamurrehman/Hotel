import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// import { app } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { auth } from "../firebase";
import styles from "../styles/Signup";

// Component start from here
const SignUp = ({ classes }) => {
  const [signUpErr, setSignUpErr] = useState("");
  const navigate = useNavigate();
  // const auth = getAuth(app);

  const signUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);

        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
        if (err.message.includes("weak-password")) {
          setSignUpErr("Password should be at least 6 characters");
        }
        if (err.message.includes("email-already-in-use")) {
          setSignUpErr("Email already in use");
        }
      });
  };

  const signUp = (email, password, confirmPassword) => {
    signUpUserWithEmailAndPassword(email, password);
  };

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        alert(error.email);
      });
  };

  return (
    <>
      <h2 style={{ marginTop: "2.5em", textAlign: "center", fontSize: "2em" }}>
        Sign Up
      </h2>
      <div className={classes.root}>
        {/* <span className={classes.error}>{signUpErr}</span> */}
        <div className={classes.SignUpForm}>
          <div>
            <AuthForm sign={signUp} btnText={"Sign up"} isSignUp={true} />
            {/* {checkPassword} */}
          </div>

          <div className={classes.or}>
            <span className={classes.line}></span>
            or
            <span></span>
          </div>

          <div>
            <button onClick={signUpWithGoogle} className={classes.btn}>
              <img src="/images/google.svg" alt="Sign with google" />
              Sign up With Google
            </button>
          </div>
        </div>
        <p
          style={{ position: "absolute", bottom: 0 }}
          className={classes.login}
        >
          Already have an account ?
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/login");
            }}
          >
            Login
          </button>
        </p>
      </div>
    </>
  );
};

export default withStyles(styles)(SignUp);
