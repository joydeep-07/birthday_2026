
import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import door from "../assets/gadgets/anywheredoor.png";

const Banner = () => {
  return (
    <section className="bg-[#EAF7FF] px-4 py-10 md:px-12 md:py-14">
      <div className="mx-auto flex flex-col overflow-hidden rounded-sm border border-[#D7EEF9] bg-white shadow-[0_12px_40px_rgba(70,170,220,0.10)] md:flex-row">

        {/* LEFT — Door */}
        <div className="flex w-full items-center justify-center px-6 py-8 md:w-[42%] md:px-10 md:py-10">
          <img
            src={door}
            alt="Anywhere Door"
            className="h-[280px] object-contain transition-transform duration-500 hover:-translate-y-1 md:h-[370px]"
          />
        </div>

        {/* RIGHT — Content */}
        <div className="flex w-full flex-col justify-between px-7 py-9 sm:px-10 md:w-[58%] md:px-12 md:py-12">

          <div>
            {/* Small label */}
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
             
              <span>A little journey for you</span>
            </div>

            <h1 className="max-w-2xl text-4xl font-heading font-semibold leading-[1.05] tracking-tight text-sky-500 sm:text-5xl md:text-[54px]">
              Let's Get in the
              <span className="block text-[#FF78A8]">
                Time Line
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#666] sm:text-[15px]">
              Some moments are too special to leave behind. So let's open
              the Anywhere Door and take a little trip through our memories,
              the moments we've shared, and everything still waiting for us.
            </p>
          </div>

          {/* Bottom area */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            {/* Tiny details */}
            <div className="flex gap-8">
              <div>
                <p className="text-xl font-semibold text-sky-500">∞</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-400">
                  Memories
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-[#FF78A8]">01</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-400">
                  Special Girl
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="group flex w-fit items-center gap-2 border-b border-sky-400 pb-1.5 text-sm font-semibold text-sky-500 transition-all duration-300 hover:gap-3">
              <span>See the magic</span>
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
