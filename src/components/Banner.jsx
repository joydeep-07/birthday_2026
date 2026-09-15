import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import door from "../assets/gadgets/anywheredoor.png";

const Banner = () => {
  return (
    <section className="relative overflow-hidden px-4 py-5 md:px-12 md:py-10">
      {/* Soft background ambient glow effects */}
      {/* <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" /> */}
      {/* <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl pointer-events-none" /> */}

      <div className="relative mx-auto flex  flex-col overflow-hidden rounded-sm border border-sky-100 bg-white/80 transition-all duration-500 md:flex-row">
        {/* LEFT — Door with atmospheric backdrop */}
        <div className="relative flex w-full items-center justify-center bg-gradient-to-br from-sky-50/60 to-transparent px-6 py-10 md:w-[42%] md:px-12 md:py-14">
          <img
            src={door}
            alt="Anywhere Door"
            className="relative h-[280px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.08)] transition-transform duration-700 hover:scale-105 hover:-translate-y-2 md:h-[390px]"
          />
        </div>

        {/* RIGHT — Content */}
        <div className="flex w-full flex-col justify-between px-8 py-10 sm:px-12 md:w-[58%] md:px-14 md:py-14">
          <div>
            {/* Small pill badge label */}
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-sky-600 uppercase">
              <span>A little journey for you</span>
            </div>

            <h1 className="max-w-2xl text-4xl font-heading font-bold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl md:text-[52px]">
              Let's Get in the{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                Time Line
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-justify text-xs md:text-sm leading-relaxed text-slate-600 font-normal">
              Doraemon er Anywhere Door jodi sotti thakto, tahole prothom kaj
              hoto tomar kache chole asa 😗💋 Tarpor ekta door diye amader sob
              favourite jaygay ghure beratam, ar amar moto lazy manus er kono
              tension o nei 😭😂🌝
            </p>
          </div>

          {/* Bottom area */}
          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between border-t border-slate-100 pt-6">
            {/* Tiny details */}
            <div className="flex gap-10">
              <div>
                <p className="text-2xl font-bold text-sky-500 tracking-tight">
                  ∞
                </p>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  Memories
                </p>
              </div>

              {/* <div className="h-10 w-[1px] bg-slate-100" /> */}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
