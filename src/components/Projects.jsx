import ProjectList from './ProjectList';
import '../styles/Projects.scss';
import ProjectListJP from './jp/ProjectListJP';

const Projects = ({ lang }) => {
  return (
    <div className='l-container'>
      <div className='projects' id='projects'>
        <h2 className='projects__title'>
          <span> {'<'}</span> Projects <span>{'/>'}</span>
        </h2>
        <div className='projects__content'>{lang === 'jp' ? <ProjectListJP /> : <ProjectList />}</div>
      </div>
    </div>
  );
};

export default Projects;
