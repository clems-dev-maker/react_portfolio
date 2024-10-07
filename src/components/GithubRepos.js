// src/components/GithubRepos.js
import React, { useState, useEffect } from 'react';
import { EyeIcon } from '@heroicons/react/solid'; // Importation de l'icône Eye

function GithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const githubUsername = 'clems-dev-maker'; // Remplacer par votre nom d'utilisateur GitHub

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <p className="text-center text-neutral-dark">Chargement des repositories...</p>;
  if (error) return <p className="text-center text-red-500">Erreur : {error}</p>;

  return (
    <section className="py-12 bg-neutral-light" id="github-repos">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral-dark">Mes repositories GitHub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <div key={repo.id} className="repo-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-neutral-light">
              <h3 className="text-xl font-semibold mb-2 text-neutral-dark">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-orange hover:text-primary-blue transition-colors duration-300"
                >
                  {repo.name}
                </a>
              </h3>
              <p className="text-neutral-dark mb-4">{repo.description || "Aucune description."}</p>
              <p className="text-sm text-neutral-dark mt-2">
                <span className="font-bold">Langage principal : </span>
                {repo.language || "Inconnu"}
              </p>
              <p className="text-sm text-neutral-dark">
                <span className="font-bold">Créé le : </span>
                {formatDate(repo.created_at)}
              </p>
              <p className="text-sm text-neutral-dark">
                <span className="font-bold">Dernière mise à jour : </span>
                {formatDate(repo.updated_at)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-neutral-dark">★ {repo.stargazers_count}</span>
                <span className="text-neutral-dark">Forks : {repo.forks_count}</span>
                <div className="flex items-center text-neutral-dark">
                  <EyeIcon className="w-5 h-5 mr-1 text-primary-orange" /> {/* Icône Eye */}
                  {repo.watchers_count} Watchers
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GithubRepos;
