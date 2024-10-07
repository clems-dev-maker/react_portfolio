// src/components/Projects.js
import React, { useState } from 'react';
import projectsData from '../data/projectsData.json';
import ProjectDetail from './ProjectDetail';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-12 bg-neutral-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral-dark">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-2 border-neutral-light"
              onClick={() => handleProjectClick(project)}
            >
              <h3 className="text-xl font-semibold mb-2 text-neutral-dark">{project.name}</h3>
              <p className="text-neutral-dark mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-orange hover:text-primary-blue transition-colors duration-300 font-medium"
              >
                Voir le projet
              </a>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
      )}
    </section>
  );
}

export default Projects;
