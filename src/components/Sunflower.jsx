import React, { useState } from "react";
import sun from "../assets/gadgets/sun.png";
import sunshine from "../assets/gadgets/sunshine.png";

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

const Sunflower = () => {
  return (
    <>
      <section className="w-full px-3 py-10 md:px-12 md:py-0">
        <div className="flex w-full flex-col items-center gap-10 border border-[#183B56]/10 bg-white/50 px-3 py-8 md:flex-row md:items-start md:gap-16 md:px-12 md:py-14">
          {/* Image */}
          <div className="flex w-full shrink-0 justify-center md:w-[25%]">
            <div className="relative flex items-center justify-center w-56 md:w-72">
              <LazyImage
                src={sun}
                alt="Sunflower"
                className="relative z-10 w-full object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-full">
            <div className="flex justify-between items-center md:mb-3">
              <div className="h-18 md:h-20 w-36 md:w-40 relative">
                <LazyImage
                  className="h-full w-full object-contain object-left"
                  src={sunshine}
                  alt=""
                />
              </div>
            </div>
            <p className="text-justify leading-7  text-[#183B56] md:text-[15px]">
              They say a sunflower always turns towards the sun because that’s
              where it finds light, warmth, and strength. Surjo jokhon thakena,
              tokhono seta wait kore je se abar thik fire asbe. Temni, you are
              my sunshine. 🌻❤️ Life jotoi busy hoy, amader jotoi bakchodi hok,
              ar ami jotoi vul kori 😭😂, at the end of the day, amar mon ta
              somoy tomar kachei fire ase. Jani na ki jadu kore rekhecho amk
              😗🌝
              <br />
              And you know what? Aj tomar birthday, but sudu ajker jonno na...
              you are special to me every single day. ❤️ Tumi amar life er oi
              sunshine, jeta na thakle sob kichu ektu besi boring, ektu besi
              dark lage. 🌝
              <br />
              Just like a sunflower always turns towards the sun, amar mon o sob
              smy tomar dikei ghure. Tumi amar happiness, amar comfort, amar
              favourite person, ar obviously amar favourite manus jake ami
              protidin irritate korte pari 😭😂❤️
              <br />
              Thank you for being the sun of my life, and for being that one
              person my heart always turns towards. 🌻💓 And no matter where
              life takes us, no matter koto bakchodi kori, no matter koto jhogra
              kori... I’ll always turn towards you. 🌻❤️
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sunflower;
