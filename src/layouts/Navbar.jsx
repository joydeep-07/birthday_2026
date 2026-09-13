import React, { useState, useRef, useLayoutEffect } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileLinksRef = useRef([]);

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

  // Mobile Menu Toggle Animation
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(mobileMenuRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.fromTo(
          mobileLinksRef.current,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.08,
            delay: 0.1,
            ease: "power2.out",
          },
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
        });
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Timeline", path: "/timeline" },
    { name: "Bucket List", path: "/bucket-list" },
  ];

  return (
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
        <div className="hidden items-center gap-8 md:flex">
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

        {/* Hamburger / Close Menu Button */}
        <button
          ref={menuRef}
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
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
          {isOpen ? (
            <RiCloseLine
              size={25}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          ) : (
            <RiMenu3Fill
              size={23}
              className="transition-transform duration-300 group-hover:rotate-3"
            />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        ref={mobileMenuRef}
        className="h-0 overflow-hidden opacity-0 bg-[#EAF7FF] border-t border-[#d0ecff] md:hidden shadow-md"
      >
        <div className="flex flex-col px-6 py-4 space-y-3">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              ref={(el) => (mobileLinksRef.current[index] = el)}
              className={({ isActive }) =>
                `text-base font-medium py-2 transition-colors duration-300 ${
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
      </div>
    </div>
  );
};

export default Navbar;
