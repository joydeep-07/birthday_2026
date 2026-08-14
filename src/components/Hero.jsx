import React, { useState } from "react";
import { User } from "lucide-react";

import CircularText from "./CircularText";
import CountDown from "./CountDown";
import ImageTrail from "./ImageTrail";

import img1 from "../assets/favourites/biryani.png";
import img2 from "../assets/favourites/momos.png";
import img3 from "../assets/favourites/icecream.png";
import img4 from "../assets/favourites/icecream2.png";
import img5 from "../assets/favourites/harry.png";
import img6 from "../assets/favourites/draco.png";
import img7 from "../assets/favourites/cherry.png";
import img8 from "../assets/favourites/peach.png";
import img9 from "../assets/favourites/chai.png";

import anywhere from "../assets/gadgets/anywheredoor.png";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const trailImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section
      className="
        relative
        min-h-screen
        md:min-h-[calc(100vh-4rem)]
        overflow-hidden
        flex
        justify-center
        items-start
        py-5
        bg-[#EAF7FF]
        text-[#183B56]
      "
    >
      {/* ==============================================
          IMAGE TRAIL
          Covers the ENTIRE Hero
          ============================================== */}

      <div className="absolute inset-0 w-full h-full z-[5]">
        <ImageTrail items={trailImages} variant={5} />
      </div>

      {/* ==============================================
          HERO CONTENT
          ============================================== */}

      <div
        className="
          relative
          z-[20]
          max-w-7xl
          w-full
          flex
          flex-col
          lg:flex-row
          items-center
          lg:items-start
          gap-8
          lg:gap-20
          px-4
          sm:px-6
          md:px-8
          lg:px-12
        "
      >
        {/* ANYWHERE DOOR */}

        <div
          className="
            absolute
            hidden
            md:flex
            -bottom-52
            right-5
            sm:right-8
            md:-right-12
            lg:-right-20
            z-[30]
          "
        >
          <img
            src={anywhere}
            loading="lazy"
            alt="Anywhere Door"
            className="
              w-36
              sm:w-28
              md:w-36
              lg:w-76
              h-auto
              -scale-x-100
            "
          />
        </div>

        {/* IMAGE */}

        <div
          className="
            flex
            relative
            w-full
            lg:w-auto
          "
        >
          <div
            className="
              relative
              group
              mx-auto
              lg:mx-0
            "
          >
            {!imageLoaded && (
              <div
                className="
                  absolute
                  inset-0
                  flex
                  justify-center
                  items-center
                  rounded-b-full
                  bg-[#B9E6FF]
                  animate-pulse
                "
              >
                <User className="text-[#5B9BC7]" size={100} />
              </div>
            )}

            <img
              src="https://i.pinimg.com/736x/ff/50/91/ff5091ae8874a2cebdf67ecc2d3af793.jpg"
              alt="Joydeep Paul"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`
                h-80
                xs:h-96
                sm:h-110
                md:h-120
                lg:h-130

                w-70
                xs:w-80
                sm:w-90
                md:w-95
                lg:w-100

                object-contain
                object-top
                rounded-b-full

                transition-opacity
                duration-500

                ${imageLoaded ? "opacity-100" : "opacity-0"}
              `}
            />

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

                  z-[40]
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

        {/* TEXT */}

        <div
          className="
            flex
            flex-1
            flex-col
            justify-center
            text-center
            lg:text-left
            space-y-4
            sm:space-y-5
            lg:space-y-6
            w-full
          "
        >
          <h1
            className="
              text-3xl
              font-heading
              xs:text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-medium
              leading-tight
            "
          >
            Happy Birthday, <span className="text-[#009FE3]">Love</span>
            <br />
            <span
              className="
                text-3xl
                font-heading
                xs:text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              My Reason to Smile
            </span>
          </h1>

          <p
            className="
              text-[#52758D]
              text-xs
              xs:text-base
              sm:text-sm
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            Today is all about celebrating you the person who makes my days
            brighter, my smiles bigger, and my life a little more beautiful. I
            hope this year brings you everything your heart wishes for.
          </p>

          <div
            className="
              flex
              justify-center
              mt-5
              lg:justify-start
            "
          >
            <CountDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
