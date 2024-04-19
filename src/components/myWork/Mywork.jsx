import './Mywork.css'
import WorkList from './workList/WorkList';

const Mywork = () => {
  return (
    <section className="work">
      <div className="container">
        <h2 className="stats__title work__title"><span>My</span> works</h2>
        < WorkList />
      </div>
    </section>
  );
}

export default Mywork;