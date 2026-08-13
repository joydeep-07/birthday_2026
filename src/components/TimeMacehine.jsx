import React from 'react'
 import Antigravity from "./Antigravity";
 import MorphSlider from "./MorphSlider";
 import dora from '../assets/gadgets/dora1.png'

const TimeMacehine = () => {
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
    <div className="h-screen bg-[#EAF7FF] px-4 md:px-12">
      <div className="flex">
        <img className='h-35' src={dora} alt="" />
        <h1 className="text-3xl font-heading xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-10 leading-tight">
          Let's <span className="text-[#009FE3]">Time Travel</span>
          <br />
          <span className="text-3xl font-heading xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            The Time Macehine
          </span>
        </h1>
      </div>

      <div style={{ height: "500px", position: "relative" }}>
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
    </div>
  );
}

export default TimeMacehine