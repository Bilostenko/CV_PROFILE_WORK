import './header.css';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ukrLanguage, engLanguage } from '../../redux/actions';
import i18next from 'i18next';
import { LOCALES } from '../i18n/constants';
// import { useTranslation } from 'react-i18next';
import { Trans, useTranslation } from 'react-i18next';
import '../i18n/index';

const Header = () => {
  const heroRef = useRef(null);
  const { t } = useTranslation();
  const selectedLanguage = useSelector(state => state.language.selectedLanguage);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(heroRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 }, 1);
  }, []);


  useEffect(() => {
    console.log('Changing language to:', selectedLanguage);
    i18next.changeLanguage(selectedLanguage).then(() => {
      console.log('Language changed to:', i18next.language);
      console.log('Current translations:', i18next.getDataByLanguage(i18next.language));
      console.log('t("Welcome to React"):', t('Welcome to React'));
    }).catch(err => {
      console.error('Error changing language:', err);
    });
  }, [selectedLanguage]);

  const dispatch = useDispatch();
  const handleUkrlanguage = (event) => {
    event.preventDefault();
    console.log('Switching to Ukrainian');
    dispatch(ukrLanguage());
  }

  const handleEngLanguage = (event) => {
    event.preventDefault();
    console.log('Switching to English');
    dispatch(engLanguage());
  }
  console.log('Rendering Header with language:', i18next.language);
  console.log('Current translations in Header:', i18next.getDataByLanguage(i18next.language));
  console.log('t("Welcome to React") in render:', t('Welcome to React'));

  return (
    <header className='header'>
      <div className="container header__container">
        <div className="header__wrapper">
          <a href="#" className='header__hero' ref={heroRef}>
            <span className='header__surname'>My </span>
            <span className='first__name'>CV</span>
          </a>
          <div className="lng__btns-wrapper">
            <h3>{selectedLanguage}</h3>
            <a href="/" className={`bn5 ${i18next.language === LOCALES.UK ? 'disabled-link' : ''}`} onClick={handleUkrlanguage}>Ukrainian</a>
            <a href="/" className={`bn5 ${i18next.language === LOCALES.EN ? 'disabled-link' : ''}`} onClick={handleEngLanguage}>English</a>
            {/* <a href="/" className={`bn5 ${i18next.language === LOCALES.UK ? 'disabled-link' : ''}`} onClick={() => i18next.changeLanguage(LOCALES.UK)}>Ukrainian</a>
            <a href="/" className={`bn5 ${i18next.language === LOCALES.EN ? 'disabled-link' : ''}`} onClick={() => i18next.changeLanguage(LOCALES.EN)}>English</a> */}
          </div>
          <h3>{t('Welcome to React')}</h3>
          <h3><Trans>Welcome to React</Trans></h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
