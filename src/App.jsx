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
          <Route path="/" element={<><Home /><Footer /></>} />
          <Route path="/about" element={<><About /><Footer /></>} />
          <Route path="/education" element={<><Education /><Footer /></>} />
          <Route path="/project" element={<><Project /><Footer /></>} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
          <Route path="*" element={<NotFound />} />  
        </Routes>
      </main>
    </Router>
  );
}
