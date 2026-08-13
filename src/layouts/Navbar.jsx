import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Drawer from "../components/Drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex h-16 w-full items-center justify-between bg-[#EAF7FF] px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./logo.png"
            alt="Doraemon"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </div>

        {/* Menu */}
        <button
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

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
