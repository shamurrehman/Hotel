import React from "react";
import { withStyles } from "@mui/styles";
import styles from "../styles/About";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Button from "./Button";

const About = ({ classes, isAboutPage }) => {
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h3>About</h3>
        <h2>
          Welcome to <RestaurantIcon style={{ fill: "#ffbe0b" }} /> Restaurantes
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit neque
          voluptatem cumque dolorum hic fugit ducimus minima. Ipsam sapiente
          optio
        </p>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
      </div>
      <div className={classes.gridConatiner}>
        {/* <img src="/images/burger.jpg" alt="" style={{ marginTop: "auto" }} />
        <img src="/images/burger.jpg" alt="" style={{ marginTop: "auto" }} />
        <img src="/images/burger.jpg" alt="" style={{ marginLeft: "auto" }} />
        <img src="/images/burger.jpg" alt="" /> */}
        <img src="/images/rest1.jpg" alt="" style={{ height: "90%" }} />
        <img src="/images/rest2.jpg" alt="" style={{}} />
        <img src="/images/rest2.jpg" alt="" style={{}} />
        <img src="/images/food.jpg" alt="" />
      </div>
      {isAboutPage && <Button text={"Read More"} nav={"/about"} />}
    </div>
  );
};

export default withStyles(styles)(About);
