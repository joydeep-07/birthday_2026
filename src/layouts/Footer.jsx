import React from "react";
import eyes from "../assets/gadgets/eyes.png";
import { RiHeartFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="px-4 py-5 md:px-12">
      <div
        className="
          container
          relative
          flex
          h-76
          items-center
          justify-start
          overflow-hidden
          rounded-xl
          border
          border-sky-500/10
          bg-sky-200
          max-md:h-52
        "
      >
        {/* Decorative Elements */}

        {/* Top-left circle */}
        <div
          className="
            pointer-events-none
            absolute
            -left-8
            -top-8
            h-24
            w-24
            rounded-full
            border
            border-white/40
            bg-white/20
            max-md:h-16
            max-md:w-16
          "
        />

        {/* Top-right circle */}
        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-32
            w-32
            rounded-full
            bg-white/20
            max-md:h-24
            max-md:w-24
          "
        />

        {/* Bottom-right circle */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-12
            right-20
            h-28
            w-28
            rounded-full
            border
            border-sky-300/30
            bg-sky-100/20
            max-md:h-20
            max-md:w-20
            max-md:right-8
          "
        />

        {/* Small decorative dots */}
        <div
          className="
            pointer-events-none
            absolute
            right-[25%]
            top-8
            h-2
            w-2
            rounded-full
            bg-white/60
            max-md:right-[20%]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-8
            right-[35%]
            h-3
            w-3
            rounded-full
            bg-sky-300/40
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[15%]
            top-1/2
            h-1.5
            w-1.5
            rounded-full
            bg-white/70
          "
        />

        {/* Decorative curved line */}
        <div
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-1/2
            h-24
            w-24
            -translate-y-1/2
            rounded-full
            border
            border-white/30
            max-md:h-16
            max-md:w-16
          "
        />

        {/* Eyes */}
        <div className="relative z-10 object-cover max-md:h-full max-md:shrink-0">
          <img
            loading="lazy"
            src={eyes}
            alt=""
            className="
              h-76
              max-md:h-full
              max-md:w-auto
              max-md:max-w-[45vw]
            "
          />
        </div>

        {/* Logo */}
        <div
          className="
            relative
            z-10
            ml-32
            max-md:ml-4
            max-md:flex
            max-md:flex-1
            max-md:justify-center
          "
        >
          <img
            loading="lazy"
            src="./logo.png"
            alt="Logo"
            className="
              max-md:w-[120px]
              max-md:max-w-full
            "
          />
        </div>
      </div>

      <p className="flex items-center justify-center gap-2 pt-5 text-center text-xs font-heading text-sky-700 md:text-sm">
        Made with love just for you
        <span>
          <RiHeartFill size={16} className="text-red-600" />
        </span>
      </p>
    </div>
  );
};

export default Footer;
