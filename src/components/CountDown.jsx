import React, { useEffect, useState } from "react";
import tom from "../assets/gadgets/tom.png";
import tom2 from "../assets/gadgets/tom2.png";
import tom3 from "../assets/gadgets/tom3.png";
import tom4 from "../assets/gadgets/tom4.png";
import tom5 from "../assets/gadgets/tom5.png";
import tom6 from "../assets/gadgets/tom6.png";
import tom7 from "../assets/gadgets/tom7.png";
import gsap from "gsap";

const CountDown = ({ targetDate }) => {
  const tomImages = [tom, tom2, tom3, tom4, tom5, tom6, tom7];

  const [currentTom, setCurrentTom] = useState(() => {
    const previousIndex = Number(sessionStorage.getItem("tom-image-index"));

    let newIndex = Math.floor(Math.random() * tomImages.length);

    // Prevent the same image from appearing on consecutive reloads
    if (!Number.isNaN(previousIndex) && tomImages.length > 1) {
      while (newIndex === previousIndex) {
        newIndex = Math.floor(Math.random() * tomImages.length);
      }
    }

    sessionStorage.setItem("tom-image-index", newIndex);

    return tomImages[newIndex];
  });

  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const difference = target - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    {
      value: String(timeLeft.days).padStart(2, "0"),
      label: "Days",
    },
    {
      value: String(timeLeft.hours).padStart(2, "0"),
      label: "Hours",
    },
    {
      value: String(timeLeft.minutes).padStart(2, "0"),
      label: "Minutes",
    },
    {
      value: String(timeLeft.seconds).padStart(2, "0"),
      label: "Seconds",
    },
  ];

  return (
    <main className="flex h-[100dvh] w-full flex-col overflow-hidden bg-[#EAF7FF] px-5 pt-4 sm:px-8 sm:pt-6 md:px-12">
      <div className="flex min-h-0 flex-1 items-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Tom */}
          <div className="flex w-full justify-center md:w-1/2 md:justify-start">
            <img
              src={currentTom}
              alt="Tom"
              className="
                h-auto
                w-[210px]
                object-contain
                sm:w-[270px]
                md:w-80
                lg:w-120
              "
            />
          </div>

          {/* Countdown */}
          <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
            <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#147dcc] sm:mb-3 sm:text-xs">
              Kisika to birthday aaraha hai
            </p>

            <h1 className="font-heading text-2xl font-semibold tracking-tight text-[#183B56] sm:text-4xl lg:text-5xl">
              Chaliye suru karte hai
            </h1>

            <p className="mt-1 text-xs leading-relaxed text-[#183B56]/80 sm:mt-2 sm:text-sm">
              Bina kisi bakchodi ke, in
            </p>

            <div className="mt-4 flex items-start justify-center gap-1 sm:mt-7 sm:gap-3">
              {items.map((item, index) => (
                <React.Fragment key={item.label}>
                  <div className="flex min-w-[48px] flex-col items-center sm:min-w-[75px] md:items-start">
                    <div className="flex h-[38px] items-center text-2xl font-semibold tracking-tight text-[#183B56] sm:h-[60px] sm:text-5xl">
                      {item.value.split("").map((digit, digitIndex) => (
                        <DigitColumn
                          key={`${item.label}-${digitIndex}`}
                          digit={Number(digit)}
                        />
                      ))}
                    </div>

                    <span className="mt-1 text-[7px] font-medium uppercase tracking-[0.15em] text-[#183B56]/40 sm:mt-2 sm:text-[10px] sm:tracking-[0.2em]">
                      {item.label}
                    </span>
                  </div>

                  {index < items.length - 1 && (
                    <span className="mt-1 text-lg font-light text-[#147dcc]/40 sm:mt-3 sm:text-3xl">
                      :
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 sm:mt-7 sm:gap-3">
              <span className="h-px w-6 bg-[#183B56]/15 sm:w-8" />

              <p className="text-[8px] font-medium uppercase tracking-[0.15em] text-[#183B56]/45 sm:text-[10px] sm:tracking-[0.2em]">
                {new Date(targetDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <span className="h-px w-6 bg-[#183B56]/15 sm:w-8" />
            </div>
          </div>
        </div>
      </div>

      <footer className="shrink-0 border-t border-[#183B56]/10 py-4 text-center md:py-6">
        <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#183B56]/70 sm:text-xs sm:tracking-[0.2em]">
          © 2026 Joydeep Paul · All rights reserved
        </p>
      </footer>
    </main>
  );
};

const DigitColumn = ({ digit }) => {
  const columnRef = React.useRef(null);
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    if (!columnRef.current) return;

    gsap.to(columnRef.current, {
      y: `-${digit * 10}%`,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [digit]);

  return (
    <span className="relative inline-block h-[1.2em] w-[0.6em] overflow-hidden">
      <span
        ref={columnRef}
        className="absolute left-0 top-0 flex w-full flex-col items-center"
      >
        {digits.map((num) => (
          <span
            key={num}
            className="flex h-[1.2em] w-full items-center justify-center"
          >
            {num}
          </span>
        ))}
      </span>
    </span>
  );
};

export default CountDown;
