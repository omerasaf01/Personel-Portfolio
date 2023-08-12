import { BsGithub } from "react-icons/bs"; 
import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  // return (
  //   <div className="w-full flex items-center bg-transparent border-t border-slate-600 h-[175px]">
  //     <div className="h-7 w-full space-y-8 flex justify-around items-center">
  //       <div className="flex-col justify-center">
  //         <div>
  //           <a href="#" className="text-white text-xl">
  //             Home
  //           </a>
  //         </div>
  //         <div>
  //           <a href="#about" className="text-white text-xl">
  //             About
  //           </a>
  //         </div>
  //         <div>
  //           <a href="#projects" className="text-white text-xl">
  //             Projects
  //           </a>
  //         </div>
  //       </div>
  //       <div className="flex space-x-4 items-center">
  //         <button onClick={openLinkedin} className="items-center bg-slate-600">
  //           <BsLinkedin className="text-white w-8 h-8" />
  //         </button>
  //         <button className="items-center" onClick={openInstagram}>
  //           <BsInstagram className="text-white w-8 h-8" />
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex justify-around items-center p-7 bg-[#040404] border-t-[#213261] border-t mt-[300px]">
      <div className="flex justify-start">
        <h2 className="text-blue-400">Made With</h2>
        <a
          href="https://github.com/omerasaf01"
          className="bg-gradient-to-r from-cyan-200 to-blue-500 bg-clip-text text-transparent pl-3 animate-pulse"
        >
          Ömer Asaf Karasu
        </a>
      </div>
      <div className="flex justify-end space-x-3">
        <a href="https://github.com/omerasaf01">
          <BsGithub className="text-white w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/omerasafkarasu01/">
          <BsInstagram className="text-white w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
