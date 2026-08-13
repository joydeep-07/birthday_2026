import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import doodle from "../assets/images/doodle.png";

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
            className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px]"
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

            {/* Content */}
            <div className="flex h-full flex-col items-center px-6 pt-20">
              {/* Doodle */}
              <motion.img
                src={doodle}
                alt="Doraemon birthday doodle"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
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
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mt-8 text-center"
              >

                <h2 className="mt-10 font-heading text-3xl font-medium text-slate-800 sm:text-4xl">
                  Happy Birthday
                
                  <span className="text-[#009FE3]"> Baybee!</span>
                </h2>

                <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-slate-500">
                  Welcome to your little corner of magic.
                </p>
              </motion.div>

              {/* Bottom */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pb-8 font-heading text-sm text-[#147dcc]"
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
