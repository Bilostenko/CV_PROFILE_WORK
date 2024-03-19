import './hero.css'

import fb from '../../assets/icons/free-icon-facebook-5968764.png';
import inst from '../../assets/icons/free-icon-instagram-1384089.png';
import lnkdn from '../../assets/icons/free-icon-linkedin-618.png';
import gitHub from '../../assets/icons/free-icon-github-logo-25231.png';
import workplace from '../../assets/image/hero-workplace.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__workplace">
            <img src={workplace} alt="computer" />
          </div>
          <div className="hero__description">
            <div className="hero_dynamic-info">
              {'<'}<span style={{ color: '#32A10F' }}>code</span>{'>'} <span style={{ fontWeight: 900 }}>I am Dev</span> {'</'}<span style={{ color: '#32A10F' }}>code</span>{'>'}
            </div>
            <div className="hero__social">
              <div className="hero__social_wrapper">
                <h1 className="hero__name">Dima BILOSTENKO</h1>
                <div className="hero__social-list-wrapper">
                  <ul className="hero__social-list">
                    <li className="hero__social-item"><a href="https://www.facebook.com/bilostenkod" target="_blank" rel="noopener noreferrer"><img src={fb} alt="facebook" /></a></li>
                    <li className="hero__social-item"><a href="https://www.instagram.com/di_sykes9/" target="_blank" rel="noopener noreferrer"><img src={inst} alt="instagram" /></a></li>
                    <li className="hero__social-item"><a href="https://www.linkedin.com/in/bilostenko/" target="_blank" rel="noopener noreferrer"><img src={lnkdn} alt="linkedin" /></a></li>
                    <li className="hero__social-item"><a href="https://github.com/Bilostenko" target="_blank" rel="noopener noreferrer"><img src={gitHub} alt="github" /></a></li>
                  </ul>

                </div>
              </div>

              <p className="hero__social-personal">I`m hard working <strong className='text-white'>software developer</strong>  who looks for working with open minded team of individuals</p>
              <a href="/" className="bn3">Button</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;