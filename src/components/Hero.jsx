import React, { useState } from "react";
// import me from "../assets/images/main1.png";
import CircularText from "./CircularText";
import { User } from "lucide-react";
import CountDown from "./CountDown";
// import DownloadModal from "./DownloadModal";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);


  return (
    <>
      <section className="relative overflow-hidden flex justify-center min-h-[calc(100vh-4rem)] items-start py-5 bg-[#EAF7FF] text-[#183B56]">
        {/* BOTTOM-RIGHT HIGHLY WAVY BLOB BACKGROUND */}
        <div className="absolute bottom-0 right-0 pointer-events-none z-0 translate-x-1/3 translate-y-1/3 sm:translate-x-1/4 sm:translate-y-1/4">
          <svg
            viewBox="0 0 500 450"
            xmlns="http://www.w3.org/2000/svg"
            // Increased size slightly to accommodate deeper waves
            className="w-[520px] sm:w-[650px] md:w-[800px] h-auto opacity-35 fill-[#FFCC4D]"
          >
            {/* Complex path data creating deep, numerous waves */}
            <path
              d="M412.6,286.2
C404,315 379,338 349,346
C319,354 292,347 264,361
C236,375 207,374 179,362
C151,350 123,348 99,330
C75,312 61,285 60,255
C59,225 72,201 82,177
C92,153 91,130 113,113
C135,96 163,94 190,96
C217,98 238,89 266,92
C294,95 319,105 341,117
C363,129 382,143 394,165
C406,187 406,208 420,229
C434,250 443,270 438,288
C433,306 423,303 412.6,286.2
Z"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-12">
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

      {/* MODAL OVERLAY */}
      {/* {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#183B56]/50 backdrop-blur-sm">
          <DownloadModal
            onCancel={() => setShowModal(false)}
            onConfirm={confirmDownload}
          />
        </div>
      )} */}
    </>
  );
};

export default Hero;
