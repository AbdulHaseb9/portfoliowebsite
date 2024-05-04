import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";
import Journey from "@/components/home/Journey";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <Hero />
      <Skills />
      <Contact />
      <Journey />
      <Projects />
    </main>
  );
}
