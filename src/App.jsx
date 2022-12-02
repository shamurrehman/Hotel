import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchItems, fetchAllItems } from "./action";
import { connect } from "react-redux";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckoutPage";
import ItemsPage from "./pages/ItemsPage";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Admin from "./pages/Admin";
import OrderPlaced from "./components/OrderPlaced";
import "./App.css";

function App(props) {
  const [showLink, setShowLinks] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        if (
          user.email && //=== "enter your email for admin"
          user.uid //=== //"replace with your uid"
        ) {
          navigate("/admin");
        }
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    props.fetchItems();
    props.fetchAllItems();
  }, []);

  return (
    <div className="">
      <Header showLink={showLink} user={user} setShowLinks={setShowLinks} />
      <Routes>
        <Route path="/" element={<HomePage items={props.items} />} />
        <Route path="/about" element={<AboutPage items={props.items} />} />
        <Route path="/items" element={<ItemsPage items={props.allItems} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/orderplaced" element={<OrderPlaced />} />
        <Route
          path="/products/checkout"
          element={<CheckoutPage user={user} />}
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { items: state.items.items, allItems: state.allItems.allItems };
};

export default connect(mapStateToProps, { fetchItems, fetchAllItems })(App);
