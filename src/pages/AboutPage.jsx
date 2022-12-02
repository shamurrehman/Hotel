import React, { useEffect, useRef } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Items from "../components/Items";

const AboutPage = ({ items }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current.scrollIntoView();
  }, []);

  return (
    <div ref={ref}>
      <About isAboutPage={false} />
      <Items items={items} hide={true} />
      <div className="bg-[#495057]">
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
