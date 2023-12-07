import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "@/components/menu";
import Opening from "@/components/opening";
import Content from "@/components/content";
import Particle from "@/components/particle";
import About from "@/components/about";
import Projects from "@/components/projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Opening>
      <Particle />
      <div className="h-full flex flex-col">
        <div className="w-full h-screen flex flex-col">
          <Menu />
          <Content />
        </div>
        <div className="h-screen">
          <About />
        </div>
        <div className="h-screen">
          <Projects />
        </div>
      </div>
    </Opening>
  );
}
