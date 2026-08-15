import React, { useState, useRef, useLayoutEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import gsap from "gsap";
import Drawer from "../components/Drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const logo = logoRef.current;

      // Reset any transforms to ensure accurate DOM measurements
      gsap.set(logo, { clearProps: "all" });

      // Measure the logo's natural position on the top-left
      const rect = logo.getBoundingClientRect();

      // Fallback width/height in case the image hasn't fully loaded on first paint
      const logoWidth = rect.width || 120;
      const logoHeight = rect.height || 36;

      // Calculate the center of the viewport
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate exactly how many pixels to move the logo to perfectly center it
      const xOffset = centerX - (rect.left + logoWidth / 2);
      const yOffset = centerY - (rect.top + logoHeight / 2);

      // 1. Initial State: Full screen background, massive centered logo, hidden menu
      gsap.set(containerRef.current, {
        height: "100vh",
        backgroundColor: "#EAF7FF",
      });

      gsap.set(logo, {
        x: xOffset,
        y: yOffset,
        scale: 6, // Very big size
        transformOrigin: "center center",
      });

      gsap.set(menuRef.current, { autoAlpha: 0 });

      // 2. Animation Timeline
      const tl = gsap.timeline({ delay: 0.3 }); // Small pause so the user sees the big logo

      tl.to(
        logo,
        {
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
        },
        0,
      )
        .to(
          containerRef.current,
          {
            height: "4rem", // Shrinks back to standard h-16 (64px)
            duration: 1.2,
            ease: "power3.inOut",
          },
          0,
        )
        .to(
          menuRef.current,
          {
            autoAlpha: 1, // Fades the menu button back in
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.4",
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Wrapper ref to animate background height without breaking flex layouts */}
      <div
        ref={containerRef}
        className="w-full bg-[#EAF7FF] overflow-hidden relative z-50"
      >
        <nav className="flex h-16 w-full items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <div className="flex items-center">
            <img
              ref={logoRef}
              src="./logo.png"
              alt="Doraemon"
              className="h-9 w-auto object-contain sm:h-10"
            />
          </div>

          {/* Menu */}
          <button
            ref={menuRef}
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            className="
              group
              flex h-10 w-10
              items-center justify-center
              rounded-full
              text-[#147dcc]
              transition-all duration-300
              hover:bg-[#e8f7ff]
              hover:scale-105
              active:scale-95
            "
          >
            <RiMenu3Fill
              size={23}
              className="transition-transform duration-300 group-hover:rotate-3"
            />
          </button>
        </nav>
      </div>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
