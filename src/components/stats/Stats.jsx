import React, { useState, useEffect } from 'react';
import './stats.css';
import { stats } from '../../data/data';
// import GitHubRepositoriesCounter from '../../services/GitHubService';

const Stats = () => {

  const statsData = stats();
  // const [repositoriesCount, setRepositoriesCount] = useState(null);

  // useEffect(() => {
  //   const fetchRepositoriesCount = async () => {
  //     try {
  //       const response = await GitHubRepositoriesCounter();
  //       setRepositoriesCount(response);
  //     } catch (error) {
  //       console.error('Помилка при отриманні кількості репозиторіїв:', error);
  //     }
  //   };

  //   fetchRepositoriesCount();
  // }, []);

  // ДОДАТИ СПІННЕР 

  return (
    <div className="container">
      <h2 className="stats__title"><span>Sta</span>ts</h2>

      <div className="stats__wrapper">
        <div className="stats__item">
          <div className="stats__item-logo">
            <img src={statsData.gitHubStats} alt="logo" />
          </div>
          <h3 className="stats__number">Repos on GitHub</h3>
          {/* <p className="stats__text">{repositoriesCount === null ? 'Loading...' : repositoriesCount}</p> */}
        </div>
        <div className="stats__item">
          <div className="stats__item-logo">
            <img src={statsData.codeWarsStats} alt="logo" />
          </div>
          <h3 className="stats__number">Completed tasks on Codewars</h3>
          <p className="stats__text">11</p>
        </div>
        <div className="stats__item">
          <div className="stats__item-logo">
            <img src={statsData.certificate} alt="logo" />
          </div>
          <h3 className="stats__number">Certificates (clickable)</h3>
          <p className="stats__text">11</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;