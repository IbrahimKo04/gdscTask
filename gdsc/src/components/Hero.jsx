import React from "react";
import logo from '../assets/logo.png'; // Correct logo import

const Hero = () => {
  return (
    <>
      <div
        id="bg"
        className="mx-4 hover:bg-custom-gradient bg-slate-300 ease-in-out duration-0 hover:animate-grad rounded-full p-20 flex items-center justify-between h-96 mt-10"
      >
        <div className="flex-col">
          <h1 className="font-black mb-5 text-5xl text-gray-800 cursor-default">
            GDSC DJSCE
          </h1>
          <p className="text-gray-600">
            The official Google Developer Student's Club affiliated to D.J Sanghvi
          </p>
        </div>

       
        <img src={logo} alt="GDSC" className="h-40 w-72" />
      </div>
    </>
  );
};

export default Hero;
