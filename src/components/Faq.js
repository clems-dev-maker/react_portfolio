// src/components/Faq.js
import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';

const faqData = [
  {
    question: 'Quels services proposez-vous en tant que développeur web ?',
    answer: 'Je propose des services de développement web frontend et backend, incluant la création de sites responsifs, des applications web dynamiques, et l’optimisation de performance.',
  },
  {
    question: 'Quels langages et frameworks maîtrisez-vous ?',
    answer: 'Je maîtrise JavaScript, React, Node.js, ainsi que HTML, CSS et Tailwind CSS pour le frontend. Pour le backend, j’ai une expérience avec Express, MongoDB et d’autres technologies liées.',
  },
  {
    question: 'Combien de temps prenez-vous pour réaliser un projet ?',
    answer: 'Le délai dépend de la complexité du projet. Un site web simple peut prendre environ 1 à 2 semaines, tandis qu’une application plus complexe nécessitera plus de temps.',
  },
  {
    question: 'Proposez-vous des services de maintenance après le développement ?',
    answer: 'Oui, je propose également des services de maintenance pour assurer que votre site ou application reste à jour et performant après le lancement.',
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-neutral-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral-dark**">Questions fréquentes</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-neutral-dark pb-4">
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-neutral-light focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
                {activeIndex === index ? (
                  <ChevronUpIcon className="w-6 h-6 text-primary-orange transition-transform duration-300" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-primary-orange transition-transform duration-300" />
                )}
              </button>
              <div
                className={`mt-2 text-neutral-dark transition-max-height duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="py-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
