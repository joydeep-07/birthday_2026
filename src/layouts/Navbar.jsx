import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#EAF7FF] h-16 flex items-center justify-between px-5 sm:px-8 lg:px-12">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="./logo.png"
          alt="Doraemon"
          className="h-9 sm:h-10 w-auto object-contain"
        />
      </div>

      {/* Menu */}
      <button
        type="button"
        aria-label="Open menu"
        className="
          group
          w-10 h-10
          flex items-center justify-center
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
  );
};

export default Navbar;
