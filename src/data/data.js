import React from 'react';
import workplace from '../assets/image/hero-workplace.jpg';

import instagram from '../assets/icons/free-icon-instagram-1384089.png';
import linkedin from '../assets/icons/free-icon-linkedin-618.png';
import gitHub from '../assets/icons/free-icon-github-logo-25231.png';
import facebook from '../assets/icons/free-icon-facebook-5968764.png';

/**
 * Hero section
 */
export const herodescription = () => {
  const workPlaceImg = workplace;
  const name = 'Dima BILOSTENKO';
  const description = (
    <p className="hero__social-personal">I`m hard working <strong className='text-white'>software developer</strong>  who looks for working with open minded team of individuals</p>
  );

  return {
    workPlaceImg,
    name,
    description
  };
};

export const social = () => {
  const inst = {img:instagram, link:"https://www.instagram.com/di_sykes9/"};
  const lnkdn = {img:linkedin, link:"https://www.linkedin.com/in/bilostenko/"} ;
  const gitHb = {img:gitHub, link:"https://github.com/Bilostenko"};
  const fb = {img:facebook, link:"https://www.facebook.com/bilostenkod"};

  return{
    inst,
    lnkdn,
    gitHb,
    fb
  }
}