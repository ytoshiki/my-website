import ImgTop from '../../assets/img-project-01.png';
import '../../styles/projects/WCMS.scss';
import ImgAuth from '../../assets/projects/w-ec/img-w-auth.jpg';
import ImgCart from '../../assets/projects/w-ec/img-w-cart.jpg';
import ImgSearch from '../../assets/projects/w-ec/img-w-search.jpg';
import ImgSort from '../../assets/projects/w-ec/img-w-sort.jpg';
import ImgReview01 from '../../assets/projects/w-ec/img-w-review01.jpg';
import ImgReview02 from '../../assets/projects/w-ec/img-w-review02.jpg';
import { Link } from 'react-router-dom';
import PageTop from '../../components/projects/PageTop';
import Technology from '../../components/projects/Technology';
import VisitButton from '../../components/projects/VisitButton';
import PointBlock from '../../components/projects/PointBlock';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import FadeIn from '../../components/animation/FadeIn';
import Fadeout from '../../components/animation/Fadeout';

const authImgs = [ImgAuth];
const basicImgs = [ImgSearch, ImgCart, ImgSort];
const reviewImgs = [ImgReview01, ImgReview02];

const pageTopSources = {
  site: 'https://w-ec.netlify.app/',
  front: 'https://github.com/ytoshiki/pf__ecommerce-client',
  back: 'https://github.com/ytoshiki/pf__customer-data-server'
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

const WEC = () => {
  const pageTopDescription = (
    <p className='wcms__top-para'>
      Virtual e-commerce site. Products and categories are managed on{' '}
      <a href='/w-cms' target='_blank'>
        W{' '}
      </a>
      .
    </p>
  );

  const point01Description = (
    <div className='wcms__points-description'>
      You can do the following things which I think are common functionalities for a typical e-commerce site.
      <br />
      <br />
      <ul>
        <li>Seaching products</li>
        <li>Add to cart</li>
        <li>Sorting products</li>
      </ul>
      <br />
      <br />I used React Hooks and Redux for state management to avoid unnecessary api calls to implement those functionalities.
    </div>
  );

  const point02Description = <div className='wcms__points-description'>You can also write a review to the product you have purchased. You can't actually purchase the product, but once you click the purchase button, the user icon on the top right corner will take you to the review page where you can write and edit your review.</div>;

  const point03Description = (
    <div className='wcms__points-description'>
      JWT is used for user authentication and authrorization.
      <br />
      <br />
      To purchase products, you need to register an account, and your account information is also required for reviewing products.
      <br />
      <br />
      You can use the following infomation to sign in as a guest user.
      <br />
      <br />
      <ul>
        <li>Username: demo</li>
        <li>Password: password</li>
      </ul>
    </div>
  );

  return (
    <FadeIn>
      <Header hasParent={true} />
      <div className='l-container'>
        <div className='wcms'>
          <PageTop title='W (e-commerce site)' description={pageTopDescription} sources={pageTopSources} image={ImgTop} />
          <Technology front={technologyFront} back={technologyBack} />
          <div className='wcms__block is-bg'>
            <h2 className='wcms__block-title'>Functionalities</h2>
            <div className='wcms__points'>
              <PointBlock title='Basic Functionalities' description={point01Description} slideImages={basicImgs} size='is-lg' />
              <PointBlock title='Product Review' description={point02Description} slideImages={reviewImgs} size='is-lg' />
              <PointBlock title='Authentication' description={point03Description} slideImages={authImgs} size='is-lg' />
            </div>
          </div>
          <VisitButton url='https://w-ec.netlify.app/' target='_blank' rel='noreferrer' />
        </div>
      </div>
      <Footer />
    </FadeIn>
  );
};

export default WEC;
