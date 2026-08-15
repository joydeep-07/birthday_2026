import React from 'react'
import Navbar from './layouts/Navbar'
import Hero from './components/Hero'
import Pocket from './components/Pocket'
import TimeMacehine from './components/TimeMacehine'
import Memories from './components/Memories'
import LenisScroll from './utils/Lenis'

const App = () => {
  return (
    <>
      <LenisScroll />

      <div className="bg-[#EAF7FF] ">
        <Navbar />
        <Hero />
        <Memories />
        <TimeMacehine />
        {/* <Pocket/> */}
      </div>
    </>
  );
}

export default App