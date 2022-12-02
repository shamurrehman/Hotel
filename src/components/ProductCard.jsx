import React from "react";
import styles from "../styles/Cart";
import { withStyles } from "@mui/styles";

const ProductCard = ({ item, decrementCart, classes, incrementCart }) => {
  return (
    <div className={classes.product}>
      <div className={classes.div}>
        <img
          src={item.cartImage}
          alt=""
          className=""
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div>
          <h2>{item.name}</h2>
          <p>
            $ <span style={{ fontWeight: "bold" }}>{item.price}</span>
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={() => decrementCart(item.id, item.price, item.quantity)}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => incrementCart(item.id, item.price)} className="">
          +
        </button>
      </div>
    </div>
  );
};

export default withStyles(styles)(ProductCard);
