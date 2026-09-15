import React from 'react'
import Calendar from '../components/Calendar'
import Banner from '../components/Banner';
import cat3 from "../assets/baby/baby.jpg";
import cat4 from "../assets/baby/baby1.jpg";
import cat5 from "../assets/baby/baby2.jpg";
import cat6 from "../assets/baby/baby3.jpg";
import cat7 from "../assets/baby/pout.jpg";
import cat8 from "../assets/baby/us.png";
import cat9 from "../assets/baby/bigus.jpg";
import cat10 from "../assets/baby/her.jpg";
import Baby from '../components/Baby';

const Timeline = () => {
    const cats = [cat3, cat4, cat5, cat6, cat8, cat7, cat10, cat9,];
  return (
    <div className=" bg-[#EAF7FF]">
      <Banner />
      <Baby items={cats} />
      <Calendar />
    </div>
  );
}

export default Timeline