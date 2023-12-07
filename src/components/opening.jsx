import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Opening({ children }) {
  const [state, setState] = useState(false);
  const [text, setText] = useState("Made by Ömer Asaf Karasu".split(" "));
  var [title, setTitle] = useState("");
  var i = 0;

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    const textInterval = setInterval(() => {
      if (i < text.length) {
        setState(true);
        clearInterval(textInterval);
      }
    }, 1500);
  }, []);

  if (state) {
    return <>{children}</>;
  } else {
    return (
      <div className="h-screen w-creen flex justify-center items-center">
        <motion.div
          style={{ overflow: "hidden", fontSize: "2rem" }}
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-screen flex justify-center items-center flex-wrap"
        >
          {text.map((word, index) => (
            <motion.span
              variants={child}
              style={{ marginRight: "10px" }}
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <div className="absolute w-64 h-64 rounded-full bg-blue-700  blur-[30000px]" />
      </div>
    );
  }
}
