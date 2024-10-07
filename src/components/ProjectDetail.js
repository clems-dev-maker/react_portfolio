// src/components/ProjectDetail.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { XIcon } from '@heroicons/react/solid';

function ProjectDetail({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <section className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 overflow-y-auto max-h-screen">
        <div className="flex justify-between items-center p-4 border-b border-neutral-light">
          <h2 className="text-3xl font-bold text-neutral-dark">{project.title}</h2>
          <button onClick={onClose} className="text-neutral-dark hover:text-primary-orange transition-colors duration-300">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Carrousel d'images */}
          <div className="mb-8">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="w-full h-64 md:h-96 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Description du projet */}
          <div className="bg-neutral-light p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-neutral-dark">Description du projet</h3>
            <p className="text-neutral-dark leading-relaxed mb-4">{project.description}</p>

            {/* Stack technique */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-neutral-dark">Technologies utilisées</h4>
              <ul className="flex flex-wrap space-x-2 mt-2">
                {project.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-primary-orange text-white py-1 px-3 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lien vers le projet */}
            <div className="text-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-orange text-white py-2 px-6 rounded-full hover:bg-primary-blue transition-colors duration-300"
              >
                Voir le projet
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
