import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full h-full scroll-smooth mobilePhoto:my-24 mt-56" id="about">
      <div className="w-full items-center flex justify-center">
        <h2 className="text-5xl bg-gradient-to-r from-sky-300 to-purple-800 text-transparent bg-clip-text font-bold w-full text-center">
          About
        </h2>
      </div>
      <div className="grid grid-cols-2 mobilePhoto:grid-cols-1 grid-flow-row items-center justify-center w-full gap-10 mobilePhoto:py-12">
        <div className="w-full flex justify-center">
          <Image src="/Hyouka.png" width={500} height={500} />
        </div>
        <div className="w-full h-full pt-24 mobilePhoto:pt-0">
          <div>
            <h2 className="text-3xl mobilePhoto:text-center pb-5">
              My Name Is Ömer Asaf Karasu
            </h2>
          </div>
          <div className="grid grid-cols-1 mobilePhoto:mb-25">
            <p className="text-gray-300 mobilePhoto:text-center text-xl">
              Im 17 years old and I started <br className="hidden mobilePhoto:inline" /> my programming career <br />
              at 11 years old. I am currently <br className="hidden mobilePhoto:inline" /> attending high school. <br />
              I have 2 years business experience <br className="hidden mobilePhoto:inline" /> on startup companies <br />
              I love create interesting new <br className="hidden mobilePhoto:inline" /> things with my programming skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
