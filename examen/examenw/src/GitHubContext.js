import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const fetchRepos = async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/user/repos',
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );
      setRepos(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <GitHubContext.Provider value={{ repos, error }}>
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHub = () => {
  const { repos, error } = React.useContext(GitHubContext);
  return { repos, error };
};
