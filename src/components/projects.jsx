import { AiFillGithub } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { CgNametag } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Config from "@/configs/config";

export default function Projects() {
  var deneme = 0;
  const [userState, setUserState] = useState([]);

  const fetchRepos = () => {
    Config.Projects.map((item) => {
      fetch(`https://api.github.com/repositories/${item}`, {
        headers: {
          Authorization: "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",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          var newState = userState;
          newState.push(data);
          console.log("Çalıştı, " + data);
          setUserState(newState);
        });
    });
  };

  useEffect(() => {
    setUserState([]);
    fetchRepos();
    console.log(userState);
  }, [deneme]);

  const repos = userState.slice(0, Config.Projects.length).map((userElement) => {
    return (
      <Link
        href={userElement.html_url ?? "/"}
        className="text-white bg-black rounded-xl grid grid-cols-1 py-7 relative group/card overflow-hidden"
        key={userElement.id}
      >
        <h2 className="w-full text-start text-3xl p-4 z-10 flex items-center gap-4">
          <CgNametag /> {userElement.name}
        </h2>
        <h2 className="z-10 flex gap-4 items-center px-4 w-full text-start text-2xl">
          <BsFillFileEarmarkCodeFill /> {userElement.language}
        </h2>
        <div className="w-0 h-full transition-all duration-200 group-hover/card:w-full absolute left-0 top-0 bg-emerald-300/40 z-0" />
        <span className="absolute bottom-0 r-0 hidden group-hover/card:absolute">
          Open In Github
        </span>
      </Link>
    );
  });

  return (
    <div className="w-full h-full pt-24" id="projects">
      <div className="w-full pb-24">
        <h2 className="text-5xl bg-gradient-to-r from-sky-300 to-purple-800 text-transparent bg-clip-text font-bold w-full text-center">
          Projects
        </h2>
      </div>
      <div className="gap-11 px-24 w-full grid mobileCards:grid-cols-1 grid-cols-2">
        {repos}
      </div>
      <div className="w-full flex py-24 justify-center items-center">
        <Link
          href="https://github.com/omerasaf01"
          className="flex py-4 px-3 bg-black hover:bg-opacity-30 items-center gap-3 rounded-lg text-xl  "
        >
          <AiFillGithub className="text-2xl" /> View More
        </Link>
      </div>
    </div>
  );
}
