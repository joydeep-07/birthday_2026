import React from "react";
import eyes from "../assets/gadgets/eyes.png";
import { Heart } from "lucide-react";
import { RiHeartFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="px-4 md:px-12 py-5">
      <div className="container border border-sky-500/10 flex items-center justify-start h-76 bg-sky-200 rounded-xl">
        <div className=" object-cover ">
          <img loading="lazy" src={eyes} className=" h-76" alt="" />
        </div>
        <div className="ml-32 ">
          <img loading="lazy" src="./logo.png" alt="" />
        </div>
      </div>
      <p className="text-center flex justify-center items-center gap-2 pt-5 text-xs md:text-sm font-heading text-sky-700">
        Made with love just for you
        <span>
          <RiHeartFill size={16} className="text-red-600" />
        </span>
      </p>
    </div>
  );
};

export default Footer;
