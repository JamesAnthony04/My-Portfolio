import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './errors/Notfound';

export default function App() {
  return (
    <Router>
      <main className="bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
