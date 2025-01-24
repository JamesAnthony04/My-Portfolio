import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";


export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
