import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";
import Journey from "@/components/home/Journey";
import Projectscarousel from "@/components/Projectscarousel";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <Hero />
      <Skills />
      <Contact />
      <Journey />
      <Projectscarousel />
    </main>
  );
}
