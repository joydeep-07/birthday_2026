import React, { useEffect, useState } from "react";
import gsap from "gsap";

const CountDown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("September 16, 2026 00:00:00").getTime();
    const difference = targetDate - Date.now();

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
  }, []);

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
    <div className="text-left ">
      <p className="text-[#147dcc] text-sm font-semibold tracking-[0.25em] uppercase mb-5">
        Counting down to your special day
      </p>

      <div className="flex items-center md:justify-start justify-center gap-3 sm:gap-4">
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            <div className="min-w-[55px]">
              <div className="flex text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                {item.value.split("").map((digit, digitIndex) => (
                  <DigitColumn
                    key={`${item.label}-${digitIndex}`}
                    digit={Number(digit)}
                  />
                ))}
              </div>

              <span className="block mt-1 text-[10px] uppercase tracking-widest text-gray-400">
                {item.label}
              </span>
            </div>

            {index < items.length - 1 && (
              <span className="self-start mt-1 text-xl text-gray-300">:</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <p className="mt-4 text-xs md:text-left text-center text-gray-400">16 September 2026</p>
    </div>
  );
};

const DigitColumn = ({ digit }) => {
  const columnRef = React.useRef(null);
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    if (!columnRef.current) return;

    // Animate the strip to the correct Y offset based on the digit index
    gsap.to(columnRef.current, {
      y: `-${digit * 10}%`,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [digit]);

  return (
    <span
      className="
        relative
        inline-block
        overflow-hidden
        h-[1.2em]
        w-[0.6em]
      "
    >
      <span
        ref={columnRef}
        className="absolute top-0 left-0 w-full flex flex-col items-center"
      >
        {digits.map((num) => (
          <span
            key={num}
            className="h-[1.2em] flex items-center justify-center w-full"
          >
            {num}
          </span>
        ))}
      </span>
    </span>
  );
};

export default CountDown;
