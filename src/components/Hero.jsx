import React, { useState } from "react";
// import me from "../assets/images/main1.png";
import CircularText from "./CircularText";
import { User } from "lucide-react";
import CountDown from "./CountDown";
// import DownloadModal from "./DownloadModal";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  // const handleDownload = () => {
  //   setShowModal(true);
  // };

  // const confirmDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/Resume.pdf";
  //   link.download = "Joydeep_Paul_Resume.pdf";
  //   link.click();

  //   setShowModal(false);
  // };

  return (
    <>
      <section className="flex justify-center items-center py-5 bg-[#EAF7FF] text-[#183B56]">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-12">
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
                <div className="absolute bg-white rounded-full -bottom-3 xs:-bottom-4 sm:-bottom-5 -right-5 xs:-right-9 sm:-right-10 scale-75 xs:scale-90 sm:scale-100">
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
              {/* <button
                className="
        relative overflow-hidden
        px-8 py-3
        rounded-full
        font-medium
        tracking-[0.1em]
        text-[#183B56]
        bg-[#FFFFFF]
        border border-[#8DD8FF]
        shadow-[0_4px_15px_rgba(0,159,227,0.12)]
        hover:text-[#FFFFFF]
        hover:bg-[#009FE3]
        hover:border-[#009FE3]
        hover:shadow-[0_6px_20px_rgba(0,159,227,0.25)]
        transition-all
        duration-500
        ease-out
        group
      "
              >
                <span className="flex items-center text-xs justify-center gap-2">
                  SEE MY MESSAGE
                </span>
              </button> */}
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
