import React from "react";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
  return (
    <div
      style={{
        marginTop: "7em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "2em" }}>Your Order has been placed</h1>
      <Link
        to={"/"}
        style={{
          backgroundColor: "lightgray",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Return Home
      </Link>
    </div>
  );
};

export default OrderPlaced;
