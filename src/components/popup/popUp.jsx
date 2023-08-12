import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

export default function popUp({ name, adress, description }) {
  const [state, setState] = useState(true);

  const handleClose = () => {
    setState(false);
  };

  return (
    <div className="absolute w-[500px] h-[500px] backdrop-blur-xl shadow-2xl z-10 bg-slate-500">
      <h2 className="text-white text-2xl">DENEME</h2>
      <div className="flex">
        <div className="flex justify-end items-center">
          <button onClick={handleClose} className="bg-red-500 text-white rounded-full">
            <AiOutlineClose className="w-[100px] h-[100px]"/>
          </button>
        </div>
      </div>
    </div>
  );
}
