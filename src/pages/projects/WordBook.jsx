import ImgTop from '../../assets/img-project-03.png';
import '../../styles/projects/WCMS.scss';
// import ImgAuth from '../../assets/projects/wordbook/img-wordbook-auth.jpg';
import ImgSave from '../../assets/projects/wordbook/img-wordbook-save.jpg';
import ImgList from '../../assets/projects/wordbook/img-wordbook-list.jpg';
import ImgTest from '../../assets/projects/wordbook/img-wordbook-test.jpg';
import ImgSearch from '../../assets/projects/wordbook/img-wordbook-search.jpg';
import ImgAuth from '../../assets/projects/wordbook/img-wordbook-auth.jpg';
import { Link } from 'react-router-dom';
import PageTop from '../../components/projects/PageTop';
import Technology from '../../components/projects/Technology';
import VisitButton from '../../components/projects/VisitButton';
import PointBlock from '../../components/projects/PointBlock';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

// const authImgs = [ImgAuth];
const basicImgs = [ImgSave, ImgList, ImgTest];
const searchImgs = [ImgSearch];
const authImgs = [ImgAuth];

const pageTopSources = {
  site: 'https://wordbookd.netlify.app/',
  front: 'https://github.com/ytoshiki/pf__wordbook_client/tree/master/src',
  back: 'https://github.com/ytoshiki/pf__wordbook_server'
};

const technologyFront = [
  {
    head: 'Language',
    data: ['Typescript']
  },
  {
    head: 'Framework',
    data: ['React']
  },
  {
    head: 'State management',
    data: ['Redux']
  },
  {
    head: 'Style',
    data: ['scss']
  }
];

const technologyBack = [
  {
    head: 'Language',
    data: ['Typescript', 'Node']
  },
  {
    head: 'Framework',
    data: ['Express']
  },
  {
    head: 'Database',
    data: ['mongodb']
  },
  {
    head: 'Auth',
    data: ['JWT']
  }
];

const WordBook = () => {
  const pageTopDescription = <p className='wcms__top-para'>A platform for English learners where people can search for a word, make their own word book, and test their vocab.</p>;

  const point01Description = (
    <div className='wcms__points-description'>
      You can search for words and images from the search bar at the top of the page.
      <br />
      <br />
      I used the following APIs to implement it:
      <br />
      <br />
      <ul>
        <li>
          Definitions:{' '}
          <a href='https://developer.wordnik.com/' target='_blank' rel='noreferrer'>
            Wordnik API
          </a>
          ,
          <a href='https://owlbot.info/' target='_blank' rel='noreferrer'>
            Owlbot Dictionary API
          </a>
        </li>
        <li>
          Images:{' '}
          <a href='https://pixabay.com/' target='_blank' rel='noreferrer'>
            Pixabay API
          </a>
        </li>
      </ul>
    </div>
  );

  const point02Description = (
    <div className='wcms__points-description'>
      Once you register an account, you can create your own Wordbook from the bottom of the top page.
      <br />
      <br />
      you can see your wordbook from the left side of the screen. You can also take a test.
    </div>
  );

  const point03Description = (
    <div className='wcms__points-description'>
      {' '}
      <a href='https://jwt.io/' target='_blank' rel='noreferrer'>
        JWT
      </a>{' '}
      is used for user authentication and authrorization.
      <br />
      <br />
      To use the Wordbook feature, you need to register for an account.
      <br />
      <br />
      You can use the following information to sign in as a guest user:
      <br />
      <br />
      <ul>
        <li>Username: admin@gmail.com</li>
        <li>Password: password</li>
      </ul>
    </div>
  );

  return (
    <main>
      <Header hasParent={true} />

      <div className='l-container'>
        <div className='wcms'>
          <PageTop title='W (e-commerce site)' description={pageTopDescription} sources={pageTopSources} image={ImgTop} />
          <Technology front={technologyFront} back={technologyBack} />
          <div className='wcms__block is-bg'>
            <h2 className='wcms__block-title'>Functionalities</h2>
            <div className='wcms__points'>
              <PointBlock title='Search for words' description={point01Description} slideImages={searchImgs} size='is-lg' />
              <PointBlock title='Save words and test them' description={point02Description} slideImages={basicImgs} size='is-lg' />
              <PointBlock title='Authentication' description={point03Description} slideImages={authImgs} size='is-lg' />
            </div>
          </div>
          <VisitButton url='https://wordbookd.netlify.app/' target='_blank' rel='noreferrer' />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default WordBook;
