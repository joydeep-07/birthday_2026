import React, { useState } from "react";

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
                <LazyImage
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
