// src/components/About.js
import React from 'react';

function About() {
  return (
    <section id="about" className="py-12 bg-neutral-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral-dark">À propos de moi</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/3">
            <img 
              src="images/avatar.jpg" 
              alt="Profile" 
              className="rounded-full shadow-lg w-40 h-40 mx-auto border-4 border-primary-orange"
            />
          </div>
          <div className="md:w-2/3 mt-8 md:mt-0 md:ml-8">
            <p className="text-lg text-neutral-dark">
              Bonjour ! Je suis un développeur web passionné avec une expérience dans la création d'applications web dynamiques et intuitives. J'adore explorer de nouvelles technologies et trouver des solutions innovantes à des problèmes complexes. 
            </p>
            <p className="text-lg text-neutral-dark mt-4">
              Fort de compétences en React, Node.js, et Tailwind CSS, je m'efforce de livrer du code propre et performant, tout en restant à l'écoute des besoins des utilisateurs finaux. N'hésitez pas à me contacter pour discuter de vos projets ou collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
