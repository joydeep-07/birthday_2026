import React, { useState } from "react";
import ScratchCard from "./ScratchCard";

// Importing images from src/assets/cal/
import astami from "../assets/cal/astami.jpg";
import chummi from "../assets/cal/chummi.jpg";
import college from "../assets/cal/college.jpg";
import icecream from "../assets/cal/icecream.jpg";
import navami from "../assets/cal/navami.jpg";
import swaraswatiPuja from "../assets/cal/swaraswati_puja.jpg";
import theque from "../assets/cal/theque.jpg";

const timelineData = [
  {
    id: 2,
    caption: "College Days",
    image: college,
    date: "January 28th, 2025",
  },
  {
    id: 5,
    caption: "Swaraswati Puja",
    image: swaraswatiPuja,
    date: "February 2nd, 2025",
  },
  { id: 7, caption: "Theque", image: theque, date: "March 12th, 2025" },
  { id: 3, caption: "Icecream Date", image: icecream, date: "March , 2025" },
  { id: 1, caption: "Astami", image: astami, date: "September 30th, 2025" },
  {
    id: 6,
    caption: "Special Moment",
    image: chummi,
    date: "September 30th, 2025",
  },
  { id: 4, caption: "Navami", image: navami, date: "October 1st, 2025" },
];

// Helper wrapper component to inject a skeleton loader while the image loads
const LazyScratchCardWrapper = ({ imageSrc, altText }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hidden preloader image to track load state */}
      <img
        src={imageSrc}
        alt={altText}
        onLoad={() => setIsLoaded(true)}
        className="hidden"
      />

      {/* Skeleton Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-20 rounded-sm min-h-[200px]" />
      )}

      {/* Actual ScratchCard */}
      <div
        className={`transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ScratchCard imageSrc={imageSrc} altText={altText} />
      </div>
    </div>
  );
};

const Calendar = () => {
  return (
    <div className="md:px-12 px-3">
      {/* White card container – preserves original padding & background */}
      <div className="bg-white w-full py-12 px-4 rounded-sm shadow-xs flex justify-center">
        <div className="relative w-full max-w-4xl">
          {/* Refined central line with subtle gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e0b020]/10 via-[#e0b020]/40 to-[#e0b020]/10" />

          <div className="space-y-14 md:space-y-16">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex items-center justify-between min-h-[140px]"
                >
                  {/* -------------------- LEFT COLUMN -------------------- */}
                  <div className="w-[45%] flex justify-end">
                    {isLeft ? (
                      <div className="w-full max-w-md">
                        {/* Caption with elegant serif font & gold underline */}
                        <h3 className="font-serif text-base md:text-lg font-medium text-neutral-900 mb-2 pb-1 border-b border-[#e0b020]/30 inline-block tracking-wide">
                          {item.caption}
                        </h3>
                        <LazyScratchCardWrapper
                          imageSrc={item.image}
                          altText={item.caption}
                        />
                        <div className="mt-2.5 text-neutral-500 font-light text-xs sm:text-sm flex items-center gap-1.5">
                          <i className="fa-regular fa-calendar text-[#e0b020]/70 text-[10px]" />
                          {item.date}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full max-w-md opacity-0 pointer-events-none">
                        {/* Placeholder keeps spacing consistent */}
                      </div>
                    )}
                  </div>

                  {/* -------------------- CENTER NODE -------------------- */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    {/* Left connector line (visible only on left cards) */}
                    {isLeft && (
                      <div className="absolute right-1/2 w-8 h-[1.5px] bg-gradient-to-l from-[#e0b020]/50 to-transparent -translate-x-3" />
                    )}

                    {/* Refined gold dot with outer glow */}
                    <div className="w-3.5 h-3.5 bg-[#e0b020] rounded-full border-2 border-white shadow-[0_2px_12px_rgba(224,176,32,0.5)] ring-1 ring-[#e0b020]/20" />

                    {/* Right connector line (visible only on right cards) */}
                    {!isLeft && (
                      <div className="absolute left-1/2 w-8 h-[1.5px] bg-gradient-to-r from-[#e0b020]/50 to-transparent translate-x-3" />
                    )}
                  </div>

                  {/* -------------------- RIGHT COLUMN -------------------- */}
                  <div className="w-[45%] flex justify-start">
                    {!isLeft ? (
                      <div className="w-full max-w-md">
                        <h3 className="font-serif text-base md:text-lg font-medium text-neutral-900 mb-2 pb-1 border-b border-[#e0b020]/30 inline-block tracking-wide">
                          {item.caption}
                        </h3>
                        <LazyScratchCardWrapper
                          imageSrc={item.image}
                          altText={item.caption}
                        />
                        <div className="mt-2.5 text-neutral-500 font-light text-xs sm:text-sm flex items-center gap-1.5">
                          <i className="fa-regular fa-calendar text-[#e0b020]/70 text-[10px]" />
                          {item.date}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full max-w-md opacity-0 pointer-events-none">
                        {/* Placeholder */}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
