import React from "react";

const Baby = ({ items = [], containerClassName = "", imageClassName = "" }) => {
  return (
    <section className={`w-full px-3 py-8 md:px-12 ${containerClassName}`}>
      <div className="main relative flex w-full items-center justify-center overflow-hidden border border-[#183B56]/10 bg-white/60 px-4 py-4 md:py-8 md:px-8">
        <div className="relative z-10 grid w-full grid-cols-2 items-end justify-center gap-2 md:flex md:gap-6">
          {items.map((item, index) => {
            // Support both direct image strings and objects { src, alt }
            const imageSrc = typeof item === "string" ? item : item.src;
            const imageAlt =
              typeof item === "string"
                ? `Baby item ${index + 1}`
                : item.alt || `Baby item ${index + 1}`;

            return (
              <div
                key={index}
                className="flex aspect-square w-full items-center justify-center md:aspect-auto md:w-auto"
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className={`h-full w-full object-cover md:h-52 md:w-auto ${imageClassName}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Baby;
