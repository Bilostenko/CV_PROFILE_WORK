import './work.css'
import { myExperience } from '../../../data/data';
import gsap from 'gsap';
import React, {useEffect, useRef} from  'react';
// import Mrfish from '../MrFish';

const Work = () => {
  const expRef = useRef(null);

  useEffect (() => {
    const tl = gsap.timeline();
    tl.fromTo(expRef.current, { x: +100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
  }, [])

  return (
    <div className="experience__work">
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
      {/* < Mrfish /> */}
    </div>
  );
}

export default Work;