import React, { useState } from "react";
import {
  Compass,
  ChevronRight,
  Play,
  Star,
  Bike,
  Car,
  Coffee,
  Heart,
  Cake,
} from "lucide-react";
import { tabContentMap, stories } from "../utils/bucketListData";
import biryani from "../assets/gadgets/biryani.jpg";
import img1 from "../assets/images/doodle1.png";

// Reusable Image component with a skeleton loader applied only to the image area
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton Loader shown until the image loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

const BucketList = () => {
  // Dynamically get tab names from tabContentMap keys (Popular, Paris, Japan, Goa, etc.)
  const availableTabs = Object.keys(tabContentMap);
  const [activeTab, setActiveTab] = useState(availableTabs[0] || "Popular");

  // Get current active cards based on selected tab
  const currentDestinations = tabContentMap[activeTab] || [];

  return (
    <div>
      <div className="min-h-screen font-sans py-8 px-3 md:px-12 rounded-sm bg-[#EAF7FF]">
        {/* 1. HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-white rounded-sm border border-gray-100 px-3 py-5 sm:p-8 transition-all duration-300 ">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#1687D8]">
                Our little bucket list
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-[1.15] text-[#183B56]">
              Things In<span className="text-[#1687D8]"> Our Bucket List</span>
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm text-justify max-w-3xl leading-relaxed">
              Amader bucket list ta toh already ekta pura Doraemon er gadget
              drawer er moto 😭😂 Koto kichu korte hobe ekhono, onk jaygay
              ghurte hobe, cute cute date e jete hobe, eksathe onk photo tulte
              hobe, notun notun food try korte hobe, ar obviously emon kichu
              paglamo korte hobe jegulo pore mone kore dujonei hasbo 😗🌝 Kichu
              plan ekhon sudhu “ekdin korbo” bole pore ache, but ekdin na ekdin
              ogulo sob korbo.😭😂❤️
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs sm:text-sm font-medium text-gray-500 py-1.5 rounded-md ">
                Ar jekhanei jabo, Chumu khawa ta bucket list e rakhbo nki ? 🫦
              </span>
            </div>
          </div>

          {/* HERO IMAGE GRID */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-[#DFF3FF] rounded-lg h-64 sm:h-80 flex items-center justify-center relative overflow-hidden shadow-sm group">
              <LazyImage
                src="https://i.pinimg.com/736x/fb/e4/c7/fbe4c70413c50792e260fffbfcb55148.jpg"
                alt="icecream"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 pointer-events-none z-20" />
            </div>

            <div className="flex flex-col justify-between gap-3 sm:gap-4 h-64 sm:h-80">
              <div className="h-1/2 rounded-lg flex items-center justify-center relative overflow-hidden shadow-sm group">
                <LazyImage
                  src={biryani}
                  alt="biryani"
                  className="absolute inset-0 object-cover h-full w-full transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0  transition-opacity duration-300 pointer-events-none z-20" />
              </div>

              <div className="h-1/2 rounded-lg flex items-center justify-center relative overflow-hidden shadow-sm group">
                <LazyImage
                  src="https://i.pinimg.com/736x/54/c9/08/54c90837149757f5a40e57f9d77096b9.jpg"
                  alt="Kitkat"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#E63946]/15 transition-colors duration-300 pointer-events-none z-20" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. TOP DESTINATIONS */}
        <section className="mb-16 bg-white rounded-sm border border-gray-100 px-3 py-5 sm:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#1687D8] font-bold mb-1">
                Places & moments
              </p>
              <h2 className="text-2xl font-heading sm:text-3xl font-bold tracking-tight text-[#183B56]">
              The main Bucket List
              </h2>
            </div>
          </div>

          {/* DYNAMIC TABS MAPPED FROM tabContentMap */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#1687D8] text-white shadow-xs"
                    : "bg-[#EEF8FD] text-[#557184] hover:bg-[#DFF3FF]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* DESTINATION CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentDestinations.map((dest, index) => {
              const Icon = dest.icon || Compass;

              return (
                <div key={index} className="group cursor-pointer">
                  <div
                    className={`${
                      index === 0
                        ? "bg-[#DFF3FF]"
                        : index === 1
                          ? "bg-[#FFF5C9]"
                          : index === 2
                            ? "bg-[#E4F8EF]"
                            : "bg-[#FFE8E8]"
                    } rounded-sm h-55 sm:h-60 mb-3.5 flex items-center justify-center relative overflow-hidden shadow-xs border border-gray-100/50 transition-all duration-300`}
                  >
                    <LazyImage
                      src={dest.image}
                      alt={dest.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 pointer-events-none z-20" />

                    <div className="absolute left-4 right-4 bottom-4 text-white z-30 pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.18em] font-bold opacity-90 drop-shadow-xs">
                        {activeTab === "Popular" ? "Bucket list" : activeTab}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-semibold font-heading text-base text-[#183B56] group-hover:text-[#1687D8] transition-colors duration-200">
                    {dest.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-0.5">
                    {dest.location}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. LATEST STORIES */}
        <section className="mb-16 bg-white rounded-sm border border-gray-100 px-3 py-5 sm:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#E63946] font-bold mb-1">
               Aur humare chote chote sapne
              </p>
              {/* <h2 className="text-2xl font-heading sm:text-3xl font-bold tracking-tight text-[#183B56]">
                Chote chote sapne
              </h2> */}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, i) => (
              <div key={i} className="group cursor-pointer">
                <div
                  className={`${
                    i === 0
                      ? "bg-[#DFF3FF]"
                      : i === 1
                        ? "bg-[#FFF5C9]"
                        : "bg-[#E4F8EF]"
                  } rounded-sm md:h-55 h-80  mb-3.5 flex items-center justify-center relative overflow-hidden shadow-xs border border-gray-100/50 transition-all duration-300`}
                >
                  <LazyImage
                    src={story.image}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 pointer-events-none z-20" />

                  <div className="absolute left-4 right-4 bottom-4 text-white z-30 pointer-events-none">
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold opacity-90 drop-shadow-xs">
                      {story.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. HIGHLIGHTS */}
        <section className="mb-16 bg-white rounded-sm border border-gray-100 px-3 py-5 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#1687D8] font-bold mb-1">
                Someday
              </p>
              <h2 className="text-2xl font-heading sm:text-3xl font-bold tracking-tight text-[#183B56]">
                Our Little Highlights
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 h-full bg-[#F2FAFF] border border-[#D9EEF9] px-4 py-6 rounded-sm flex flex-col justify-between shadow-xs">
              <div>
                {/* HEADER */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full  flex items-center justify-center font-bold text-white overflow-hidden">
                    <LazyImage
                      src={img1}
                      alt="avatar"
                      className="h-full w-full object-cover object-top rounded-full"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-[#183B56]">
                      A Little Birthday Note
                    </h4>
                    <p className="text-xs text-gray-500">
                      For my favorite person
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 text-justify leading-relaxed mb-5">
                  Ekhon hoito sob sokh ekshathe puron kora possible na, tai
                  kichu sokh ei bucket list e rekhe dilam. ❤️ I believe ekdin na
                  ekdin amra eisob nischoi korbo. Hoito ektu time lagbe, hoito
                  majhe majhe plan cancel hobe, taka kom porbe, abar notun plan
                  banabo 😭😂 but ses obdi sob korbo. Sob jaigai eksonge jabo,
                  notun notun memories banabo, ar jekhanei jabo, tomar choto
                  choto sob sokh puron korar chesta korbo, baki sokh gulo sob
                  puron korar responsibility amar. 😗❤️
                  <br />
                </p>
              </div>

              {/* FOOTER */}
              <div className="mt-6 pt-4 border-t border-[#D9EEF9] flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                  I love you mere buggu
                </span>

                <Heart className="w-4 h-4 text-[#E63946] fill-current" />
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="group cursor-pointer bg-[#DFF3FF] rounded-sm h-80 sm:h-96 flex items-center justify-center relative overflow-hidden shadow-xs border border-gray-100/50 transition-all duration-300">
                <LazyImage
                  src="https://i.pinimg.com/736x/df/b0/10/dfb010a4ced5888dc55912773a04d618.jpg"
                  alt="Date"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 pointer-events-none z-20" />

                <div className="absolute bottom-5 left-5 right-5 text-white z-30 pointer-events-none">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold opacity-90 drop-shadow-xs">
                    This Durga Puja
                  </p>
                  <p className="font-medium font-heading text-lg mt-0.5">
                    Songe Thakur dekhbo, Ar khub moja krbo
                  </p>
                </div>
              </div>

              <div className="group cursor-pointer bg-[#DFF3FF] rounded-sm h-80 sm:h-96 flex items-center justify-center relative overflow-hidden shadow-xs border border-gray-100/50 transition-all duration-300">
                <LazyImage
                  src="https://i.pinimg.com/736x/79/e9/48/79e9488c24dc5ae75cb8bb3c8ac44d82.jpg"
                  alt="Date"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 pointer-events-none z-20" />

                <div className="absolute bottom-5 left-5 right-5 text-white z-30 pointer-events-none">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold opacity-90 drop-shadow-xs">
                    And some day
                  </p>
                  <p className="font-medium font-heading text-lg mt-0.5">
                    Eksonge Banaras abo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BucketList;
