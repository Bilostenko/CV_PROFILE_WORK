import './experience.css'

const Experience = () => {
  return (
    <section className="experience">
      <div className="section">
        <div className="education">
          <h2 className="education__header"><span>Ed</span>ucation</h2>
          <ul className="education__list">
            <li className="education__list-item">
              <div className="education__list-datewraper">
                <p className="education__list-date">2007-2011</p>
                <p className="education__list-place">National University of Internal Affairs</p>
                <p className="education__list-description">National University of Internal Affairs</p>
              </div>
            </li>
            <li className="education__list-item">
              <div className="education__list-datewraper">
                <p className="education__list-date">01.11.2022 - 01.05.2023</p>
                <p className="education__list-place">IT Generation</p>
                <p className="education__list-description">Front-End development</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="experience">

        </div>
      </div>
    </section>

  );
}

export default Experience;

{/* <div className="education__list-datawrapper">
                <h2 className="education__list-item__title">High School</h2>
                <p className="education__list-item__description">Nikolaev State University</p>
              </div> */}