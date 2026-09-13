import Navbar from "../layouts/Navbar";
import Hero from "../components/Hero";
import Footer from "../layouts/Footer";
import Sunflower from "../components/Sunflower";
import Cat from "../components/Cat";
import Calendar from "../components/Calendar";
import TimeMacehine from "../components/TimeMacehine";

const Home = () => {
  return (
    <div>
      <div className="bg-[#EAF7FF]">
        {/* <Blur/> */}
        {/* <Navbar /> */}
        <Hero />
        <Cat />
        {/* <Calendar /> */}
        <Sunflower />
        <TimeMacehine />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home