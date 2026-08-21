import React from "react";
import sun from "../assets/gadgets/sun.png";

const Sunflower = () => {
  return (
    <section className="w-full px-4 py-10 md:px-12 md:py-24">
      <div className="flex w-full flex-col items-center gap-10 border border-[#183B56]/10 bg-white/50 px-5 py-8 md:flex-row md:items-start md:gap-16 md:px-12 md:py-14">
        {/* Image */}
        <div className="flex w-full shrink-0 justify-center md:w-[25%]">
          <div className="relative flex items-center justify-center">
            <img
              src={sun}
              alt="Sunflower"
              className="relative z-10 w-56 object-contain md:w-72"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-full">
          <h1 className="text-4xl mb-8 font-heading text-[#dec509] text-justify">
            You know the Sunflower theory ? 🌻
          </h1>
          <p className=" text-lg md:text-xl leading-[1.8] text-[#183B56] text-justify md:leading-[1.6]">
            They say a sunflower always turns towards the sun because that’s
            where it finds light, warmth, and strength. Surjo tokhon thakena,
            kintu seta wait kore je se abar thik fire asbe. Temni, you are my
            sunshine. No matter how busy life gets, ar ami jotoi vul kori, at
            the end of the day, ami tomar kachei fire asi. And you know what? Aj
            tomar birthday, ar sudhu ajker jonno na, you are special to me every
            single day, just like the sun is to a sunflower. ❤️ <br /> <br />{" "}
            Thank you for being the sun of my life, and the person my heart
            always turns towards. 🌻💓 <br />
            And I’ll always turn towards you. 🌻❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sunflower;
