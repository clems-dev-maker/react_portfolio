// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-neutral-dark text-neutral-light p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a href="https://github.com/clems-dev-maker" target="_blank" rel="noopener noreferrer" className="text-neutral-light hover:text-primary-orange transition-colors duration-300">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-cathala-900b30229/" target="_blank" rel="noopener noreferrer" className="text-neutral-light hover:text-primary-orange transition-colors duration-300">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
