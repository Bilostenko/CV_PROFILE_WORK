import './about.css';
import {herodescription} from '../../data/data'

const About = () => {
  const herodescriptionData = herodescription();

  return (
    <section className="about">
      <div className="container">
        <h2 className='about__title'><span>Abo</span>ut me</h2>
        <div className="about__wrapper">
          <div className="about__description">
            <ul className="about__description-list">
              <li className="about__desctiption-item">{herodescriptionData.achievementList.item1}</li>
              <li className="about__desctiption-item">{herodescriptionData.achievementList.item2}</li>
              <li className="about__desctiption-item">{herodescriptionData.achievementList.item3}</li>
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