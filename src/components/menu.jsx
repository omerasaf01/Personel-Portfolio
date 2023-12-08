import { FaDiscord } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import React, { useState } from "react";
import Link from "next/link";
import Config from "@/configs/config";

function MobileMenu() {
  const [state, setState] = useState(false);
  const menuStates = {
    openedTop:
      "bg-white w-8 h-1 rotate-[-45deg] translate-y-3 transition-all duration-300",
    openedBottom: "bg-white w-8 h-1 rotate-[45deg] transition-all duration-300",
  };
  const onOpen = () => {
    state == false ? setState(true) : setState(false);
  };

  return (
    <div className="w-full h-12 px-6 mobile:flex space-y-2 items-start flex-col mobile:visible hidden z-10">
      <button className=" mt-4 space-y-2" onClick={() => onOpen()}>
        <div
          className={
            state != false
              ? menuStates.openedTop
              : "bg-white w-8 h-1 transition-all duration-300"
          }
        />
        <div
          className={
            state != false
              ? menuStates.openedBottom
              : "bg-white w-8 h-1 transition-all duration-300"
          }
        />
      </button>
      <div
        className={
          state == false
            ? "absolute bg-black bg-opacity-60 h-full w-0 top-0 right-0 ease-in-out transition-all duration-700 hidden"
            : "fixed translate-y-[-6px] bg-black bg-opacity-60 h-full w-[60%]  top-0 right-0 flex flex-col ease-in-out transition-all duration-700"
        }
      >
        <div className="flex-col flex w-full h-full space-y-1">
          {Config.Nav.map((item) => {
            return (
              <Link
              key={item.id}
                href={item.href}
                className="py-3 w-full hover:bg-opacity-50 flex justify-center items-center scroll-smooth"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DesktopMenu() {
  return (
    <div className="mobile:hidden visible h-20 flex items-center justify-between px-6 z-10">
      <div className="flex justify-start">
        <h2 className="text-3xl">{Config.Title}</h2>
      </div>
      <div className="flex justify-around space-x-12">
        {Config.Nav.map((item) => {
          return (
            <Link href={item.href} key={item.id} className="text-xl scroll-smooth">
              {item.title}
            </Link>
          );
        })}
      </div>
      {/* <div className="flex space-x-3">
        <Link href="https://github.com/omerasaf01" className="bg-transparent group/github relative">
          <AiFillGithub className="text-white group-hover/github:text-black text-xl" />
          <div className="absolute bg-white rounded-lg group-hover/github:w-auto group-hover/github:h-auto" />
        </Link>
        <Link href="https://github.com/omerasaf01">
          <FaDiscord className="text-white text-xl" />
        </Link>
      </div> */}
    </div>
  );
}

export default function Menu() {
  return (
    <>
      <MobileMenu />
      <DesktopMenu />
    </>
  );
}
