import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className="h-15 flex justify-between items-center px-12">
      <div className="logo">
        <img className='h-10' src="./logo.png" alt="" />
      </div>
      {/* <h1 className='text-2xl uppercase font-normal'>Doraemon</h1> */}
      <div className="right">
        <RiMenu3Fill size={22} />
      </div>
    </div>
  );
}

export default Navbar