import React from "react";
import { withStyles } from "@mui/styles";
import styles from "../styles/AddTocartBtn";

const AddTocartBtn = ({
  classes,
  count,
  id,
  add,
  increment,
  name,
  img,
  price,
}) => {
  const addToCart = () => {
    const itm = {
      id: id,
      name: name,
      cartImage: img,
      price: price,
      quantity: 1,
    };
    increment();

    add(itm, 1, price);
  };
  return (
    <div className={classes.root} onClick={addToCart}>
      Add
    </div>
  );
};

export default withStyles(styles)(AddTocartBtn);
