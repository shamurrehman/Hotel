import React, { useEffect, useState } from "react";
import { db, ordersRef, ordersRefInOrder } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Admin = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    onSnapshot(ordersRefInOrder, (res) => {
      const order = res.docs.map((doc) => {
        return doc.data();
      });
      setOrders(order);
    });
  }, []);
  console.log(orders);
  return (
    <div>
      <h1 className="text-2xl" style={{ marginTop: "3.5em", fontSize: "2em" }}>
        Admin/All Orders
      </h1>

      {orders?.map((order) => {
        return (
          <div key={order.email} style={{ marginTop: "3em" }}>
            <h2 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
              Name:{" "}
              <span style={{ color: "gray", fontWeight: "normal" }}>
                {order.name}
              </span>
            </h2>
            <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
              Email:{" "}
              <span style={{ color: "gray", fontWeight: "normal" }}>
                {order.email}
              </span>
            </h3>
            <p style={{ fontSize: "1.3em", fontWeight: "bold" }}>
              Address:{" "}
              <span style={{ color: "gray", fontWeight: "normal" }}>
                {order.address}
              </span>
            </p>
            <p
              style={{ margin: "1em 0", fontSize: "1.2em", fontWeight: "bold" }}
            >
              Order Items
            </p>

            <div>
              <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                Total Price:
                <span style={{ color: "gray", fontWeight: "normal" }}>
                  ${order.cart.price}
                </span>
              </h3>
              <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                Total Items:
                <span style={{ color: "gray", fontWeight: "normal" }}>
                  {order.cart.totalQuantity}
                </span>
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {order.cart.items.map((item) => {
                return (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      marginRight: "15px",
                    }}
                  >
                    <img
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      src={item.cartImage}
                      alt={item.name}
                    />
                    <h2 style={{ fontSize: ".7em" }}>
                      {item.name} <span>x{item.quantity}</span>
                    </h2>
                  </div>
                );
              })}
            </div>
            <hr style={{ marginTop: "2em", border: ".6px solid lightgray" }} />
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
