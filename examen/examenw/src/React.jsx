import React from 'react';
import { GitHubProvider, useGitHub } from './GitHubContext';

const App = () => {
  const { repos, error } = useGitHub();

  if (error) {
    return <div>Error al cargar los repositorios</div>;
  }

  return (
    <div>
      <h1>Mis repositorios de GitHub</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default () => (
  <GitHubProvider><App />
  
