import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Summary = ({ cart, user }) => {
  const navigate = useNavigate();

  const items = cart?.items?.map((item) => {
    return (
      <div
        className="flex max-w-3xl my-4 mx-auto items-center justify-between  p-3 rounded-lg"
        key={item.id}
      >
        <div className="flex items-center space-x-5">
          <img src={item.cartImage} alt="" className="rounded-lg w-20" />
          <div>
            <h2 className="text-xm font-bold text-slate-400 mb-2">
              {item.name}
            </h2>
            <p className="text-md">
              $ <span className="font-bold  text-slate-600">{item.price}</span>
            </p>
          </div>
        </div>
        <p className="pr-5 text-gray-500">x{item.quantity}</p>
      </div>
    );
  });
  return (
    <div className="w-11/12 h-fit shadow-lg max-w-sm mx-auto p-3 my-10">
      <h2 className="text-2xl uppercase font-bold">Summary</h2>
      {items}
      <div className="mt-7 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-500">Total Price</h3>
        <span className="font-bold">$ {cart.price}</span>
      </div>
      {user !== null ? (
        <button
          type="submit"
          className="mt-10 bg-orange-500 w-full p-3 font-bold text-white rounded-md transition-all hover:bg-[#eeae89]"
        >
          Continue & Pay
        </button>
      ) : (
        <button
          type="button"
          className="mt-10 bg-orange-500 w-full p-3 font-bold text-white rounded-md transition-all hover:bg-[#eeae89]"
          onClick={() => navigate("/login")}
        >
          Sign in to place your order
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Summary);
