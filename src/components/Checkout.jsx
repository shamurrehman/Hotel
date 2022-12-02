import React, { useState } from "react";
import Input from "./Input";
import PaymentDetails from "./PaymentDetails";
import Summary from "./Summary";
import { db, ordersRef } from "../firebase";
import { addDoc } from "firebase/firestore";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ user, cart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const addToFireStore = async () => {
    await addDoc(ordersRef, {
      name,
      email,
      address,
      cart: cart,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addToFireStore();
    navigate("/orderplaced");
  };

  return (
    <div className="" style={{ marginTop: "3em", padding: "2em" }}>
      <h2 className="uppercase text-3xl my-5 font-bold text-orange-500">
        Checkout
      </h2>
      <form
        action=""
        className="lg:flex items-start justify-between"
        onSubmit={onSubmitHandler}
      >
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-2">
            <Input
              id={"name"}
              label={"Name"}
              type={"text"}
              placeholder={"Ihtisham "}
              value={name}
              setValue={setName}
            />
            <Input
              value={email}
              setValue={setEmail}
              id={"email"}
              label={"Email"}
              type={"email"}
              placeholder={"example@ex.com"}
            />
          </div>
          <Input
            value={address}
            setValue={setAddress}
            id={"address"}
            label={"Address"}
            type={"text"}
            placeholder={"Address"}
          />
          <PaymentDetails />
        </div>
        <Summary user={user} />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Checkout);
