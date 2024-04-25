import React, { useState, useEffect, useRef } from 'react';
import './stats.css';
import { stats } from '../../data/data';
import useApiService from '../../services/APIservice';
import gsap from 'gsap';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import question from '../../assets/icons/question.png'
import { Tooltip } from 'antd';
import Certificates from './certificate/Certificate';
const Stats = () => {

  const statsData = stats();
  const { error, loading, getRepoCount, getCodeWarsCount, clearError } = useApiService()
  const [gitHubCount, setgitHubCount] = useState(null);
  const [codewarsCountScore, setcodewarsCountScore] = useState(null);
  const [codewarsCountRank, setcodewarsCountRank] = useState(null);
  const tl = gsap.timeline();
  const statsRef = useRef(null)

  useEffect(() => {
    updateGitHubRepos()

    tl.fromTo(statsRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 }, [])
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
        setcodewarsCountScore(res.ranks.overall.score);
        setcodewarsCountRank(res.ranks.overall.name)
      })
      .catch(err => {
        console.error('Error while fetching data:', err);
      });
  }


  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <section className="stats">
      <div className="container">
        <h2 className="stats__title" ref={statsRef}><span>Sta</span>ts</h2>

        <div className="stats__wrapper">
          <div className="stats__item">
            <div className="stats__item-logo">
              <img src={statsData.certificate} alt="logo" />
            </div>
            <h3 className="stats__number">Certificates (clickable)</h3>
            <Tooltip
              className='tooltip'
              placement="right"
              title={<Certificates
              />}>
              <img src={question} alt="icon" />
            </Tooltip>
            <p className="stats__text">11</p>
          </div>
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
            <h3 className="stats__number">Score on Codewars</h3>
            <p className="stats__text">
              {errorMessage}
              {spinner}
              {typeof codewarsCountScore === 'number' ? codewarsCountScore : (spinner)}
            </p>
            <p className="stats__number">Rank:{' '}
              {errorMessage}
              {spinner}
              {typeof codewarsCountRank === 'string' ? codewarsCountRank : (spinner)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
