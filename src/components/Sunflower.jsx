import React from "react";
import sunflower from "../assets/gadgets/sun.png";

const Sunflower = () => {
  return (
    <section className="w-full overflow-hidden px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <div
        className="
          relative
          mx-auto
          min-h-[720px]
          max-w-8xl
        "
      >
        {/* =========================
            BACKGROUND DECORATIONS
        ========================== */}

        {/* Soft yellow glow */}
        <div
          className="
            pointer-events-none
            absolute
            right-32
            top-20
            h-96
            w-96
            rounded-full
            bg-[#ffe680]/35
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-20
            -left-40
            h-96
            w-96
            rounded-full
            bg-[#ffd147]/25
            blur-3xl
          "
        />

        {/* Decorative SVG leaf */}
        <svg
          className="pointer-events-none absolute left-5 top-8 h-24 w-24 rotate-[-25deg] opacity-60 sm:left-10 sm:top-10 sm:h-32 sm:w-32"
          viewBox="0 0 120 120"
          fill="none"
        >
          <path
            d="M18 100C18 100 17 42 92 18C92 18 93 72 18 100Z"
            fill="#fde047"
          />
          <path d="M20 96C45 75 67 52 89 23" stroke="#ca8a04" strokeWidth="2" />
        </svg>

        {/* Decorative SVG leaf */}
        <svg
          className="pointer-events-none absolute right-4 top-16 h-20 w-20 rotate-[25deg] opacity-50 sm:right-12 sm:h-28 sm:w-28"
          viewBox="0 0 120 120"
          fill="none"
        >
          <path
            d="M15 105C15 105 30 38 101 20C101 20 91 81 15 105Z"
            fill="#fde047"
          />
          <path d="M20 99C43 78 69 49 97 24" stroke="#ca8a04" strokeWidth="2" />
        </svg>

        {/* Small decorative dots */}
        <div className="absolute left-[8%] top-[32%] h-2 w-2 rounded-full bg-amber-600/40" />
        <div className="absolute left-[12%] top-[36%] h-1.5 w-1.5 rounded-full bg-amber-600/30" />
        <div className="absolute right-[9%] top-[40%] h-2 w-2 rounded-full bg-amber-600/40" />
        <div className="absolute right-[14%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-amber-600/40" />
        <div className="absolute left-[46%] bottom-[10%] h-2 w-2 rounded-full bg-amber-400/50" />

        {/* Decorative curved lines */}
        <svg
          className="pointer-events-none absolute bottom-4 left-4 h-28 w-28 opacity-40 sm:bottom-8 sm:left-8 sm:h-40 sm:w-40"
          viewBox="0 0 160 160"
          fill="none"
        >
          <path
            d="M10 145C55 140 95 115 120 75C137 49 143 25 143 10"
            stroke="#ca8a04"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 155C67 150 111 122 138 82"
            stroke="#ca8a04"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[610px]
            max-w-8xl
            flex-col
            px-7
            pt-12
            sm:px-10
            sm:pt-14
            md:flex-row
            md:items-center
            md:px-14
            md:pt-0
          "
        >
          {/* Text */}
          <div
            className="
              relative
              z-30
              w-full
              md:w-[52%]
              lg:w-[48%]
            "
          >
            {/* Small label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-amber-700/60" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-800">
                For my sunshine
              </span>
            </div>

            <h2
              className="
                max-w-[8ch]
                font-heading
                text-5xl
                font-bold
                leading-[0.95]
                tracking-tight
                text-stone-900
                sm:text-6xl
                md:text-6xl
                lg:text-7xl
              "
            >
              You are my <span className="text-amber-600">sunshine.</span>
            </h2>

            <div className="mt-7 max-w-2xl text-justify">
              <p className="font-heading text-sm leading-relaxed text-stone-800 sm:text-base sm:leading-8">
                You know the Sunflower theory? 🌻 They say a sunflower always
                turns towards the sun because that's where it finds light,
                warmth and strength.
              </p>

              <p className="mt-4 font-heading text-sm leading-relaxed text-stone-800 sm:text-base sm:leading-8">
                Surjo tkhn thakena seta wait kore je thik fire asbe. Semni e,
                you are my sunshine, no matter life jotoi busy hye jak, ar ami
                joto e vul kori ami at the end tmr kache e asi...
              </p>

              <p className="mt-4 font-heading text-sm leading-relaxed text-stone-800 sm:text-base sm:leading-8">
                Aj ami vule gechilm wish korte, I'm really sorry for that, ha
                ekhn blchi hoito tmr excuse lagte pare but amr tbh mon ta thik
                chilo n aj, saradin tmi o chile na.
              </p>

              <p className="mt-4 font-heading text-sm leading-relaxed text-stone-800 sm:text-base sm:leading-8">
                Ha ei gulo ble ami amr vul lukate chaichina ... Ami accept krchi
                amr vul.
              </p>

              <p className="mt-4 font-heading text-sm leading-relaxed text-stone-800 sm:text-base sm:leading-8">
                And you know what, a single day can never define what you mean
                to me. ami khusi thaki tmr kache asu, kosto hoi tme kache asu,
                dukkho hoi tme kache asi, kandte icha korleo tmr kache e asi...
              </p>
            </div>
          </div>

          {/* Sunflower */}
          <div
            className="
              relative
              z-20
              mt-10
              flex
              w-full
              justify-center
              md:absolute
              md:bottom-[-5px]
              md:right-[-30px]
              md:mt-0
              md:w-[58%]
              lg:right-[-10px]
              lg:w-[55%]
            "
          >
            {/* Sun rays behind flower */}
            <svg
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[18%]
                z-0
                h-64
                w-64
                -translate-x-1/2
                opacity-40
                sm:h-80
                sm:w-80
              "
              viewBox="0 0 300 300"
              fill="none"
            >
              <circle
                cx="150"
                cy="150"
                r="65"
                stroke="#eab308"
                strokeWidth="2"
                strokeDasharray="4 10"
              />

              <circle
                cx="150"
                cy="150"
                r="105"
                stroke="#eab308"
                strokeWidth="1.5"
                strokeDasharray="2 12"
              />

              <path
                d="M150 20V55M150 245V280M20 150H55M245 150H280"
                stroke="#eab308"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M58 58L82 82M218 218L242 242M242 58L218 82M82 218L58 242"
                stroke="#eab308"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* Flower image */}
            <img
              src={sunflower}
              alt="Sunflower"
              loading="lazy"
              className="
                relative
                z-10
                h-auto
                w-[270px]
                max-w-full
                object-contain
                drop-shadow-[0_25px_25px_rgba(161,98,7,0.25)]
                sm:w-[360px]
                md:w-[520px]
                lg:w-[350px]
              "
            />
          </div>
        </div>

        {/* Bottom-right organic SVG */}
        <svg
          className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 opacity-40 sm:h-56 sm:w-56"
          viewBox="0 0 220 220"
          fill="none"
        >
          <path
            d="M210 210C200 150 170 112 118 90C83 75 47 74 10 87"
            stroke="#ca8a04"
            strokeWidth="2"
          />

          <path
            d="M210 190C190 144 160 116 119 102"
            stroke="#ca8a04"
            strokeWidth="1.5"
          />

          <circle cx="170" cy="150" r="7" stroke="#ca8a04" strokeWidth="2" />

          <circle cx="145" cy="125" r="4" fill="#ca8a04" />
        </svg>
      </div>
    </section>
  );
};

export default Sunflower;
