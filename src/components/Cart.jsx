import { withStyles } from "@mui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "../styles/Cart";
import { incrementInCart } from "../action/incrementInCart";
import { decrementInCart } from "../action/decrementInCart";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const incrementCart = (id, price) => {
    props.incrementInCart(id, price);
  };

  const decrementCart = (id, price, count) => {
    if (count <= 1) {
      return;
    }
    props.decrementInCart(id, price);
  };

  const renderItems = () => {
    let total = 0;
    return props?.cart?.items?.map((item) => {
      total += item.price;

      return (
        <ProductCard
          key={item.id}
          item={item}
          incrementCart={incrementCart}
          decrementCart={decrementCart}
        />
      );
    });
  };

  return (
    <div className={props.classes.root}>
      {!props?.cart?.items?.length ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 className="" style={{ marginBottom: "1.5rem" }}>
            Your cart is empty
          </h2>
          <img
            src="/images/empty-cart.png"
            alt=""
            className=""
            style={{ width: "7rem" }}
          />
          <button
            onClick={() => props.setShowCart(false)}
            style={{
              position: "absolute",
              right: "1em",
              fontSize: "1.2em",
              backgroundColor: "lightgray",
              padding: "2px 10px",
            }}
          >
            X
          </button>
        </div>
      ) : (
        <>
          <div className="" style={{ display: "flex", margin: "0 3em" }}>
            <h2>Cart ({props?.cart?.totalQuantity})</h2>
          </div>
          <div className="" style={{ width: "90%" }}>
            {renderItems()}
          </div>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
            }}
          >
            <span style={{ fontSize: "1.5rem" }} className="">
              Total{" "}
            </span>
            <div className="" style={{ margin: "0 .5rem" }}>
              <span>$</span>
              <span className="font-bold">{props?.cart?.price}</span>
            </div>
          </div>
          <Link
            to="/products/checkout"
            className="bg-orange-400 text-white font-bold px-7 py-3 rounded-md mb-5"
            onClick={() => props.setShowCart(false)}
          >
            Checkout
          </Link>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { incrementInCart, decrementInCart })(
  withStyles(styles)(Cart)
);
