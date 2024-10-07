// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-primary-blue p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white hover:text-primary-orange">
          <h1 className="text-white text-2xl font-bold">Mon Portfolio</h1>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/about" className="text-white hover:text-primary-orange">
              À propos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-primary-orange">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/faq" className="text-white hover:text-primary-orange">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/skills" className="text-white hover:text-primary-orange">
              Compétences
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="text-white hover:text-primary-orange">
              Certifications
            </Link>
          </li>
          <li>
            <Link to="/github-repos" className="text-white hover:text-primary-orange">
              Projets GitHub
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
