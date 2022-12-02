import React from "react";
import Button from "./Button";
import { withStyles } from "@mui/styles";
import styles from "../styles/Hero";

const Hero = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <h1>
          Good Food
          <br />
          Good M<img src="/images/smile-emoji.svg" alt="" />
          <img src="/images/smile-emoji.svg" alt="" />d
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          nesciunt, fugiat, suscipit animi molestiae esse quia nihil eaque ullam
          neque quaerat a inventore, explicabo eius magnam vero rem. Fuga,
          tempora!
        </p>
        <Button text="Explore Food Menu" nav={"/items"} />
      </div>
      <div className={classes.img}>
        <img src="/images/pizza2.png" alt="" />
      </div>
    </div>
  );
};

export default withStyles(styles)(Hero);
