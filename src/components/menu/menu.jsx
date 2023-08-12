import { BsGithub } from "react-icons/bs"; 
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import React from "react";
import { Router, useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();

  const openInstagram = () => {
    router.push("https://www.instagram.com/omerasafkarasu01/");
  };
  const openGithub = () => {
    router.push("https://github.com/omerasaf01");
  };

  return (
    <div className="fixed flex justify-between px-12 w-full h-24 items-center flex-wrap pt-10 z-10 tb_max:justify-around">
      <div>
        <h2 className="bg-gradient-to-r from-cyan-200 to-blue-500 bg-clip-text text-transparent text-2xl">
          Ömer Asaf
        </h2>
      </div>
      <div className="flex space-x-9 backdrop-blur-2xl border border-[#43434394] p-5 rounded-2xl">
        <a href="#" className="text-white hover:text-slate-400 transition-all">
          Home
        </a>
        <a
          href="#skills"
          className="text-white hover:text-slate-400 transition-all"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-white hover:text-slate-400 transition-all"
        >
          Projects
        </a>
        <div className="flex items-center justify-around space-x-4 z-50">
          <button onClick={openGithub} className="items-center">
            <div className="w-full h-full">
              <BsGithub className="text-white" />
            </div>
          </button>
          <button onClick={openInstagram}>
            <BsInstagram className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
