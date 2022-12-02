import React from "react";
import { withStyles } from "@mui/styles";
import styles from "../styles/Button";
import { useNavigate } from "react-router-dom";

const Button = ({ text, classes, nav }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.root} onClick={() => navigate(nav)}>
      {text}
    </div>
  );
};

export default withStyles(styles)(Button);
