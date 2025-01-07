import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-[80vh]">
    <Navbar />
    <Hero />
    <About />
    <Contact />
    <Footer />

    </main>
  )
}