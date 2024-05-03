import React, { useEffect, useRef } from 'react';
import './skills.css';
import Skillslist from './skill/Skill';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
      }
    });
    tl.fromTo(skillsRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
  }, []);

  return (
    <section className='skills'>
      <div className="container">
        <h2 className="stats__title" ref={skillsRef}><span>Core</span> tech stack & tools</h2>
        <div className="skills__wrapper">
          <Skillslist />
        </div>
      </div>
    </section>

  );
}

export default Skills;
