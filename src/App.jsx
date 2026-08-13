import React from 'react'
import Navbar from './layouts/Navbar'
import Hero from './components/Hero'
import Pocket from './components/Pocket'
import TimeMacehine from './components/TimeMacehine'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TimeMacehine/>
      {/* <Pocket/> */}
    </div>
  )
}

export default App