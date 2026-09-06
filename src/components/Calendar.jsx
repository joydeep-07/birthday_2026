import React from "react";
// Importing images from src/assets/cal/
import astami from "../assets/cal/astami.jpg";
import chummi from "../assets/cal/chummi.jpg";
import college from "../assets/cal/college.jpg";
import icecream from "../assets/cal/icecream.jpg";
import navami from "../assets/cal/navami.jpg";
import swaraswatiPuja from "../assets/cal/swaraswati_puja.jpg";
import swaraswatiPuja1 from "../assets/cal/swaraswati_puja1.jpg";
import theque from "../assets/cal/theque.jpg";

// Sample data array containing events
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
  {
    id: 7,
    caption: "Theque",
    image: theque,
    date: "March 12th, 2025",
  },
  {
    id: 3,
    caption: "Icecream Date",
    image: icecream,
    date: "March , 2025",
  },
  {
    id: 1,
    caption: "Astami",
    image: astami,
    date: "September 30th, 2025",
  },
  {
    id: 6,
    caption: "Special Moment",
    image: chummi,
    date: "September 30th, 2025",
  },

  {
    id: 4,
    caption: "Navami",
    image: navami,
    date: "October 1st, 2025",
  },

  //   {
  //     id: 8,
  //     caption: "Swaraswati Puja Memory",
  //     image: swaraswatiPuja1,
  //     date: "February 14th, 2024",
  //   },
];

const Calendar = () => {
  return (
    <div className=" md:px-12 px-3 ">
      {/* Central Container */}
      <div className="bg-white w-full py-12 px-4 rounded-sm shadow-xs flex justify-center">
        <div className="relative w-full max-w-4xl">
          {/* Continuous Center Vertical Line */}
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
                      // Card on Left
                      <div className="rounded-md w-full max-w-md">
                        <h3 className="text-sm text-left  md:text-lg font-heading font-medium text-black mb-3">
                          {item.caption}
                        </h3>
                        <div className="overflow-hidden rounded">
                          <img
                            src={item.image}
                            alt={item.caption}
                            className="w-full h-auto object-cover max-h-96 mx-auto"
                          />
                        </div>
                        <div className="text-left mt-2 pr-4 text-gray-700 font-medium text-sm sm:text-base">
                          {item.date}
                        </div>
                      </div>
                    ) : (
                      // Date on Left
                      //   <div className="text-right pr-4 text-gray-700 font-medium text-sm sm:text-base">
                      //     {item.date}
                      //   </div>
                      <></>
                    )}
                  </div>

                  {/* Center Node / Dot with Connecting Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    {/* Horizontal connecting line snippet to left card */}
                    {isLeft && (
                      <div className="absolute right-1/2 w-4 h-0.5 bg-gray-300 -translate-x-3" />
                    )}
                    {/* Yellow Dot */}
                    <div className="w-6 h-6 bg-[#e0b020] rounded-full border-2 border-white z-10 shadow" />
                    {/* Horizontal connecting line snippet to right card */}
                    {!isLeft && (
                      <div className="absolute left-1/2 w-4 h-0.5 bg-gray-300 translate-x-3" />
                    )}
                  </div>

                  {/* Right Side Container */}
                  <div className="w-[45%] flex justify-start">
                    {!isLeft ? (
                      // Card on Right
                      <div className=" p-2 rounded-md w-full max-w-md">
                        <h3 className="text-sm text-left  md:text-lg font-heading font-medium text-black mb-3">
                          {item.caption}
                        </h3>
                        <div className="overflow-hidden rounded">
                          <img
                            src={item.image}
                            alt={item.caption}
                            className="w-full h-auto object-cover mx-auto"
                          />
                        </div>
                        <div className="text-left mt-2 pr-4 text-gray-700 font-medium text-sm sm:text-base">
                          {item.date}
                        </div>
                      </div>
                    ) : (
                      // Date on Right
                    //   <div className="text-left pl-4 text-gray-700 font-medium text-sm sm:text-base">
                    //     {item.date}
                    //   </div>
                    <>
                    </>
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
