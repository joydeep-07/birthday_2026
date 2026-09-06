import React from "react";
import ScratchCard from "./ScratchCard"; // Import the ScratchCard component

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

const Calendar = () => {
  return (
    <div className="md:px-12 px-3">
      <div className="bg-white w-full py-12 px-4 rounded-sm shadow-xs flex justify-center">
        <div className="relative w-full max-w-4xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex items-center justify-between"
                >
                  {/* Left Side Container */}
                  <div className="w-[45%] flex justify-end">
                    {isLeft ? (
                      <div className="rounded-md w-full max-w-md">
                        <h3 className="text-sm text-left md:text-lg font-heading font-medium text-black mb-3">
                          {item.caption}
                        </h3>
                        <ScratchCard
                          imageSrc={item.image}
                          altText={item.caption}
                        />
                        <div className="text-left mt-2 pr-4 text-gray-700 font-medium text-sm sm:text-base">
                          {item.date}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>

                  {/* Center Node / Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    {isLeft && (
                      <div className="absolute right-1/2 w-4 h-0.5 bg-gray-300 -translate-x-3" />
                    )}
                    <div className="w-6 h-6 bg-[#e0b020] rounded-full border-2 border-white z-10 shadow" />
                    {!isLeft && (
                      <div className="absolute left-1/2 w-4 h-0.5 bg-gray-300 translate-x-3" />
                    )}
                  </div>

                  {/* Right Side Container */}
                  <div className="w-[45%] flex justify-start">
                    {!isLeft ? (
                      <div className="p-2 rounded-md w-full max-w-md">
                        <h3 className="text-sm text-left md:text-lg font-heading font-medium text-black mb-3">
                          {item.caption}
                        </h3>
                        <ScratchCard
                          imageSrc={item.image}
                          altText={item.caption}
                        />
                        <div className="text-left mt-2 pr-4 text-gray-700 font-medium text-sm sm:text-base">
                          {item.date}
                        </div>
                      </div>
                    ) : (
                      <></>
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
