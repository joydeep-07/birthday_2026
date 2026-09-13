import React, { useState, useRef, useLayoutEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
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

      gsap.set(logo, { clearProps: "all" });

      const rect = logo.getBoundingClientRect();

      const logoWidth = rect.width || 120;
      const logoHeight = rect.height || 36;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const xOffset = centerX - (rect.left + logoWidth / 2);
      const yOffset = centerY - (rect.top + logoHeight / 2);

      gsap.set(containerRef.current, {
        height: "100vh",
        backgroundColor: "#EAF7FF",
      });

      gsap.set(logo, {
        x: xOffset,
        y: yOffset,
        scale: 6,
        transformOrigin: "center center",
      });

      gsap.set(menuRef.current, { autoAlpha: 0 });

      const tl = gsap.timeline({ delay: 0.3 });

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
            height: "4rem",
            duration: 1.2,
            ease: "power3.inOut",
          },
          0,
        )
        .to(
          menuRef.current,
          {
            autoAlpha: 1,
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
      <div
        ref={containerRef}
        className="relative z-50 w-full overflow-hidden bg-[#EAF7FF]"
      >
        <nav className="flex h-16 w-full items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/">
              <img
                ref={logoRef}
                src="./logo.png"
                alt="Doraemon"
                className="h-9 w-auto object-contain sm:h-10"
              />
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#147dcc]"
                    : "text-[#5d7180] hover:text-[#147dcc]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#147dcc]"
                    : "text-[#5d7180] hover:text-[#147dcc]"
                }`
              }
            >
              Timeline
            </NavLink>

            <NavLink
              to="/bucket-list"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#147dcc]"
                    : "text-[#5d7180] hover:text-[#147dcc]"
                }`
              }
            >
              Bucket List
            </NavLink>
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
              hover:scale-105
              hover:bg-[#e8f7ff]
              active:scale-95
              md:hidden
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
