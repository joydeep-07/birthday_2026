import React, { useState } from "react";
// import me from "../assets/images/main1.png";
import CircularText from "./CircularText";
import { User } from "lucide-react";
import CountDown from "./CountDown";
import Pocket from "./Pocket";
// import DownloadModal from "./DownloadModal";
import anywhere from '../assets/gadgets/anywheredoor.png'

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden flex justify-center md:min-h-[calc(100vh-4rem)] items-start py-5 bg-[#EAF7FF] text-[#183B56]">
        <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="absolute hidden md:flex -bottom-52 right-5 sm:right-8 md:-right-12 lg:-right-20 z-20">
            <img
              src={anywhere}
              alt="Anywhere Door"
              className="w-36 sm:w-28 md:w-36 -scale-x-100 lg:w-76 h-auto"
            />
          </div>
          {/* IMAGE SIDE */}
          <div className="flex relative w-full lg:w-auto">
            <div className="relative group mx-auto lg:mx-0">
              {/* IMAGE LOADING PLACEHOLDER */}
              {!imageLoaded && (
                <div className="absolute flex justify-center items-center inset-0 rounded-b-full bg-[#B9E6FF] animate-pulse">
                  <User className="text-[#5B9BC7]" size={100} />
                </div>
              )}

              <img
                src="https://i.pinimg.com/1200x/fd/54/94/fd54946716832100143853afd31e5b0d.jpg"
                alt="Joydeep Paul"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`
                  h-80 xs:h-96 sm:h-110 md:h-120 lg:h-130
                  w-70 xs:w-80 sm:w-90 md:w-95 lg:w-100
                  object-contain object-top rounded-b-full
                  transition-opacity duration-500
                  ${imageLoaded ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* CIRCULAR TEXT */}
              {imageLoaded && (
                <div
                  className="
    absolute
    bg-white
    rounded-full

    -bottom-5
    xs:-bottom-6
    sm:-bottom-7
    md:-bottom-4
    lg:-bottom-2
    xl:bottom-0

    -right-5
    xs:-right-7
    sm:-right-8
    md:-right-9
    lg:-right-10

    scale-75
    xs:scale-90
    sm:scale-100
  "
                >
                  <CircularText
                    text="BIRTHDAY • BAYBEE • HAPPIEE • "
                    radius={30}
                    fontSize={5}
                    rotateSpeed={40}
                    direction="clockwise"
                    textColor="#183B56"
                  />
                </div>
              )}
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 w-full">
            <h1 className="text-3xl font-heading xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Happy Birthday, <span className="text-[#009FE3]">Love</span>
              <br />
              <span className="text-3xl font-heading xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                My Reason to Smile
              </span>
            </h1>

            <p className="text-[#52758D] text-xs xs:text-base sm:text-sm max-w-xl mx-auto lg:mx-0">
              Today is all about celebrating you the person who makes my days
              brighter, my smiles bigger, and my life a little more beautiful. I
              hope this year brings you everything your heart wishes for.
            </p>

            {/* MESSAGE BUTTON */}
            <div className="flex justify-center mt-5 lg:justify-start">
              <CountDown />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
