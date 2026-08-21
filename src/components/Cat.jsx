import React from "react";
import cat from "../assets/gadgets/cat.png";
import cat2 from "../assets/gadgets/cat2.png";
import cat3 from "../assets/gadgets/cat3.jpg";
import cat4 from "../assets/gadgets/cat4.jpg";
import cat5 from "../assets/gadgets/cat5.jpg";
import cat6 from "../assets/gadgets/cat6.jpg";
import cat7 from "../assets/gadgets/cat7.jpg";
import cat8 from "../assets/gadgets/cat8.jpg";

const Cat = () => {
  const cats = [cat3, cat4, cat5, cat6, cat7, cat8];

  return (
    <section className="w-full px-4 py-8 md:px-12">
      <div className="main relative flex w-full items-center justify-center overflow-hidden border border-[#183B56]/10 bg-white/60 px-4 py-4 md:py-6 md:px-8">
        <div className="relative z-10 flex w-full items-center justify-center gap-2 md:gap-6">
          {cats.map((image, index) => (
            <img
              key={index}
              src={image}
              loading="lazy"
              alt={`Cat ${index + 1}`}
              className="h-36 w-1/4 object-contain md:h-52"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cat;
