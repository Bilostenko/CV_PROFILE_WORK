import './Mywork.css'
import WorkList from './workList/WorkList';
import { useDispatch } from 'react-redux';
import { newProjects, oldProjects } from '../../redux/actions';

const Mywork = () => {
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
        <h2 className="stats__title work__title"><span>My</span> works</h2>
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