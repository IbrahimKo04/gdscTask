import React from "react";
import logo from '../assets/logo.png';

const Hero = ()=>{


    return(
        <>
          <div className="p-20 flex items-center justify-between h-52 mt-28 ">
          <div className="flex-col">
          
        <h1 className="mb-5 text-5xl text-gray-800 b cursor-default">GDSC DJSCE</h1>
        <p>The official Google Developer Student's Club affiliated to D.J Sanghvi</p>
        </div>
        

            <img src = {logo} alt="GDSC" className="h-40 w-72"></img>

            
      </div>
     
        
        </>
    )
    
}

export default Hero;