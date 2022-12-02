import React from "react";
import styles from "../styles/Footer";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.links}>
        <h2>Company</h2>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/items">Items</Link>
        </ul>
      </div>

      <div className={classes.contact}>
        <h2>Contact</h2>
        <p>123 Street, New York, USA</p>
        <p>+012 345 67890</p>
        <p>info@example.com</p>
      </div>

      <div className={classes.opening}>
        <h2>Opening</h2>
        <div className={classes.div}>
          <span>Monday</span>
          <span> - </span>
          <span>Saturday</span>
        </div>
        <div className={classes.div}>
          <span>09AM</span>
          <span> - </span>
          <span>08pm</span>
        </div>
        <div className={classes.div}>
          <p>Sunday</p>
          <span>09AM - 08PM</span>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
