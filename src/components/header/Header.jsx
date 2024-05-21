import './header.css'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ukrLanguage, engLanguage } from '../../redux/actions.js';

import i18next from 'i18next';
import { LOCALES } from '../i18n/constants.js'
import { useTranslation } from "react-i18next";
import '../i18n/index.js'

const Header = () => {
  const heroRef = useRef(null);
  const { t } = useTranslation();
  const selectedLanguage = useSelector(state => state.language.selectedLanguage);


  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(heroRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 }, 1);
  }, []);

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);
  console.log(selectedLanguage)

  const dispatch = useDispatch()
  const handleUkrlanguage = (event) => {
    event.preventdefault()
    dispatch(ukrLanguage())
  }

  const handleEngLanguage = (event) => {
    event.preventdefault()
    dispatch(engLanguage())
  }


  return (
    <header className='header'>
      <div className="container header__container">
        <div className="header__wrapper">
          <a href="#" className='header__hero' ref={heroRef}>
            <span className='header__surname'>My </span>
            <span className='first__name'>CV</span>
          </a>
          <div className="lng__btns-wrapper">
            {/* <h3>{i18next.language}</h3> */}
            <a href="/" className={`bn5 ${i18next.language === LOCALES.UK ? 'disabled-link' : ''}`} onClick={handleUkrlanguage}>Ukrainian</a>
            <a href="/" className={`bn5 ${i18next.language === LOCALES.EN ? 'disabled-link' : ''}`} onClick={handleEngLanguage}>English</a>
            {/* <a href="/" className={`bn5 ${i18next.language === LOCALES.UK ? 'disabled-link' : ''}`} onClick={() => i18next.changeLanguage(LOCALES.UK)}>Ukrainian</a>
            <a href="/" className={`bn5 ${i18next.language === LOCALES.EN ? 'disabled-link' : ''}`} onClick={() => i18next.changeLanguage(LOCALES.EN)}>English</a> */}
          </div>
          <h3>{t('Welcome to React')}</h3>
        </div>

      </div>
    </header>
  );
}

export default Header;
