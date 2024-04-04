import React from 'react';
import './skills.css';
import Skillslist from './skill/Skill';

const Skills = () => {
  return (
    <section className='skills'>
      <div className="container">
        <h2 className="stats__title"><span>Core</span> tech stack</h2>
        <div className="skills__wrapper">
          <Skillslist />
        </div>
      </div>
    </section>

  );
}

export default Skills;
