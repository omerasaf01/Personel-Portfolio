import React from "react";
import Image from "next/image";

export default function Content() {
  return (
    <div>
      <div className="mx-12 flex items-center justify-center flex-col py-12 bg-opacity-30 pt-52 rounded-2xl mobilePhoto:hidden">
        <div className="flex w-full justify-between items-center px-10">
          <div className="flex flex-col">
            <span className="font-bold text-7xl">
              👋🏻 Hi I'm,{" "}
              <span className="text-cyan-300 animate-pulse">Ömer Asaf</span>
            </span>
            <span className="animate-pulse text-3xl bg-clip-text bg-gradient-to-r from-sky-200 to-blue-700 text-transparent">
              Full Stack Web Developer
            </span>
            <pre className="text-gray-300 pt-8">
              My name is Ömer Asaf Karasu and I'm a Full Stack Developer, <br />
              I can create a full stack web and mobile application, <br />I
              usually write backend services with .Net Core + CQRS Pattern etc.
            </pre>
          </div>
          <div className="flex justify-center items-center">
            <Image src="/Hyouka.png" width={400} height={800} />
          </div>
        </div>
      </div>
      <div className="mobilePhoto:flex flex-col items-center justify-center pt-12 hidden">
        <div className="flex justify-center items-center">
          <Image src="/Hyouka.png" width={400} height={800} />
        </div>
        <div className="flex flex-col justify-center text-center">
          <span className="font-bold text-7xl">
            👋🏻 Hi I'm,{" "}
            <span className="text-cyan-300 animate-pulse">Ömer Asaf</span>
          </span>
          <span className="animate-pulse text-3xl bg-clip-text bg-gradient-to-r from-sky-200 to-blue-700 text-transparent">
            Full Stack Web Developer
          </span>
          <pre className="text-gray-300 pt-8 text-center flex justify-center">
            My name is Ömer Asaf Karasu and I'm a <br /> 
            Full Stack Developer, <br />
            I can create a full stack web  <br />
            and mobile application, <br />
            Iusually write backend services with <br />
             .Net Core + CQRS Pattern etc.
          </pre>
        </div>
      </div>
      <div className="absolute w-[300px] h-[300px] bg-emerald-300 bottom-0 left-0 blur-[300px] rounded-full -z-40" />
      <div className="absolute w-[300px] h-[300px] bg-blue-700 top-0 right-0 blur-[250px] rounded-full -z-40" />
    </div>
  );
}
