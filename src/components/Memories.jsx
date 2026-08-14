import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const memorySections = [
  {
    id: 1,
    heading: "Every moment with you feels like a timeless celebration.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    text1:
      "Our journey together is filled with rare moments, endless laughter, and beautiful memories. Here is to celebrating your birthday and the incredible person you are.",
    text2:
      "Private dinners, cherished secrets, moments of pure joy among close hearts: our story invites us inward, without compromise.",
  },
  {
    id: 2,
    heading: "Your smile lights up every corner of my world.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    text1:
      "Through all of life's adventures, holding your hand is my absolute favorite place to be. You bring endless warmth to my days.",
    text2:
      "A celebration of your laughter, your grace, and the beautiful soul that makes my life infinitely better.",
  },
  {
    id: 3,
    heading: "Here is to a lifetime of love and unforgettable memories.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    text1:
      "Happy Birthday to the one who holds my heart. May this year bring you as much happiness as you bring to everyone around you.",
    text2:
      "Looking forward to creating countless more chapters together, hand in hand, story by story.",
  },
];

const Memories = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const currentMemory = memorySections[activeIndex];

  useGSAP(
    () => {
      const total = memorySections.length;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${total * 100}%`,
        pin: true,

        // Important:
        // Do not scrub the content.
        scrub: false,

        onUpdate: (self) => {
          const nextIndex = Math.min(
            Math.floor(self.progress * total),
            total - 1,
          );

          setActiveIndex((prev) => {
            if (prev === nextIndex) return prev;
            return nextIndex;
          });
        },
      });
    },
    {
      scope: containerRef,
    },
  );

  useGSAP(
    () => {
      if (!contentRef.current) return;

      const elements = contentRef.current.querySelectorAll(
        "[data-memory-element]",
      );

      gsap.killTweensOf(elements);

      gsap.fromTo(
        elements,
        {
          opacity: 0,
        //   y: 8,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: "power1.out",
          overwrite: true,
        },
      );
    },
    {
      dependencies: [activeIndex],
    },
  );

  return (
    <section
      ref={containerRef}
      className="
        relative
        flex
        h-screen
        w-full
        flex-col
        justify-between
        overflow-hidden
        bg-transparent
        p-6
        font-serif
        text-[#4A3B32]
        md:p-12
      "
    >
    
     
      {/* Content */}
      <main
        ref={contentRef}
        className="
          z-10
          my-auto
          flex
          flex-col
          items-center
          justify-center
          py-6
          text-center
        "
      >
        {/* Heading */}
        <h1
          data-memory-element
          className="
            mb-8
            flex
            min-h-[4rem]
            max-w-4xl
            items-center
            justify-center
            px-4
            text-2xl
            font-light
            uppercase
            leading-snug
            tracking-wider
            md:min-h-[6rem]
            md:text-4xl
            lg:text-5xl
          "
        >
          {currentMemory.heading}
        </h1>

        {/* Fixed Image Frame */}
        <div
          data-memory-element
          className="
            relative
            mb-8
            h-56
            w-56
            overflow-hidden
            rounded-sm
            shadow-2xl
            md:h-80
            md:w-72
          "
        >
          <img
            src={currentMemory.image}
            alt={`Memory ${currentMemory.id}`}
            className="
              block
              h-full
              w-full
              object-cover
            "
          />
        </div>

        {/* Text */}
        <div
          className="
            min-h-[5rem]
            max-w-xl
            space-y-4
            px-4
            font-sans
            text-xs
            uppercase
            leading-relaxed
            tracking-wider
            opacity-90
            md:text-sm
          "
        >
          <p data-memory-element>{currentMemory.text1}</p>

          <p data-memory-element className="text-xs opacity-75">
            {currentMemory.text2}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="z-10 flex justify-center pb-2">
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-[#4A3B32]
            text-xs
            opacity-60
          "
        >
          ↓
        </div>
      </footer>
    </section>
  );
};

export default Memories;
