import React from 'react'
import pic from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=' sticky w-full top-0 left-0 transition-all duration-1000 ease-in-out mb-3 flex justify-around z-20 backdrop-blur-lg  py-5 md:py-5 bg-transparent'>
        <img src={pic} alt="" className='sm:h-[60px] sm:w-[60px] h-[40px] w-[40px] sm:left-8 absolute left-2'/>
        <h1 className='h1 text-white text-center text-4xl font-bold font-[font-awesome]'>Star Wars</h1>
    </div>
  )
}

export default Navbar