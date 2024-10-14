import React from "react";
import logo from '../assets/logo.png';



const Navbar = ()=>{
    return(
        <>
        <div className=" p-2 bg-white flex w-full h-10 items-center justify-between border-b-2 border-b-slate-200">
            <div className="flex items-center gap-4">
          <img className = "h-5 w-8 cursor-pointer hover:shadow-2xl ease-in-out duration-75 " src={logo} alt="GDSC"></img>
          <p className="p-2 text-gray-400 border-4 rounded-2xl border-transparent cursor-pointer hover:bg-gradient-to-r hover:from-red-500 hover:via-blue-500 hover:via-green-500 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent hover:border-r-yellow-500 hover:border-b-green-500 hover:border-l-blue-500 hover:border-t-red-500 ease-in-out duration-200"> Google Developer Student Club</p>
          </div>
          
         <ul className="list-none flex gap-3 text-gray-400 cursor-pointer">
            <li className="hover:text-black ease-in-out duration-100 hover:border-b-2 hover:border-b-red-700">Home</li>
            <li className="hover:text-black ease-in-out duration-100 hover:border-b-2 hover:border-b-green-400">Events</li>
            <li className="hover:text-black ease-in-out duration-100 hover:border-b-2 hover:border-b-blue-400">Gallery</li>
           
            <li className="hover:text-black ease-in-out duration-100  hover:border-b-2 hover:border-b-yellow-400">Contact Us</li>
          </ul>

          </div>
        </>
    )
}

export default Navbar;