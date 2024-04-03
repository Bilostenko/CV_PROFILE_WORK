import React from 'react';
import workplace from '../assets/image/hero-workplace.jpg';
import personalPhoto from '../assets/image/hero_photo.jfif';

import instagram from '../assets/icons/free-icon-instagram-1384089.png';
import linkedin from '../assets/icons/free-icon-linkedin-618.png';
import gitHub from '../assets/icons/free-icon-github-logo-25231.png';
import gitHbStats from '../assets/icons/gitHub-stats.png';
import facebook from '../assets/icons/free-icon-facebook-5968764.png';
import codeWars from '../assets/icons/codewars-stats.png';
import certificates from '../assets/icons/certificate-stats.png';

import algorithmsJS from '../assets/certificate/algorithmsJS.png'
import certificateJSEssential from '../assets/certificate/Certificate_JS_Essential.png';
import certificateJSStarter from '../assets/certificate/Certificate_JS_starter.png';
import certificateEnglish from '../assets/certificate/english-1.png';
import itGeneration from '../assets/certificate/ITGeneration.jpg';
import certificateReact from '../assets/certificate/react.png';
import certificateResponsiveWeb from '../assets/certificate/responsiveWeb.png';
import certificateGitUdemy from '../assets/certificate/Сertificate-Git.png';

export const herodescription = () => {
  const workPlaceImg = workplace;
  const personalPhotoImg = personalPhoto;
  const name = 'Dima BILOSTENKO';
  const description = (
    <p className="hero__social-personal">I`m hard working <strong className='text-white'>software developer</strong>  who looks for working with open minded team of individuals</p>
  );
  const achievementList = { item1: "I have confirmed  CSS skills on LinkedIn", item2: "Certification from Freecodecamp course on `Responsive Web Design` and `JavaScript Algorithms and Data Structures`, certification of completion of CyberBionic systematics school and IT Generation", item3: "4 kyu Rank on CodeWars with total completed 600+ challenges in JavaScript" }

  return {
    workPlaceImg,
    name,
    description,
    achievementList,
    personalPhotoImg
  };
};

export const social = () => {
  const inst = { img: instagram, link: "https://www.instagram.com/di_sykes9/" };
  const lnkdn = { img: linkedin, link: "https://www.linkedin.com/in/bilostenko/" };
  const gitHb = { img: gitHub, link: "https://github.com/Bilostenko" };
  const fb = { img: facebook, link: "https://www.facebook.com/bilostenkod" };

  return {
    inst,
    lnkdn,
    gitHb,
    fb
  }
}

export const stats = () => {

  const gitHubStats = gitHbStats;
  const codeWarsStats = codeWars;
  const certificate = certificates;


  return {
    gitHubStats,
    codeWarsStats,
    certificate
  }
}

export const certificatesList = () => {

  const algorithms = algorithmsJS;
  const essential = certificateJSEssential;
  const starter = certificateJSStarter;
  const english = certificateEnglish;
  const generation = itGeneration;
  const react = certificateReact;
  const responsiveWeb = certificateResponsiveWeb;
  const gitUdemy = certificateGitUdemy;


  return {
    certificateList: [
      {
        image: algorithms,
        alt: 'algorithms'
      },
      {
        image: essential,
        alt: 'essential'
      },
      {
        image: starter,
        alt: 'starter'
      },
      {
        image: english,
        alt: 'english'
      },
      {
        image: generation,
        alt: 'generation'
      },
      {
        image: react,
        alt: 'react'
      },
      {
        image: responsiveWeb,
        alt: 'responsiveWeb'
      },
      {
        image: gitUdemy,
        alt: 'gitUdemy'
      },
    ]
  }
}