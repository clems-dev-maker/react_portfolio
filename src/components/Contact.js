// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-12 bg-neutral-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral-dark">Contactez-moi</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-neutral-dark font-semibold mb-2" htmlFor="name">
              Nom:
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-4 py-2 border border-neutral-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-dark font-semibold mb-2" htmlFor="email">
              Email:
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-4 py-2 border border-neutral-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-neutral-dark font-semibold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              className="w-full px-4 py-2 border border-neutral-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange" 
              required 
            ></textarea>
          </div>
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-primary-orange text-white px-6 py-2 rounded-full hover:bg-primary-blue transition-colors duration-300 font-semibold"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
