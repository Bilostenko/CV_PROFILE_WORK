import './Mywork.css'
import React, { useEffect, useRef } from 'react';
import WorkList from './workList/WorkList';
import { useDispatch } from 'react-redux';
import { newProjects, oldProjects } from '../../redux/actions';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Mywork = () => {

  const worksRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: worksRef.current,
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
      }
    });
    tl.fromTo(worksRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
  }, [])

  const dispatch = useDispatch()
  const handleNewProjects = (event) => {
    event.preventDefault();
    dispatch(newProjects())
  }
  const handleOldProjects = (event) => {
    event.preventDefault();
    dispatch(oldProjects())
  }

  return (
    <section className="work">
      <div className="container">
        <h2 className="stats__title work__title" ref={worksRef}><span>My</span> works</h2>
        <div className="work__btns-wrapper">
          <a href="/" class="bn5" onClick={handleNewProjects}>New </a>
          <a href="/" class="bn5" onClick={handleOldProjects}>Old</a>
        </div>
        < WorkList />
      </div>
    </section>
  );
}

export default Mywork;