import ImgTop from '../../assets/img-project-04.png';
import '../../styles/projects/WCMS.scss';
import ImgCategory from '../../assets/projects/connect/img-connect-category.jpg';
import ImgLang from '../../assets/projects/connect/img-connect-lang.jpg';

import { Link } from 'react-router-dom';
import PageTop from '../../components/projects/PageTop';
import Technology from '../../components/projects/Technology';
import VisitButton from '../../components/projects/VisitButton';
import PointBlock from '../../components/projects/PointBlock';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const searchImgs = [ImgCategory, ImgLang];

const pageTopSources = {
  site: 'https://pf-newssearch-client.vercel.app/',
  front: 'https://github.com/ytoshiki/pf__newssearch-client'
};

const technologyFront = [
  {
    head: 'Language',
    data: ['Typescript']
  },
  {
    head: 'Framework',
    data: ['Next.js']
  },
  {
    head: 'Style',
    data: ['css']
  }
];

const Connect = () => {
  const pageTopDescription = (
    <p className='wcms__top-para'>
      A platform for visualizing data collection and editing products and categories on <Link to='/'>W (EC site)</Link>.
    </p>
  );

  const point01Description = (
    <div className='wcms__points-description'>
      You can search for news by category from the top page.
      <br />
      <br />
      The search icon at the top right of the page leads you to the page where you can search by keyword and language.
      <br />
      <br />
      The news and aritcles are retrieved from{' '}
      <a href='https://currentsapi.services/en' target='_blank' rel='noreferrer'>
        Currents API
      </a>
    </div>
  );

  return (
    <main>
      <Header hasParent={true} />

      <div className='l-container'>
        <div className='wcms'>
          <PageTop title='W (e-commerce site)' description={pageTopDescription} sources={pageTopSources} image={ImgTop} />
          <Technology front={technologyFront} />
          <div className='wcms__block is-bg'>
            <h2 className='wcms__block-title'>Functionalities</h2>
            <div className='wcms__points'>
              <PointBlock title='Search By Keyword' description={point01Description} slideImages={searchImgs} size='is-lg' />
            </div>
          </div>
          <VisitButton url='https://pf-newssearch-client.vercel.app/' target='_blank' rel='noreferrer' />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Connect;
