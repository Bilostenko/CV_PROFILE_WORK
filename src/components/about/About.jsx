import './about.css';

import personalPhoto from '../../assets/image/hero_photo.jfif';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className='about__title'><span>Abo</span>ut me</h2>
        <div className="about__wrapper">
          <div className="about__description">
            <ul className="about__description-list">
              <li className="about__desctiption-item">I have confirmed  CSS skills on LinkedIn </li>
              <li className="about__desctiption-item">Certification from Freecodecamp course on "Responsive Web Design" and "JavaScript Algorithms and Data Structures", certification of completion of CyberBionic systematics school and IT Generation</li>
              <li className="about__desctiption-item">4 kyu Rank on CodeWars with total completed 600+ challenges in JavaScript</li>
            </ul>
          </div>
          <div className="about__photo">
            <img src={personalPhoto} alt="personal photo" />
          </div>
        </div>
      </div>
    </section>
// ВИРІШИТИ ПИТАННЯ ЗІ ЗМЕНШУВАНИМ ФОТО
  );
}

export default About;