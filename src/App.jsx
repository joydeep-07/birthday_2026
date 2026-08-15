import React from 'react'
import Navbar from './layouts/Navbar'
import Hero from './components/Hero'
import Pocket from './components/Pocket'
import TimeMacehine from './components/TimeMacehine'
import Memories from './components/Memories'
import LenisScroll from './utils/Lenis'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <>
      <LenisScroll />

      <div className="bg-[#EAF7FF] ">
        <Navbar />
        <Hero />
        <div className="hidden md:flex">
          <Memories />
        </div>
        <TimeMacehine />
        <Footer />
        {/* <Pocket/> */}
      </div>
    </>
  );
}

export default App