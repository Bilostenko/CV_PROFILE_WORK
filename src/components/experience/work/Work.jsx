import './work.css'
import { myExperience } from '../../../data/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const Work = () => {
  const expRef = useRef(null);
  const workSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: workSectionRef.current,
        start: "top 90%",
        end: "bottom 20%",
      }
    });
    tl.fromTo(workSectionRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
  }, []);

  return (
    <div className="experience__work" ref={workSectionRef}>
      <h2 className="experience__work-header" ref={expRef}><span>Exp</span>erience</h2>
      <ul className="experience__work-list">
        {myExperience().work.map((item, index) => (
          <li className="work__list-item" key={index}>
            <div className="work__list-datewraper">
              <p className="work__list-date">{item.date}</p>
              <p className="work__list-name">{item.name}</p>
              <div className="work__list-description">
                {typeof item.description === 'object' ? (
                  Object.values(item.description).map((value, i) => (
                    <p key={i}>{value}</p>
                  ))
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Work;