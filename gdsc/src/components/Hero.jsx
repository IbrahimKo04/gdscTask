import React from "react";
import logo from '../assets/logo.png';
import bub from '../assets/Bubbles'

const Hero = () => {
  return (
    <>
      <div id="bg"
        className="hover:bg-custom-gradient bg-slate-300 ease-in-out duration-0 animate-grad rounded-full p-20 flex items-center justify-between h-96 mt-10"
       
      >
        <div className="flex-col">
          <h1 className="font-black mb-5 text-5xl text-gray-800 cursor-default">
            GDSC DJSCE
          </h1>
          <p>The official Google Developer Student's Club affiliated to D.J Sanghvi</p>
        </div>

        <img src={logo} alt="GDSC" className="h-40 w-72" />
      </div>
    </>
  );
};

export default Hero;
