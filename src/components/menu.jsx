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
    <div className="w-full h-12 px-6 mobile:flex space-y-2 items-start flex-col mobile:visible hidden">
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
                  href={item.href}
                  className="py-3 w-full hover:bg-opacity-50 flex justify-center items-center"
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
        <div className="">
            
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
