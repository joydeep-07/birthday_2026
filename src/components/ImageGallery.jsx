import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageGallery = ({
  images = [],
  className = "",
  galleryHeight = "250vh",
}) => {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const gallery = galleryRef.current;

    if (!section || !gallery || images.length === 0) return;

    const ctx = gsap.context(() => {
      const columns = gsap.utils.toArray(".image-gallery-column");

      const initialPositions = [-45, -95, -45, -75];
      const movements = [120, 200, 75, 180];

      columns.forEach((column, index) => {
        gsap.set(column, {
          yPercent: initialPositions[index] ?? -45,
        });

        gsap.to(column, {
          yPercent: `+=${movements[index] ?? 120}`,
          ease: "none",
          scrollTrigger: {
            trigger: gallery,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            invalidateOnRefresh: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, [images]);

  if (!images.length) return null;

  const columnCount = 4;

  const columns = Array.from({ length: columnCount }, (_, columnIndex) =>
    images.filter((_, imageIndex) => imageIndex % columnCount === columnIndex),
  );

  return (
    <section
      ref={sectionRef}
      className={`w-full overflow-hidden text-black ${className}`}
    >
      {/* =========================
          INTRO SECTION
      ========================== */}
      <div className="relative flex h-[200px] items-center justify-center">
        <div className="absolute left-1/2 top-[10%] flex -translate-x-1/2 flex-col items-center gap-6 text-center">
          <span className="max-w-[12ch] text-xs uppercase leading-tight opacity-40">
            scroll down to see
          </span>

          <span className="h-16 w-px bg-gradient-to-b from-transparent via-black/30 to-black" />
        </div>
      </div>

      {/* =========================
          IMAGE GALLERY
      ========================== */}
      <div
        ref={galleryRef}
        style={{ height: galleryHeight }}
        className="
          relative
          flex
          justify-center
          w-full
          gap-[2vw]
          overflow-hidden
          p-[2vw]
        "
      >
        {columns.map((columnImages, columnIndex) => (
          <div
            key={columnIndex}
            className="
              image-gallery-column
              relative
              flex
              h-full
              w-[185px] md:w-[330px]
              shrink-0
              flex-col
              gap-[2vw]
            "
          >
            {columnImages.map((src, imageIndex) => (
              <div
                key={`${columnIndex}-${imageIndex}`}
                className="
                  relative
                  w-[165px] md:w-[300px]
                  shrink-0
                  border
                  border-[#555454]
                  bg-[#fffbee]
                  overflow-hidden
                "
              >
                <img
                  src={src}
                  alt={`Gallery image ${imageIndex + 1}`}
                  draggable="false"
                  loading="lazy"
                  className="
                    pointer-events-none
                    block
                    h-full
                    w-full
                    select-none
                    object-cover
                  "
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* =========================
          OUTRO SECTION
      ========================== */}
      <div className="relative flex h-[200px] items-center justify-center">
        <div className="absolute left-1/2 top-[10%] flex -translate-x-1/2 flex-col items-center gap-6 text-center">
          <span className="max-w-[12ch] text-xs uppercase leading-tight opacity-40">
            scroll down to see
          </span>

          <span className="h-16 w-px bg-gradient-to-b from-transparent via-black/30 to-black" />
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
