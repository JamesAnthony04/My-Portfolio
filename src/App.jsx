import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-[80vh] bg-gray-900 text-white">
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Project />
    <Contact />
    <Footer />

    </main>
  )
}