// src/components/Skills.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Skills() {
  const skillsData = [
    {
      name: 'HTML/CSS',
      percentage: 90,
      color: '#F97316', // Utilisation de primary-orange
    },
    {
      name: 'JavaScript',
      percentage: 85,
      color: '#2563EB', // Utilisation de primary-blue
    },
    {
      name: 'React',
      percentage: 80,
      color: '#F97316', // primary-orange
    },
    {
      name: 'Python',
      percentage: 80,
      color: '#F97316', // primary-orange
    },
    {
      name: 'Node.js',
      percentage: 75,
      color: '#2563EB', // primary-blue
    },
    {
      name: 'Tailwind CSS',
      percentage: 70,
      color: '#F97316', // primary-orange
    },
    {
      name: 'Bootstrap',
      percentage: 70,
      color: '#F97316', // primary-orange
    },
  ];

  return (
    <section className="py-12 bg-neutral-light" id="skills">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral-dark">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-neutral-dark">{skill.name}</h3>
              <div className="w-40 h-40">
                <Doughnut className="skills-graph"
                  data={{
                    labels: ['Compétence', 'Reste'],
                    datasets: [
                      {
                        data: [skill.percentage, 100 - skill.percentage],
                        backgroundColor: [skill.color, '#E5E7EB'],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    cutout: '70%',
                    plugins: {
                      tooltip: { enabled: false },
                      legend: { display: false },
                    },
                    maintainAspectRatio: false,
                  }}
                />
              </div>
              <p className="text-neutral-dark mt-4">
                {skill.percentage}% de maîtrise
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
