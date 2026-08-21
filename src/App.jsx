import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

import Navbar from "./layouts/Navbar";
import Hero from "./components/Hero";
import TimeMacehine from "./components/TimeMacehine";
import LenisScroll from "./utils/Lenis";
import Footer from "./layouts/Footer";
import Sunflower from "./components/Sunflower";
import CountDown from "./components/CountDown";

const App = () => {
  const countDownDate = "August 21, 2026 11:30:00";
  const targetTime = new Date(countDownDate).getTime();

  const [isBirthday, setIsBirthday] = useState(Date.now() >= targetTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() >= targetTime) {
        setIsBirthday(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  // Confetti when countdown ends
useEffect(() => {
  if (!isBirthday) return;

  const duration = 5 * 1000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 90,
      spread: 100,
      startVelocity: 15,
      gravity: 0.8,
      ticks: 300,
      origin: {
        x: Math.random(),
        y: 0,
      },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}, [isBirthday]);

  // Countdown screen
  if (!isBirthday) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-[#EAF7FF] px-4">
        <CountDown targetDate={countDownDate} />
      </div>
    );
  }

  // Birthday website
  return (
    <>
      <LenisScroll />

      <div className="bg-[#EAF7FF]">
        <Navbar />
        <Hero />
        <Sunflower />
        <TimeMacehine />
        <Footer />
      </div>
    </>
  );
};

export default App;
