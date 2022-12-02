import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Checkout from "../components/Checkout";

const CheckoutPage = ({ cart, user }) => {
  return (
    <div>
      {cart?.items?.length ? (
        <Checkout user={user} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "7em",
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
          <Link
            to="/items"
            className="bg-orange-400 text-white font-bold px-7 py-3 rounded-md mt-5"
          >
            Add Items
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToPorps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToPorps, null)(CheckoutPage);
