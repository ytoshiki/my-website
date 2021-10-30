import ProjectList from './ProjectList';
import '../styles/Projects.scss';
import ProjectListJP from './jp/ProjectListJP';

const Projects = ({ lang }) => {
  return (
    <div className='l-container'>
      <div className='projects' id='projects'>
        <h2 className='projects__title'>Projects</h2>
        <p className='projects__para'>
          Why do I make projects? That's because making my own projects is the way I take to learn new skills.
          <br />
          Here are some of the things I bulit from scratch.
        </p>
        <div className='projects__content'>{lang === 'jp' ? <ProjectListJP /> : <ProjectList />}</div>
      </div>
    </div>
  );
};

export default Projects;
