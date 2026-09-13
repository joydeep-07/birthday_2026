import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import confetti from "canvas-confetti";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import LenisScroll from "./utils/Lenis";
import CountDown from "./components/CountDown";

import Home from "./pages/Home";
import BucketList from "./pages/BucketList";
import Timeline from "./pages/Timeline";

const App = () => {
  // const countDownDate = "August 21, 2026 13:22:00";
  const countDownDate = "September 16, 2026 00:00:00";

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
    <BrowserRouter>
      <LenisScroll />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bucket-list" element={<BucketList />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
