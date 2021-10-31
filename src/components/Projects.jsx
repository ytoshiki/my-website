import ProjectList from './ProjectList';
import '../styles/Projects.scss';
import ProjectListJP from './jp/ProjectListJP';

const Projects = ({ lang }) => {
  const message = lang !== 'jp' && (
    <div>
      Why do I make projects? <br />
      That's because making my own projects is the way I take to learn new skills.
      <br />
      Here are some of the things I bulit from scratch.
    </div>
  );

  return (
    <div className='l-container'>
      <div className='projects' id='projects'>
        <h2 className={lang === 'jp' ? 'projects__title is-center' : 'projects__title'}>Projects</h2>
        <div className='projects__para'>{message}</div>
        <div className='projects__content'>{lang === 'jp' ? <ProjectListJP /> : <ProjectList />}</div>
      </div>
    </div>
  );
};

export default Projects;
