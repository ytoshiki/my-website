import ProjectList from './ProjectList';
import '../styles/Projects.scss';

const Projects = () => {
  return (
    <div className='l-container'>
      <div className='projects'>
        <h2 className='projects__title'>Projects</h2>
        <div className='projects__content'>
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default Projects;
