import './about.css';
import { herodescription } from '../../data/data'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const About = () => {
  const herodescriptionData = herodescription();
  const aboutRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      aboutRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    ).fromTo(
      listRef.current.children,
      { x: -100, opacity: 0, scale: 0 },
      { x: 0, opacity: 1, duration: 2, scale: 1, stagger: 0.5 },
      '-=1' 
    );
  }, []);
  return (
    <section className="about">
      <div className="container">
        <h2 className='about__title' ref={aboutRef}><span>Abo</span>ut me</h2>
        <div className="about__wrapper">
          <div className="about__description">
            <ul className="about__description-list" ref={listRef}>
              <li className="about__desctiption-item" >{herodescriptionData.achievementList.item1}</li>
              <li className="about__desctiption-item" >{herodescriptionData.achievementList.item2}</li>
              <li className="about__desctiption-item" >{herodescriptionData.achievementList.item3}</li>
            </ul>
          </div>
          <div className="about__photo">
            <img src={herodescriptionData.personalPhotoImg} alt="persona" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;