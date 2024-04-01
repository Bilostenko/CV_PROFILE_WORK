import React, { useState, useEffect } from 'react';
import './stats.css';
import { stats } from '../../data/data';
import useApiService from '../../services/APIservice';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
const Stats = () => {

  const statsData = stats();
  const { error, loading, getRepoCount, getCodeWarsCount, clearError } = useApiService()

  const [gitHubCount, setgitHubCount] = useState(null);
  const [codewarsCount, setcodewarsCount] = useState(null);

  useEffect(() => {
    updateGitHubRepos()
  }, [])

  const updateGitHubRepos = () => {
    clearError()

    getRepoCount()
      .then(res => {
        setgitHubCount(res);
      })
      .catch(err => {
        console.error('Error while fetching data:', err);
      });

    getCodeWarsCount()
      .then(res => {
        setcodewarsCount(res);
      })
      .catch(err => {
        console.error('Error while fetching data:', err);
      });
  }


  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <div className="container">
      <h2 className="stats__title"><span>Sta</span>ts</h2>

      <div className="stats__wrapper">
        <div className="stats__item">
          <div className="stats__item-logo">
            <img src={statsData.gitHubStats} alt="logo" />
          </div>
          <h3 className="stats__number">Repos on GitHub</h3>
          <p className="stats__text">
            {errorMessage}
            {spinner}
            {gitHubCount ? gitHubCount.length : 'Loading...'}
          </p>
        </div>
        <div className="stats__item">
          <div className="stats__item-logo">
            <img src={statsData.codeWarsStats} alt="logo" />
          </div>
          <h3 className="stats__number">Completed tasks on Codewars</h3>
          <p className="stats__text">
            {errorMessage}
            {spinner}
            {typeof codewarsCount === 'number' ? codewarsCount : 'Loading...'}
            {/* НЕ ПРЦЮЄ */}
          </p>
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
