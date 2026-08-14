import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

import doodle from "../assets/images/doodle.png";

import img1 from "../assets/favourites/biryani.png";
import img2 from "../assets/favourites/momos.png";
import img3 from "../assets/favourites/icecream.png";
import img4 from "../assets/favourites/icecream2.png";
import img5 from "../assets/favourites/harry.png";
import img6 from "../assets/favourites/draco.png";
import img7 from "../assets/favourites/cherry.png";
import img8 from "../assets/favourites/peach.png";
import img9 from "../assets/favourites/chai.png";

const favouriteImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

// Fixed random-looking positions
const favouritePositions = [
  {
    top: "12%",
    left: "5%",
    width: "58px",
    rotate: -12,
  },
  {
    top: "24%",
    right: "5%",
    width: "52px",
    rotate: 10,
  },
  {
    top: "42%",
    left: "4%",
    width: "62px",
    rotate: 8,
  },
  {
    top: "55%",
    right: "4%",
    width: "58px",
    rotate: -10,
  },
  {
    top: "70%",
    left: "7%",
    width: "55px",
    rotate: -7,
  },
  {
    top: "78%",
    right: "7%",
    width: "62px",
    rotate: 12,
  },
  {
    top: "88%",
    left: "15%",
    width: "50px",
    rotate: -9,
  },
  {
    top: "3%",
    left: "30%",
    width: "48px",
    rotate: 14,
  },
  {
    top: "90%",
    right: "18%",
    width: "52px",
    rotate: 7,
  },
];

const Drawer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-[60]
              bg-black/30
              backdrop-blur-[2px]
            "
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28,
            }}
            className="
              fixed
              left-0
              top-0
              z-[70]
              h-screen
              w-full
              overflow-hidden
              bg-[#EAF7FF]
              shadow-2xl
              md:w-[40%]
            "
          >
            {/* Favourite Images */}
            <div className="pointer-events-none absolute inset-0 z-[1]">
              {favouriteImages.map((image, index) => {
                const position = favouritePositions[index];

                return (
                  <motion.img
                    key={index}
                    src={image}
                    alt=""
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      rotate: position.rotate - 8,
                    }}
                    animate={{
                      opacity: 0.95,
                      scale: 1,
                      rotate: position.rotate,
                    }}
                    transition={{
                      delay: 0.15 + index * 0.06,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 180,
                      damping: 15,
                    }}
                    style={{
                      position: "absolute",
                      top: position.top,
                      left: position.left,
                      right: position.right,
                      width: position.width,
                    }}
                    className="
                      h-26
                      object-contain
                      drop-shadow-[0_8px_10px_rgba(0,0,0,0.08)]
                    "
                  />
                );
              })}
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close drawer"
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#147dcc]
                shadow-sm
                transition-all
                duration-300
                hover:rotate-90
                hover:shadow-md
              "
            >
              <IoClose size={25} />
            </button>

            {/* Main Content */}
            <div className="relative z-[5] flex h-full flex-col items-center px-6 pt-20">
              {/* Doodle */}
              <motion.img
                src={doodle}
                alt="Doraemon birthday doodle"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="
                  h-auto
                  w-[85%]
                  max-w-[420px]
                  object-contain
                  sm:w-[75%]
                "
              />

              {/* Text */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.5,
                }}
                className="mt-8 text-center"
              >
                <h2
                  className="
                    mt-10
                    font-heading
                    text-3xl
                    font-medium
                    text-slate-800
                    sm:text-4xl
                  "
                >
                  Happy Birthday <span className="text-[#009FE3]">Baybee!</span>
                </h2>

                <p
                  className="
                    mx-auto
                    mt-1
                    max-w-sm
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Welcome to your little corner of magic.
                </p>
              </motion.div>

              {/* Bottom */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="
                  mt-auto
                  pb-8
                  font-heading
                  text-sm
                  text-[#147dcc]
                "
              >
                Made just for you ♡
              </motion.p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
