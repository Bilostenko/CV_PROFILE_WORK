import './header.css'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Header = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(heroRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 }, 1);
  }, []); 

  return (
    <header className='header'>
      <div className="container header__container">
        <div className="header__wrapper">
          <a href="#" className='header__hero' ref={heroRef}>
            <span className='header__surname'>Dima </span>
            <span className='first__name'>BILOSTENKO</span>
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;