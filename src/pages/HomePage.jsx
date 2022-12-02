import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Items from "../components/Items";
import Footer from "../components/Footer";

const HomePage = ({ items }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current.scrollIntoView();
  }, []);

  return (
    <div ref={ref}>
      <Hero />
      <Features />
      <About isAboutPage={true} />
      <Items items={items} hide={true} />
      <div className="bg-[#495057]">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
