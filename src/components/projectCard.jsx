import React, { useState } from "react";
import popUp from './popup/popUp';

export default function ProjectCard({ description, name, adress }) {
    // const [state, setState] = useState();

    // const openPopup = () => {
    //     state === false ? setState(true) : setState(false);
    // }
{/* <popUp name={name} description={description} adress={adress} /> */}
{/* <h1 className="absolute top-1 right-3 text-2xl text-white">Selam</h1> */}
  return (
    <div>
        {/* { state === true ? <popUp name={name} description={description} adress={adress} /> : <></>} */}
      <a href={adress} className="border border-gray-800 rounded-2xl py-5 flex justify-center items-center px-2 hover:border-cyan-700 transition-all">
        <h3 className="text-blue-300">{name}</h3>
      </a>
    </div>
  );
}
