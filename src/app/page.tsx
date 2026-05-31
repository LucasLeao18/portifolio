import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Certifications from "@/sections/Certifications";
import Languages from "@/sections/Languages";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
