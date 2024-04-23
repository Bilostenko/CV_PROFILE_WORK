import './education.css'
import { myExperience } from '../../../data/data';

const Education = () => {
  return (
    <div className="experience__education">
      <h2 className="experience__education-header"><span>Ed</span>ucation</h2>
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