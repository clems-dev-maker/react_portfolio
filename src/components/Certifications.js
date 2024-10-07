// src/components/Certifications.js
import React, { useState, useEffect } from 'react';
import certificationsData from '../data/certificationsData.json';

function Certifications() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    setCertifications(certificationsData);
  }, []);

  return (
    <section id="certifications" className="py-12 bg-neutral-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral-dark">Certifications & Formations</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <div key={index} className="certification-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-neutral-light">
              <h3 className="text-xl font-semibold mb-2 text-neutral-dark">{certification.title}</h3>
              <p className="text-neutral-dark"><strong>Institution :</strong> {certification.institution}</p>
              <p className="text-neutral-dark"><strong>Date :</strong> {certification.date}</p>
              <p className="text-neutral-dark mb-4">{certification.description}</p>
              {certification.link && (
                <a 
                  href={certification.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-orange hover:text-primary-blue transition-colors duration-300 font-medium"
                >
                  Voir le certificat
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
