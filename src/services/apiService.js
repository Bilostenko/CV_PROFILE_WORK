import React, { useState, useEffect } from 'react';

const GitHubRepositoriesCounter = () => {
  const [repositoriesCount, setRepositoriesCount] = useState(null);

  useEffect(() => {
    const fetchRepositoriesCount = async () => {
      try {
        const token = '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';
        let page = 1;
        let totalCount = 0;

        while (true) {
          const response = await fetch(`https://api.github.com/user/repos?page=${page}&per_page=100`, {
            headers: {
              Authorization: `token ${token}`
            }
          });

          if (!response.ok) {
            console.error('Помилка при отриманні даних:', response.status);
            break;
          }

          const repositories = await response.json();
          if (repositories.length === 0) break;

          totalCount += repositories.length;
          page++;
        }

        setRepositoriesCount(totalCount);
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      }
    };

    fetchRepositoriesCount();
  }, []);

  return (
    <div>
      {repositoriesCount === null ? (
        <p>Завантаження...</p>
      ) : (
        <p>Кількість ваших репозиторіїв: {repositoriesCount}</p>
      )}
    </div>
  );
};

export default GitHubRepositoriesCounter;
