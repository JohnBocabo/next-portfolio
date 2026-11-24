import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Expertise from "@/components/sections/Expertise";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Troubleshooting from "@/components/sections/Troubleshooting";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Expertise />
      <Troubleshooting />
      <Education />
      <Contact />
    </main>
  );
}
