import Image from "next/image";
import React from "react";
import ProjectCard from "../projectCard";

export default function Projects() {

  return (
    <div className="w-full flex-col justify-center py-11" id="projects">
      <div className="flex justify-center py-12 pb-[100px]">
        <h1 className="text-white text-3xl text-center font-extrabold">
          My Projects And Works
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-flow-row xsm:grid-cols-1 grid-cols-2 gap-4 w-7/12">
          <ProjectCard name="AnimeKeyf" description="Anime Sitesi" adress="https://discord.gg/pXjfEU7vZu" />
          <ProjectCard name="Niafix" description="Software Developer Community" adress="https://niafix.com" />
          <ProjectCard name="Arkh Development" description="Developer Community" adress="https://discord.gg/arkhe" />
          <ProjectCard name="BooksChain" description="Blockchain library project" adress="https://bookschain.net" />
        </div>
      </div>
    </div>
  );
}
