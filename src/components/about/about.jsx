import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex py-32 pt-[200px] justify-around w-full flex-wrap ml_max:flex-col" id="about">
      <div className="ml_max:flex-col ml_max:justify-center pt-24 ml_max:items-center p-5">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent from-cyan-200 to-blue-600 bg-gradient-to-r w-full ml_max:text-center">
          Hello
        </h1>
        <p className="text-xl text-gray-600 w-full ml_max:text-center">
          Hello, my name is Ömer Asaf Karasu <br />
          Im 16 years old and I was born in Turkey <br />I started programming 8
          years ago <br />
          My life purpose is to write code, I really enjoy <br />from writing code
        </p>
      </div>
      <div className="flex justify-center">
        <div className="backdrop-blur-2xl border border-[#43434394] p-3 rounded-2xl flex-col">
          <div className="items-center flex justify-center">
            <Image src="https://cdn.discordapp.com/avatars/853212302882635816/a_1c9e29871eacf70eb5556baf1c531c7a.gif" width={350} height={350} className="rounded-2xl" />
          </div>
          <div className=" h-[0.1px] border-[#43434394] border rounded-2xl my-4" />
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-[#bababa94] text-md font-bold">My School </h2>
              <h2 className="text-[#7c7c7c94]">Yamantürk HighSchool</h2>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-[#bababa94] text-md font-bold">My Job </h2>
              <h2 className="text-[#7c7c7c94]">Freelance Web Dev.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
