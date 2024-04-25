import './education.css'
import { myExperience } from '../../../data/data';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Education = () => {

  const educationRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(educationRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
  }, [])

  return (
    <div className="experience__education">
      <h2 className="experience__education-header" ref={educationRef}><span>Ed</span>ucation</h2>
      <ul className="experience__education-list">
        {myExperience().education.map((item, index) => (
          <li className="education__list-item" key={index}>
            <div className="education__list-datewraper">
              <p className="education__list-date">{item.date}</p>
              <p className="education__list-name">{item.name}</p>
              <div className="education__list-description">
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

export default Education;