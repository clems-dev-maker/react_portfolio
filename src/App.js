import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import './App.css';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import About from './components/About';  // Importer le composant About
import Faq from './components/Faq';
import GithubRepos from './components/GithubRepos';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} /> {/* Route pour la section Skills */}
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />  {/* Nouvelle route About */}
            <Route path="/faq" element={<Faq />} /> {/* Nouvelle route FAQ */}
            <Route path="/github-repos" element={<GithubRepos />} />  {/* Nouvelle route GitHub Repos */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
