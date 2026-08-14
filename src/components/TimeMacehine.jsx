import React from "react";
import MorphSlider from "./MorphSlider";
import dora from "../assets/gadgets/dora1.png";
import astami from "../assets/images/astami.jpeg";
import food from "../assets/images/food.jpeg";
import puja from "../assets/images/puja.jpeg";
import theque from "../assets/images/theque.jpeg";

const TimeMacehine = () => {
// const items = [
//   {
//     image: astami,
//     caption: "Some moments are worth travelling back to ❤️",
//   },
//   {
//     image: puja,
//     caption: " The memories that started it all ✨",
//   },
//   {
//     image: theque,
//     caption: "Places change, but these memories stay",
//   },
//   {
//     image: food,
//     caption: "Good food, good days, and my favourite person",
//   },
// ];


const items = [
  {
    image:
      "https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=1600&auto=format&fit=crop",
    caption: "One",
  },
  {
    image:
      "https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=1600&auto=format&fit=crop",
    caption: "Two",
  },
  {
    image:
      "https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=1600&auto=format&fit=crop",
    caption: "Three",
  },
];
  return (
    <section className="md:min-h-screen w-full overflow-hidden bg-[#EAF7FF] px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-12">
      {/* Header */}
     
      <div className="mx-auto flex w-full max-w-8xl items-center gap-2 sm:gap-4 md:gap-6">
        {/* Doraemon */}
        <div className="shrink-0">
          <img
            src={dora}
            alt="Doraemon"
            className="
        h-20 w-auto
        xs:h-24
        sm:h-28
        md:h-32
        lg:h-36
      "
          />
        </div>

        {/* Heading */}
        <div>
         

          <h1
            className="
        font-heading
        text-2xl
        font-medium
        leading-[1.05]
        sm:text-3xl
        md:text-5xl
        lg:text-6xl
      "
          >
            Let's <span className="text-[#009FE3]">Time Travel</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              Through Our Memories
            </span>
          </h1>

          <p className="mt-3 max-w-3xl text-[10px] leading-relaxed text-slate-600 sm:text-xs md:text-sm">
            Doraemon has his Anywhere Door...
            <br className="sm:hidden" />
            but today, we have something even better
            <span className="font-medium text-[#009FE3]"> our memories.</span>
          </p>
        </div>
      </div>
      {/* Slider */}
      <div
        className="
          mx-auto
          mt-6
          h-[19vh]
          w-full
          max-w-8xl
          sm:mt-8
          sm:h-[60vh]
          md:mt-10
          md:h-[70vh]
        "
      >
        <MorphSlider
          items={items}
          transition="melt"
          intensity={0.55}
          aberration={0.35}
          drift={0.4}
          autoplay={false}
          overlayColor="#05060a"
          duration={1.1}
          ease="power2.inOut"
          scale={2.4}
          autoplayDelay={4}
          loop
          radius={16}
          showCaptions
          showControls
          showIndicators
        />
      </div>
    </section>
  );
};

export default TimeMacehine;
