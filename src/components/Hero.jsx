import React, { useState } from "react";
import letter from "../assets/gadgets/letter.png";
import { Heart } from "lucide-react";

// Reusable Image component with a skeleton loader applied only to the image area
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Skeleton Loader shown until the image loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-10 rounded-sm" />
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="w-full px-3 py-3 md:px-12 md:py-0">
      <div className="main relative flex w-full flex-col items-center justify-between gap-8 overflow-hidden border border-[#183B56]/10 bg-white/60 px-4 py-4 md:flex-row md:gap-8 md:px-10 md:py-10">
        {/* MOBILE BACKGROUND IMAGE */}
        <div className="absolute left-1/2 top-1/2 z-0 h-full w-70 -translate-x-1/2 -translate-y-1/2 opacity-40 md:hidden">
          <LazyImage
            src={letter}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>

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
              Heppiii Birthday tuuu youuu heppi birthday tuuu youuuu heppi
              birthday tuuu may baybeeee heppi birtthday tuuu youuuuuuuuu.
              💋💋💋💋💋 Tumi amr sexy DP wali sundor baddieee, eta toh sobai
              jane 😗💋 but tumi jevabe sopno dekho, seta tar thekeo besi
              sundor. Ei bodle jawa duniya te tumi jevabe amader relation take
              eto gurutto dao, eto care koro, seta amar kache sotti khub besi
              sundor. ❤️ Ar eto kichur poreo tumi jevabe amar pase thako, amk
              bujho, amar kharap somoy gulote amr sathe darao, seta amar kache
              onk besi matter kore. Jokhon ami nijeke niye doubt korte shuru
              kori, jokhon nijer oporei amar bissas thake na, tokhono tumi
              jevabe amar opor bishash rakho, amk motivate koro, amr pase
              thako... sotti bolte gele, oigulo amar kache onk kichu. ❤️
              <br />
              Dekho, tumi jano je ami amar feelings express korte khub ekta
              bhalo noi 😭😂 Hoito protibar ami amar moner kotha gulo thik vabe
              bolte pari na, hoito majhe majhe bakchodi korte korte important
              kotha bola hoye othe na 😗🌝 But I love you. A lot. ❤️ Ar aaj
              tomar birthday te sudhu etukui bolte chai je... thank you for
              being with me, thank you for believing in me, thank you for
              motivating me, ar thank you for emni kore amar pase thakar jonno.
              ❤️
              <br />
              Happy Birthday, loveee 💋❤️ Ei vabei khusi thako, emni sundor kore
              sopno dekho, bakchodi kro, amk irritate kro 😭😂 ar amr life er
              sob theke sundor part hoye emni kore theko... ❤️🌝 I love
              youuuuuuu ❤️💋 Ar haaa, beshi emotional hoye abar thank you thank
              you korte bosho na 😗😂 Jauu, birthday enjoy krooo, amar bbyyy
              💋💋💋
            </p>

            <div className="mt-7 flex items-center gap-3">
              <p className="text-sm text-red-500">I love You</p>
              <Heart size={14} color="red" />
            </div>

            <p className="mt-1 font-heading text-base text-[#196299]">
              Aapka Pyaara <br />
              Chutu para boipen
            </p>
          </div>
        </div>

        {/* RIGHT - DESKTOP ONLY */}
        <div className="right relative z-10 hidden justify-end md:flex w-70 md:w-100">
          <LazyImage
            className="w-full object-contain"
            src={letter}
            alt="Birthday letter"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
