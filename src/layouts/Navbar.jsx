import React, { useRef, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillCalendar, AiFillHeart } from "react-icons/ai";
import gsap from "gsap";

const Navbar = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);

  // Initial Entrance Animation
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

  const navLinks = [
    { name: "Home", path: "/", icon: <AiFillHome size={22} /> },
    { name: "Timeline", path: "/timeline", icon: <AiFillCalendar size={22} /> },
    {
      name: "Bucket List",
      path: "/bucket-list",
      icon: <AiFillHeart size={22} />,
    },
  ];

  return (
    <>
      {/* Top Navbar (Desktop & General Header) */}
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

          {/* Desktop Navigation Links */}
          <div ref={menuRef} className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#147dcc]"
                      : "text-[#5d7180] hover:text-[#147dcc]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 z-50 w-full bg-[#EAF7FF]/90 backdrop-blur-md border-t border-[#d0ecff] shadow-lg md:hidden">
        <nav className="flex items-center justify-around h-16 px-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full transition-all duration-300 ${
                  isActive
                    ? "text-[#147dcc] scale-105"
                    : "text-[#5d7180] hover:text-[#147dcc]"
                }`
              }
            >
              {link.icon}
              <span className="text-[10px] font-medium mt-1">{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
