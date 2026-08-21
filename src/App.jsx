import React from "react";
import Navbar from "./layouts/Navbar";
import Hero from "./components/Hero";
import TimeMacehine from "./components/TimeMacehine";
import LenisScroll from "./utils/Lenis";
import Footer from "./layouts/Footer";
import Sunflower from "./components/Sunflower";

const App = () => {
  return (
    <>
      <LenisScroll />

      <div className="bg-[#EAF7FF] ">
        <Navbar />
        <Hero />
        <Sunflower />
        <TimeMacehine />
        <Footer />
      </div>
    </>
  );
};

export default App;
