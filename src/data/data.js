import React from 'react';
import workplace from '../assets/image/hero-workplace.jpg';
import personalPhoto from '../assets/image/hero_photo.jfif';
// SOCIAL
import instagram from '../assets/icons/free-icon-instagram-1384089.png';
import linkedin from '../assets/icons/free-icon-linkedin-618.png';
import gitHub from '../assets/icons/free-icon-github-logo-25231.png';
import gitHbStats from '../assets/icons/gitHub-stats.png';
import facebook from '../assets/icons/free-icon-facebook-5968764.png';
import codeWars from '../assets/icons/codewars-stats.png';
import certificates from '../assets/icons/certificate-stats.png';
// CERTIFICATES
import algorithmsJS from '../assets/certificate/algorithmsJS.png'
import certificateJSEssential from '../assets/certificate/Certificate_JS_Essential.png';
import certificateJSStarter from '../assets/certificate/Certificate_JS_starter.png';
import certificateEnglish from '../assets/certificate/english-1.png';
import itGeneration from '../assets/certificate/ITGeneration.jpg';
import certificateReact from '../assets/certificate/react.png';
import certificateResponsiveWeb from '../assets/certificate/responsiveWeb.png';
import certificateGitUdemy from '../assets/certificate/Сertificate-Git.png';
// SKILLS
import antdesignIcon from '../assets/icons/antdesign-icon.png';
import apiIcon from '../assets/icons/api-icon.png';
import cssIcon from '../assets/icons/css-icon.png';
import htmlIcon from '../assets/icons/html-icon.png';
import jsIcon from '../assets/icons/js-icon.png';
import figmaIcon from '../assets/icons/figma-icon.png';
import gitIcon from '../assets/icons/git-icon.png';
import photoshopIcon from '../assets/icons/photoshop-icon.png';
import reactIcon from '../assets/icons/react-icon.png';
import reduxIcon from '../assets/icons/redux-icon.png';
import sassIcon from '../assets/icons/sass-icon.png';

// WORKLIST
import calculator from '../assets/image/worklist/calculator.png';
import marvel from '../assets/image/worklist/marvel.png';
import pizza from '../assets/image/worklist/pizza.png';
import chuk from '../assets/image/worklist/chuk_norris.png';
import shopping from '../assets/image/worklist/shopping.png';
import katrik from '../assets/image/worklist/katrik.png';
import reactState from '../assets/image/worklist/react-state.png';
import courseAdversting from '../assets/image/worklist/course-adversting.png';
import forms from '../assets/image/worklist/form-input.png';
import intakeForms from '../assets/image/worklist/intake-forms.png';
import cutspace from '../assets/image/worklist/cutspace.png';
import bike from '../assets/image/worklist/bike-landing.png';
import clubweb from '../assets/image/worklist/clubweb.png';
import barber from '../assets/image/worklist/barber.png';
import trevland from '../assets/image/worklist/trevland.png';
import kettles from '../assets/image/worklist/kettles.png';
import accounter from '../assets/image/worklist/accounter.png';
import taskManager from '../assets/image/worklist/useReducer.png';
import reactFormic from '../assets/image/worklist/react-formic.png';
import keyCode from '../assets/image/worklist/keyCode.png';
import pizzaConstructor from '../assets/image/worklist/pizza-constructor.png';
import japanLanding from '../assets/image/worklist/japan-landing.png';

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

export const skillsList = () => {
  const antdsn = antdesignIcon;
  const api = apiIcon;
  const css = cssIcon;
  const html = htmlIcon;
  const js = jsIcon;
  const figma = figmaIcon;
  const git = gitIcon;
  const photoshop = photoshopIcon;
  const react = reactIcon;
  const redux = reduxIcon;
  const sass = sassIcon;

  return {
    skillList: [
      {
        skill: antdsn,
      },
      {
        skill: api,
      },
      {
        skill: css,
      },
      {
        skill: html,
      },
      {
        skill: js,
      },
      {
        skill: figma,
      },
      {
        skill: git,
      },
      {
        skill: photoshop,
      },
      {
        skill: react,
      },
      {
        skill: redux,
      },
      {
        skill: sass,
      }
    ]
  }
}

