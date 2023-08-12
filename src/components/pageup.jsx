import { AiFillCaretUp } from "react-icons/ai"; 
import React from 'react'

export default function Pageup() {
  return (
    <a href="#" className="z-10 fixed right-5 bottom-[55px] rounded-full hover:shadow-md bg-gradient-to-r from-blue-500 to-blue-300 transition-all hover:shadow- hover:shadow-blue-600 w-12 h-12 items-center flex justify-center">
        <AiFillCaretUp className="w-7 h-7 text-gray-300" />
    </a>
  )
}
