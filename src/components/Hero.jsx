import React from "react";
import letter from "../assets/gadgets/letter.png";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full px-3 py-8 md:px-12 md:py-0">
      <div className="main relative flex w-full flex-col items-center justify-between gap-8 overflow-hidden border border-[#183B56]/10 bg-white/60 px-4 py-4 md:flex-row md:gap-8 md:px-10 md:py-10">
        {/* MOBILE BACKGROUND IMAGE */}
        <img
          src={letter}
          alt=""
          className="absolute left-1/2 top-1/2 z-0 h-full w-70 -translate-x-1/2 -translate-y-1/2 object-contain opacity-40 md:hidden"
        />

        {/* LEFT */}
        <div className="left relative z-10 w-full md:w-4/5">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#009FE3]">
            A little letter for you
          </p>

          <h1 className="mb-6 text-2xl font-normal font-heading tracking-tight text-[#183B56] md:text-6xl">
            To my favorite person,
            <span className="mt-1 md:block"> Happy Birthday.</span>
          </h1>

          <div className="max-w-4xl text-sm leading-7 text-[#183B56]/75 md:text-[15px]">
            <p className="text-justify leading-7 text-[#183B56]">
              Dekho, tumi nisshondehe khub sundor, kintu tumi jevabe shopno
              dekho, seta tar thekeo besi sundor. Ei bodle jawa prithibite tumi
              jevabe amader somporko take gurutto dao, setao bhishon sundor. Ar
              eto kichur poreo tumi jei vabe amar pase thako, seta amar kache
              sotti khub sundor. Jokhon ami nijeke niye doubt korte shuru kori,
              jokhon nijer oporei amar bissas thake na, tokhono tumi jevabe amar
              opor bishash rakho, amr paase darao, seta khub sundor.
              <br />
              Dekho, tumi jano je ami amar feelings express korte khub ekta
              bhalo noi. Hoito protibar ami amar moner kotha gulo thik vabe
              bolte pari na. But I love you. Ar aaj, tomar birthday te, sudhu
              etukui bolte chai je...
              <br />
              Thank you for being with me, for believing in me & for motivating
              me. Happy Birthday,love. Ei vabei khusi thako, bakchodi kro, ar
              amr life er sob theke sundor ongso hye thako ...
            </p>

            <div className="mt-7 flex items-center gap-3">
              <p className="text-sm text-[#183B56]/60">I love You</p>
              <Heart size={14} color="red" />
            </div>

            <p className="mt-1 font-heading text-base text-[#196299]">
              Aapka Pyaara <br />
              Chutu para boipen
            </p>
          </div>
        </div>

        {/* RIGHT - DESKTOP ONLY */}
        <div className="right relative z-10 hidden justify-end md:flex">
          <img
            className="w-70 object-contain md:w-100"
            src={letter}
            alt="Birthday letter"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
