import React, { useEffect, useState } from "react";

const CountDown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("September 16, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="text-left">
      <p className="text-[#147dcc] text-sm font-semibold tracking-[0.25em] uppercase mb-5">
        Counting down to your special day
      </p>

      <div className="flex items-center gap-3 sm:gap-4">
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            <div className="min-w-[55px]">
              <span className="block text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                {String(item.value).padStart(2, "0")}
              </span>

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

      <p className="mt-4 text-xs text-gray-400">16 September 2026</p>
    </div>
  );
};

export default CountDown;