export const myWorkList = () => {
  return {
    worklist: {
      new: [
        {
          name: 'Calculator',
          linkPage: 'https://github.com/Bilostenko/calculator/tree/master',
          linkRepo: 'https://bilostenko.github.io/calculator/',
          tools: 'HTML, CSS, JavaScript',
          image: calculator,
          description: 'Calculator written in Javascript'
        },
        {
          name: 'Marvel Characters',
          linkPage: 'https://marvel-character-gamma.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/marvel-character/tree/main',
          tools: 'HTML, SCSS, JavaScript, React, API',
          image: marvel,
          description: 'Find your marvel hero and check his biography.'
        },
        {
          name: 'Pizza Website',
          linkPage: 'https://pizza-website-tau.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/pizza-website',
          tools: 'HTML, SCSS, JavaScript',
          image: pizza,
          description: 'Just Javascript and nothing else =) Test functionality: add and remove pizza order, drag and drop, change the language, validation inputs in cart and etc.'
        },
        {
          name: 'Chuk Norris Joke Collection',
          linkPage: 'https://bilostenko.github.io/Chuk-Norris-Joke-API/',
          linkRepo: 'https://github.com/Bilostenko/Chuk-Norris-Joke-API',
          tools: 'HTML, SCSS, JavaScript, API',
          image: chuk,
          description: 'Welcome to the Chuck Norris Joke Collection! Press the button and brace yourself for a laugh harder than Chuck`s roundhouse kick.'
        },
        {
          name: 'Shopping lannding page',
          linkPage: 'https://shopping-website-ffq6.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/Shopping-website/tree/master',
          tools: 'HTML, SCSS, JavaScript, React, GSAP',
          image: shopping,
          description: 'Simple landing page build on React and GSAP animation library.'
        },
      ],
      old: [
        {
          name: 'Karkik landing page',
          linkPage: 'https://bilostenko.github.io/kartik-bansal-cv/ ',
          linkRepo: 'https://github.com/Bilostenko/kartik-bansal-cv',
          tools: 'HTML, CSS',
          image: katrik,
          description: 'Simple landing page. Just JS and CSS'
        },
        {
          name: 'React state task',
          linkPage: 'https://react-state-task.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/react_state_task',
          tools: 'HTML, CSS, Javascript, React',
          image: reactState,
          description: 'Beginners projects for react state management'
        },
        {
          name: 'Course adversing landing page',
          linkPage: 'https://bilostenko.github.io/layout-course-advertising/',
          linkRepo: 'https://github.com/Bilostenko/layout-course-advertising',
          tools: 'HTML, CSS, Bootstrap',
          image: courseAdversting,
          description: 'Landing page with Bootstrap'
        },
        {
          name: 'Work with inputs, radio btns, checkboxes and etс.',
          linkPage: 'https://bilostenko.github.io/survey_form/ ',
          linkRepo: 'https://github.com/Bilostenko/survey_form',
          tools: 'HTML, CSS',
          image: forms,
          description: 'Learn how to use the forms'
        },
        {
          name: 'Cutspace landing page.',
          linkPage: 'https://bilostenko.github.io/Landing-Cutspace/',
          linkRepo: 'https://github.com/Bilostenko/Landing-Cutspace',
          tools: 'HTML, SCSS, Javscript',
          image: cutspace,
          description: 'Simple landing page build on HTML, SCSS and JS'
        },
        {
          name: 'Bikсraft landing page.',
          linkPage: 'https://bilostenko.github.io/bike-landing/',
          linkRepo: 'https://github.com/Bilostenko/bike-landing',
          tools: 'HTML, CSS',
          image: bike,
          description: 'Simple landing page build on HTML, SCSS'
        },
        {
          name: 'Work with inputs, radio btns, checkboxes and etс. Vol.2',
          linkPage: 'https://bilostenko.github.io/input-forms/',
          linkRepo: 'https://github.com/Bilostenko/input-forms',
          tools: 'HTML, CSS',
          image: intakeForms,
          description: 'Simple landing page build on HTML, SCSS'
        },
        {
          name: 'ClubWeb landing page.',
          linkPage: 'https://bilostenko.github.io/clubweb/',
          linkRepo: 'https://github.com/Bilostenko/clubweb',
          tools: 'HTML, CSS',
          image: clubweb,
          description: 'Simple landing page build on HTML, SCSS'
        },
        {
          name: 'Barber landing page.',
          linkPage: 'https://bilostenko.github.io/Dupper-Buly/',
          linkRepo: 'https://github.com/Bilostenko/Dupper-Buly',
          tools: 'HTML, CSS, Javascript',
          image: barber,
          description: 'Simple landing page build on HTML, SCSS and JS with animation'
        },
        {
          name: 'Trevland landing page.',
          linkPage: 'https://bilostenko.github.io/traveland/',
          linkRepo: 'https://github.com/Bilostenko/traveland',
          tools: 'HTML, SCSS',
          image: trevland,
          description: 'Simple landing page build on HTML and SCSS.'
        },
        {
          name: 'Kettles landing page.',
          linkPage: 'https://bilostenko.github.io/kettles/',
          linkRepo: 'https://github.com/Bilostenko/kettles',
          tools: 'HTML, SCSS, Javascript',
          image: kettles,
          description: 'Simple landing page build on HTML, SCSS and JS with animation'
        },
        {
          name: 'Accounter landing page.',
          linkPage: 'https://bilostenko.github.io/accounter/',
          linkRepo: 'https://github.com/Bilostenko/accounter',
          tools: 'HTML, CSS, Javascript',
          image: accounter,
          description: 'Simple landing page build on HTML, SCSS and JS'
        },
        {
          name: 'React task manager.',
          linkPage: 'https://task-manager-usereducer.vercel.app/ ',
          linkRepo: 'https://github.com/Bilostenko/task_manager_usereducer',
          tools: 'HTML, CSS, Javascript, React',
          image: taskManager,
          description: 'Task Manager built on React and useReducer hooks.'
        },
        {
          name: 'React forms.',
          linkPage: 'https://react-formic-yup.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/react-formic-yup',
          tools: 'HTML, SCSS, Javascript, React',
          image: reactFormic,
          description: 'Simple form built on React.'
        },
        {
          name: 'JavaScript keyCode',
          linkPage: 'https://bilostenko.github.io/keyCode/',
          linkRepo: 'https://github.com/Bilostenko/keyCode?tab=readme-ov-file',
          tools: 'HTML, SCSS, Javascript',
          image: keyCode,
          description: 'Press the keypad button and you will see its code.'
        },
        {
          name: 'Pizza constructor',
          linkPage: 'https://pizza-sigma-ten.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/pizza',
          tools: 'HTML, SCSS, Javascript',
          image: pizzaConstructor,
          description: 'Pizza constructor with drug & drop.'
        },
        {
          name: 'Japan landing page',
          linkPage: 'https://bilostenko.github.io/Japan_landing_page/',
          linkRepo: 'https://github.com/Bilostenko/Japan_landing_page',
          tools: 'HTML, SCSS, Javascript',
          image: japanLanding,
          description: 'Landing page about Japan.'
        },
      ]
    }
  };
};

