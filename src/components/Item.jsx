import { withStyles } from "@mui/styles";
import React, { useState } from "react";
import { addToCart } from "../action/addToCart";
import styles from "../styles/Item";
import AddTocartBtn from "./AddTocartBtn";
import { connect } from "react-redux";

const Item = ({ name, img, price, id, classes, addToCart }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((preState) => preState + 1);
  };
  const decrement = () => {
    if (count < 2) {
      return;
    } else {
      setCount((preState) => preState - 1);
    }
  };

  return (
    <div className={classes.root}>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>
        <span>$</span>
        <span className={classes.price}>{price}</span>
      </p>
      <AddTocartBtn
        add={addToCart}
        count={count}
        increment={increment}
        name={name}
        price={price}
        img={img}
        id={id}
      />
    </div>
  );
};

export default connect(null, { addToCart })(withStyles(styles)(Item));
