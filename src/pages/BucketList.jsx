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
} from "lucide-react";
import {
  destinationTabs,
  tabContentMap,
  stories,
} from "../utils/bucketListData";
import biryani from "../assets/gadgets/biryani.jpg";
const BucketList = () => {
  const [activeTab, setActiveTab] = useState("Popular");

  // Get current active cards based on selected tab (defaults to Popular if key missing)
  const currentDestinations =
    tabContentMap[activeTab] || tabContentMap["Popular"];

  return (
    <div className="px-4 sm:px-8 lg:px-12 bg-[#EAF7FF]">
      <div className="min-h-screen font-sans py-8 bg-white px-3 md:px-8 rounded-sm">
        {/* 1. HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E63946]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#1687D8]">
                Our little bucket list
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-7xl font-black tracking-tight leading-tight text-[#183B56]">
              Places We <span className="text-[#1687D8]">Need To See</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Paris nights, Japan adventures, Goa sunsets, rainy dates, shopping
              without a plan, late-night clubs, drinks together, bike rides and
              long drives. A list of all the little things we still have to
              experience together.
            </p>

            <div>
              <button className="flex items-center gap-2 bg-[#1687D8] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0D75BF] transition shadow-sm">
                <Compass className="w-5 h-5" />
                <span>Start exploring</span>
              </button>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <span className="w-8 h-8 rounded-full bg-[#1687D8] border-4 border-[#EAF7FF]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E63946]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD43B]" />
              <span className="text-xs text-gray-400">
                Anywhere is better when we're together.
              </span>
            </div>
          </div>

          {/* HERO IMAGE GRID */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-[#DFF3FF] rounded-sm h-64 sm:h-80 flex items-center justify-center relative overflow-hidden shadow-inner">
              <img
                src="https://i.pinimg.com/736x/fb/e4/c7/fbe4c70413c50792e260fffbfcb55148.jpg"
                alt="Paris"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-[#FFF3C4] rounded-sm h-32 sm:h-38 flex items-center justify-center relative overflow-hidden shadow-inner">
                <img src={biryani} alt="Japan" className="" />
              </div>

              <div className="bg-[#FFE5E8] rounded-sm h-32 sm:h-38 flex items-center justify-center relative overflow-hidden shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=85"
                  alt="Goa"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#E63946]/20" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/90 text-[#183B56] text-[10px] font-bold px-3 py-1.5 rounded-full">
                    Goa escape
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TOP DESTINATIONS */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#1687D8] font-bold mb-1">
                Places & moments
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#183B56]">
                Things We Have To Do ({activeTab})
              </h2>
            </div>

            <button className="flex items-center gap-1 text-sm font-semibold border border-[#B8DFF5] text-[#1687D8] px-4 py-2 rounded-full hover:bg-[#EAF7FF] transition">
              <span>See the whole list</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
            {destinationTabs?.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  activeTab === tab
                    ? "bg-[#1687D8] text-white shadow-sm"
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
                    } rounded-sm h-72 sm:h-80 mb-3 flex items-center justify-center relative overflow-hidden shadow-inner group-hover:opacity-95 transition`}
                  >
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

                    <div className="absolute left-4 right-4 bottom-4 text-white">
                      <p className="text-[10px] uppercase tracking-[0.18em] font-semibold opacity-90">
                        {activeTab === "Popular" ? "Bucket list" : activeTab}
                      </p>
                    </div>

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
                      <Icon className="w-4 h-4 text-[#1687D8]" />
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-[#183B56]">
                    {dest.title}
                  </h3>

                  <p className="text-sm text-gray-500">{dest.location}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. LATEST STORIES */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#E63946] font-bold mb-1">
                Little adventures
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#183B56]">
                Things We Want To Experience
              </h2>
            </div>

            <button className="flex items-center gap-1 text-sm font-semibold border border-[#B8DFF5] text-[#1687D8] px-4 py-2 rounded-full hover:bg-[#EAF7FF] transition">
              <span>View everything</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* MAIN STORY */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="group relative overflow-hidden rounded-xl h-[400px] bg-[#DFF3FF] border border-[#E4F1F7]">
                <img
                  src="https://i.pinimg.com/736x/db/50/c5/db50c5f3cca9658b4e807928741102db.jpg"
                  alt="Travel adventure"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#183B56]/70 via-transparent to-transparent" />

                <div className="absolute left-5 right-5 bottom-5">
                  <p className="font-medium font-heading text-xl sm:text-2xl text-white leading-snug max-w-xl">
                    Just drive until we find somewhere beautiful.
                  </p>
                </div>
              </div>
            </div>

            {/* SIDE STORIES */}
            <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
              {stories.slice(0).map((story, i) => (
                <div
                  key={i}
                  className="group flex gap-4 items-center cursor-pointer"
                >
                  {/* Image */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-[#EAF7FF]">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-medium font-heading text-sm sm:text-base leading-snug text-[#183B56] group-hover:text-[#1687D8] transition-colors line-clamp-2">
                        {story.title}
                      </h4>

                      <ChevronRight
                        size={16}
                        className="flex-shrink-0 text-gray-300 group-hover:text-[#1687D8] group-hover:translate-x-1 transition-all"
                      />
                    </div>

                    <p className="text-xs text-gray-400 mt-1">{story.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HIGHLIGHTS */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#1687D8] font-bold mb-1">
                Someday
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#183B56]">
                Our Little Highlights
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* REVIEW / NOTE CARD */}
            <div className="lg:col-span-4 h-full bg-[#F2FAFF] border border-[#D9EEF9] p-6 rounded-sm flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1687D8] flex items-center justify-center font-bold text-white">
                    J
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-[#183B56]">
                      Our Bucket List
                    </h4>
                    <p className="text-xs text-gray-500">
                      Two people • One big list
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3 text-[#FFD43B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <h3 className="font-bold text-base mb-2 text-[#183B56]">
                  Paris, Japan, Goa and a hundred more little adventures.
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 text-justify leading-relaxed mb-4">
                  See the Eiffel Tower together. Get lost somewhere in Japan.
                  Spend a few days in Goa. Dress up and go dancing. Have a drink
                  together. Go shopping without a plan. Walk in the rain. Take a
                  bike ride at sunset. Drive all night. Find cute cafés. And
                  keep adding things to the list.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 bg-white border border-[#D9EEF9] px-3 py-1.5 rounded-full text-xs text-[#1687D8]">
                    <Heart className="w-3 h-3 fill-current" />
                    Together
                  </span>

                  <span className="flex items-center gap-1.5 bg-white border border-[#D9EEF9] px-3 py-1.5 rounded-full text-xs text-[#E63946]">
                    <Bike className="w-3 h-3" />
                    Adventures
                  </span>
                </div>
              </div>
            </div>

            {/* VISUAL CARDS */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="bg-[#DFF3FF] rounded-sm h-80 sm:h-96 flex items-center justify-center relative overflow-hidden shadow-inner">
                <img
                  src="https://i.pinimg.com/1200x/0b/83/50/0b8350bf16eee190ddba9da7e85c7a13.jpg"
                  alt="Date"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold opacity-90">
                    One day, for sure
                  </p>
                  <p className="font-medium font-heading text-lg">
                    Cricket Date at Lords Balcony
                  </p>
                </div>
              </div>

              <div className="bg-[#DFF3FF] rounded-sm h-80 sm:h-96 flex items-center justify-center relative overflow-hidden shadow-inner">
                <img
                  src="https://i.pinimg.com/736x/55/a2/77/55a27730f75c2f2ba2544f17084e86e9.jpg"
                  alt="Date"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold opacity-90">
                    Also One day
                  </p>
                  <p className="font-medium font-heading text-lg">
                    Cricket Date at Lords Balcony
                  </p>
                </div>
              </div>

              {/* FLOATING BUTTON */}
              <div className="sm:absolute sm:-bottom-12 sm:right-0">
                <button className="flex items-center gap-1 text-sm font-semibold border border-[#B8DFF5] text-[#1687D8] bg-white px-5 py-2.5 rounded-full hover:bg-[#EAF7FF] transition shadow-sm">
                  <span>See the full bucket list</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SMALL PERSONAL FOOTER NOTE */}
        <div className="pt-12 pb-4 flex justify-center">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Coffee className="w-3.5 h-3.5 text-[#1687D8]" />
            <span>More places. More dates. More memories.</span>
            <Heart className="w-3.5 h-3.5 text-[#E63946] fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketList;
