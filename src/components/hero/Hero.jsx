import './hero.css'

import React from 'react';
import { herodescription, social } from '../../data/data';


import download from '../../assets/icons/free-icon-internet-download-manager-13876813.png';

// import workplace from '../../assets/image/hero-workplace.jpg';

import Text from './type_animation/Text';

const Hero = () => {

  const { workPlaceImg, name, description } = herodescription();
  const { inst, lnkdn, gitHb, fb } = social();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__workplace">
            <img src={workPlaceImg} alt="computer" />
          </div>
          <div className="hero__description">
            <div className="hero_dynamic-info">
              {'<'}<span style={{ color: '#32A10F' }}>code</span>{'>'} <span style={{ fontWeight: 900 }}>I use&nbsp;</span>
              < Text />
              {'</'}<span style={{ color: '#32A10F' }}>code</span>{'>'}
            </div>
            <div className="hero__social">
              <div className="hero__social_wrapper">
                <h1 className="hero__name">{name}</h1>
                <div className="hero__social-list-wrapper">
                  <ul className="hero__social-list">
                    <li className="hero__social-item"><a href={fb.link} target="_blank" rel="noopener noreferrer"><img src={fb.img} alt="facebook" /></a></li>
                    <li className="hero__social-item"><a href={inst.link} target="_blank" rel="noopener noreferrer"><img src={inst.img} alt="instagram" /></a></li>
                    <li className="hero__social-item"><a href={lnkdn.link} target="_blank" rel="noopener noreferrer"><img src={lnkdn.img} alt="linkedin" /></a></li>
                    <li className="hero__social-item"><a href={gitHb.link} target="_blank" rel="noopener noreferrer"><img src={gitHb.img} alt="github" /></a></li>
                  </ul>
                </div>
              </div>
              {description}
              <a href={require("../../assets/CV_Bilostenko.pdf")} download="your_resume.pdf">
                <button className="bn632-hover bn22">
                  <img src={download} alt="Download" />
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;