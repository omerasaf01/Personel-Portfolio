import React from "react";
import Photo from "./photo";

export default function Content() {
  return (
    <div>
      <div className="mx-12 flex items-center justify-center flex-col py-12 bg-opacity-30 pt-52 rounded-2xl mobilePhoto:hidden">
        <div className="flex w-full justify-between items-center px-10">
          <div className="flex flex-col">
            <span className="font-bold text-7xl">
              👋🏻 Hi Im,{" "}
              <span className="text-cyan-300 animate-pulse">Ömer Asaf</span>
            </span>
            <span className="animate-pulse text-3xl bg-clip-text bg-gradient-to-r from-sky-200 to-blue-700 text-transparent">
              Full Stack Web Developer
            </span>
            <p className="text-gray-300 pt-8 text-xl">
              My name is Ömer Asaf Karasu and Im a Full Stack Developer, <br />
              I can create a full stack web and mobile application, <br />I
              usually write backend services with .Net Core + CQRS Pattern etc.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Photo />
          </div>
        </div>
      </div>
      <div className="mobilePhoto:flex flex-col items-center justify-center pt-12 hidden">
        <div className="flex justify-center items-center">
          <Photo />
        </div>
        <div className="flex flex-col justify-center text-center">
          <span className="font-bold text-7xl">
            👋🏻 Hi Im,
            <span className="text-cyan-300 animate-pulse"> Ömer Asaf</span>
          </span>
          <span className="animate-pulse text-3xl bg-clip-text bg-gradient-to-r from-sky-200 to-blue-700 text-transparent">
            Full Stack Web Developer
          </span>
          <p className="text-gray-300 pt-8 text-center flex justify-center text-xl">
            My name is Ömer Asaf Karasu and Im a <br /> 
            Full Stack Developer, <br />
            I can create a full stack web  <br />
            and mobile application, <br />
            Iusually write backend services with <br />
             .Net Core + CQRS Pattern etc.
          </p>
        </div>
      </div>
      <div className="absolute w-[300px] h-[300px] bg-emerald-300 bottom-0 left-0 blur-[300px] rounded-full -z-40" />
      <div className="absolute w-[300px] h-[300px] bg-blue-700 top-0 right-0 blur-[250px] rounded-full -z-40" />
    </div>
  );
}
