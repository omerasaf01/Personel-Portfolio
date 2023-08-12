import About from '@/components/about/about';
import Effect from '@/components/effect';
import Footer from '@/components/footer/footer';
import Menu from '@/components/menu/menu';
import Pageup from '@/components/pageup';
import Projects from '@/components/projects/projects';
import Skills from '@/components/skills/skills';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full h-screen bg-black flex-col scrollbar">
      <Menu />
      <About />
      <Skills />
      <Projects />
      <div className="rounded-full w-[400px] h-[400px] bg-gradient-to-r from-cyan-400 to-blue-500 absolute bottom-0 right-0 blur-[660px]" />
      <Pageup />
      <Footer />
    </div>
  );
}