export const myExperience = () => {

  return {
    education: [
      {
        date: '2007 - 2011',
        name: 'National University of Internal Affairs',
        description: {
          des1: 'Bachelor`s degree in law',
        }
      },
      {
        date: '01.11.2022 - 01.05.2023',
        name: 'IT Generation:',
        description: {
          des1: 'Front-End development',
        }
      },
      {
        date: '',
        name: 'FreeCodecamp:',
        description: {
          des1: 'Responsive Web Design (certificate may be provided upon request)',
          des2: 'JavaScript Algorithms and Data Structures'
        }
      },
      {
        date: '',
        name: 'Prometheus: Основи Web UI розробки 2020',
        description: {
          des1: '',
          des2: ''
        }
      },
      {
        date: '',
        name: 'Udemy:',
        description: {
          des1: 'Git: Complete course for beginners and more (certificate may be provided upon request)',
          des2: 'The Complete JavaScript course + React Course',
          des3: 'Basic CSS and HTML',
        }
      },
      {
        date: '',
        name: 'CyberBionic systematics:',
        description: {
          des1: 'course "JavaScript starter" (certificate may be provided upon request)',
          des2: 'course "JavaScript essential" (certificate may be provided upon request)'
        }
      },
    ],
    work: [
      {
        date: '',
        name: 'National Police of Ukraine',
        description: 'Senior inspector in special assigment of the International Police Cooperation Department (Interpol)',
      },
    ]
  }
}