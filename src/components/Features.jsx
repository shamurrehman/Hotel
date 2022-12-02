import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { withStyles } from "@mui/styles";
import styles from "../styles/Features";
import Feature from "./Feature";

const Features = ({ classes }) => {
  return (
    <div className={classes.root}>
      <h3>Features</h3>
      <h2>Our Awesome Services</h2>
      <div className={classes.feature}>
        <Feature
          icon="/images/quality-food.svg"
          text={"Quality Food"}
          para="Keep healty food readily avaliable. When you get hungry, you're more likely to"
        />
        <Feature
          icon="/images/yummy-smiley.svg"
          text="Super Taste"
          para="Keep healty food readily avaliable. When you get hungry, you're more likely to"
        />
        <Feature
          icon="/images/delivery.svg"
          text="Fast Delivery"
          para="Keep healty food readily avaliable. When you get hungry, you're more likely to"
        />
        <Feature
          icon="/images/custSer.svg"
          text="24/7 Service"
          para="Keep healty food readily avaliable. When you get hungry, you're more likely to"
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Features);
