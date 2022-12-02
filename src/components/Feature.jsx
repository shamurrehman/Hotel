import React from "react";
import styles from "../styles/Feature";
import { withStyles } from "@mui/styles";

const Feature = ({ text, para, icon, classes }) => {
  return (
    <div className={classes.root}>
      <img src={icon} alt="" />
      <h3>{text}</h3>
      <p>{para}</p>
    </div>
  );
};

export default withStyles(styles)(Feature);
