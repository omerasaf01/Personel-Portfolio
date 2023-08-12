import { SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiJira } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { DiLinux } from "react-icons/di";
import { IoLogoElectron } from "react-icons/io";
import { SiElectron } from "react-icons/si";
import { DiDocker } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiJira } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { DiReact } from "react-icons/di";
import React from "react";

export default function Skills() {
  return (
    <div className="py-24 flex justify-center items-center" id="skills">
      <div className="w-7/12 flex-col justify-center pt-14">
        <h2 className="text-white text-3xl font-extrabold text-center">
          My Skills And Technologies
        </h2>
        <div className="grid grid-flow-row lg:grid-cols-2 xsm:grid-cols-1 md:grid-cols-4 gap-3 pt-11">
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all">
            <DiReact className="text-blue-500 w-[55px] h-[55px]" />
            <h3 className="text-blue-500">React</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all">
            <SiDotnet className="text-purple-500 w-[55px] h-[55px]" />
            <h3 className="text-blue-500">.Net Core</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all  h-[57px]">
            <TbBrandNextjs className="text-gray-500 w-[45px] h-[45px]" />
            <h3 className="text-blue-500">Next.js</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all">
            <SiTailwindcss className="text-blue-400 w-[55px] h-[55px]" />
            <h3 className="text-blue-500">Tailwind.css</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all  h-[57px]">
            <SiJira className="text-blue-500 w-[35px] h-[35px]" />
            <h3 className="text-blue-500">Jira</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all">
            <DiGit className="text-orange-500 w-[55px] h-[55px]" />
            <h3 className="text-blue-500">Git</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all">
            <DiDocker className="text-blue-500 w-[55px] h-[55px]" />
            <h3 className="text-blue-500">Docker</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all">
            <IoLogoNodejs className="text-[#1b5e00] w-[45px] h-[45px]" />
            <h3 className="text-blue-500">Node.js</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all">
            <DiReact className="text-blue-500 w-[55px] h-[55px]" />
            <h3 className="text-blue-500">React Native</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all  h-[57px]">
            <SiElectron className="text-gray-500 w-[45px] h-[45px]" />
            <h3 className="text-blue-500">Electron.js</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all  h-[57px]">
            <DiLinux className="text-white w-[45px] h-[45px]" />
            <h3 className="text-blue-500">Linux</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all  h-[57px]">
            <AiFillGithub className="text-white w-[45px] h-[45px]" />
            <h3 className="text-blue-500">Github</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all  h-[57px]">
            <IoLogoPython className="w-[45px] h-[45px] text-yellow-400" />
            <h3 className="text-blue-500">Python</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all  h-[57px]">
            <SiFlask className="w-[45px] h-[45px] text-gray-200" />
            <h3 className="text-blue-500">Flask</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all  h-[57px]">
            <TbSql className="text-white w-[45px] h-[45px]" />
            <h3 className="text-blue-500">Sql</h3>
          </button>
          <button className="border border-gray-800 rounded-2xl flex justify-between items-center px-2 hover:border-blue-700 transition-all  h-[57px]">
            <SiTypescript className="text-blue-400 w-[35px] h-[35px]" />
            <h3 className="text-blue-500">TypeScript</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
