import React, { useState } from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { withStyles } from "@mui/styles";
import styles from "../styles/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { connect } from "react-redux";
import Cart from "./Cart";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Header = ({ classes, showLink, setShowLinks, cart, user }) => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className={classes.root}>
      <div className={classes.cart}>
        <ShoppingCartIcon
          onClick={() => {
            setShowCart(true);
            setShowLinks(false);
          }}
          fontSize="large"
          style={{ fill: "orange", cursor: "pointer" }}
        />
        <span>{cart.totalQuantity}</span>
      </div>
      <div className={classes.logo} onClick={() => navigate("/")}>
        <RestaurantIcon style={{ fill: "orange" }} fontSize="medium" />
        {/* <h2>Restaurantes</h2> */}
        <img src="/images/RESTAURANTES.svg" alt="" />
      </div>

      {showLink && (
        <div
          className={classes.overlay}
          onClick={() => setShowLinks(false)}
        ></div>
      )}
      {showCart && (
        <div
          className="fixed z- inset-0 bg-[rgba(0,0,0,0.6)] h-screen w-screen"
          onClick={() => {
            setShowCart(false);
            console.log("hi");
          }}
        ></div>
      )}
      <MenuIcon
        fontSize="large"
        style={{ fill: "orange", cursor: "pointer" }}
        onClick={() => {
          setShowCart(false);
          setShowLinks(true);
        }}
      />
      {showLink && (
        <div className={classes.links}>
          <Link to="/" onClick={() => setShowLinks(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setShowLinks(false)}>
            About
          </Link>
          <Link to="/items" onClick={() => setShowLinks(false)}>
            Items
          </Link>
          {user !== null ? (
            <button
              onClick={() => {
                signOut(auth);
                setShowLinks(false);
              }}
            >
              Log out
            </button>
          ) : (
            <Link to="/login" onClick={() => setShowLinks(false)}>
              Log in
            </Link>
          )}
          {/* {user?.email === "" &&
          user?.uid === "" ? (
            <Link onClick={() => setShowLinks(false)} to={"/admin"}>
              Admin Panel
            </Link>
          ) : (
            ""
          )} */}
        </div>
      )}

      {showCart && (
        <div
          style={{
            position: "fixed",
            top: "4.3rem",
            left: "0",
            zIndex: "30",
            width: "100%",
            overflowY: "scroll",
            height: "600px",
          }}
          className="example"
        >
          <Cart setShowCart={setShowCart} />
        </div>
      )}
    </nav>
  );
};

const mapStateToPorps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToPorps, null)(withStyles(styles)(Header));
