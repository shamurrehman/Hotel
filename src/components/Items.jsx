import React from "react";
import styles from "../styles/Items";
import { withStyles } from "@mui/styles";
import Item from "./Item";

const Items = (props) => {
  const items = props?.items?.map((item) => {
    return (
      <Item
        key={item.id}
        name={item.name}
        img={item.image}
        price={item.price}
        id={item.id}
      />
    );
  });

  return (
    <div className={props.classes.root}>
      {props.hide && <h2>Items</h2>}
      <div className={props.classes.gridConatiner}>{items}</div>
    </div>
  );
};

export default withStyles(styles)(Items);
