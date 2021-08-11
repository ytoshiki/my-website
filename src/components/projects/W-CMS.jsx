import ImgTop from '../../assets/img-project-02.png';
import '../../styles/projects/WCMS.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import BgValOne from '../../assets/projects/w-cms/img-val-01.jpg';
import BgValTwo from '../../assets/projects/w-cms/img-val-02.jpg';
import BgValThree from '../../assets/projects/w-cms/img-val-03.jpg';
import BgValFour from '../../assets/projects/w-cms/img-val-04.jpg';
import BgVisOne from '../../assets/projects/w-cms/img-vis-01.jpg';
import BgVisTwo from '../../assets/projects/w-cms/img-vis-02.jpg';
import BgVisThree from '../../assets/projects/w-cms/img-vis-03.jpg';
import BgVisFour from '../../assets/projects/w-cms/img-vis-04.jpg';
import BgCMOne from '../../assets/projects/w-cms/img-w-cm-01.jpg';
import BgCMTwo from '../../assets/projects/w-cms/img-w-cm-02.jpg';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const dataVisualizationImgs = [BgVisOne, BgVisTwo, BgVisThree, BgVisFour];
const contentManagementImgs = [BgCMOne, BgCMTwo];
const dataValidationImgs = [BgValOne, BgValTwo];

SwiperCore.use([Navigation, Pagination]);

const WCMS = () => {
  return (
    <main>
      <Header hasParent={true} />

      <div className='l-container'>
        <div className='wcms'>
          <div className='wcms__top'>
            <div className='wcms__top-texts'>
              <h1 className='wcms__top-title'>W (content management system & data visualization)</h1>
              <p className='wcms__top-para'>
                A platform for visualizing data collection and editing products and categories on{' '}
                <Link to='/' target='/' rel='noreferrer'>
                  W (EC site)
                </Link>
                .
              </p>
              <div className='wcms__top-options'>
                <div className='wcms__top-option'>
                  <span className='wcms__top-option-title'>demo:</span>

                  <a href='https://pf-customer-data-client.vercel.app/login' target='/' rel='noreferrer'>
                    Visit site
                  </a>
                </div>
                <div className='wcms__top-option'>
                  <span className='wcms__top-option-title'>source code:</span>

                  <span className='wcms__top-option-sub'>
                    <a href='https://github.com/ytoshiki/pf__customer-data-client' target='/' rel='noreferrer'>
                      front-end
                    </a>

                    <a href='https://github.com/ytoshiki/pf__customer-data-server' target='/' rel='noreferrer'>
                      back-end
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className='wcms__top-img'>
              <img src={ImgTop} alt='' />
            </div>
          </div>
          <div className='wcms__block'>
            <h2 className='wcms__block-title'>Technologies</h2>
            <div className='wcms__block-wrapper'>
              <div className='wcms__block-content'>
                <h3>Front-end</h3>
                <span>Language</span>
                <ul>
                  <li>Typescript</li>
                </ul>
                <span>Framework</span>
                <ul>
                  <li>React</li>
                </ul>
                <span>State management</span>
                <ul>
                  <li>Redux</li>
                </ul>
                <span>Style</span>
                <ul>
                  <li>Scss</li>
                </ul>
              </div>
              <div className='wcms__block-content'>
                <h3>Back-end</h3>
                <span>Language</span>
                <ul>
                  <li>Typescript</li>
                  <li>Node</li>
                </ul>
                <span>Framework</span>
                <ul>
                  <li>Express</li>
                </ul>
                <span>Database</span>
                <ul>
                  <li>Mongodb</li>
                </ul>
                <span>Auth</span>
                <ul>
                  <li>JWT</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='wcms__block is-bg'>
            <h2 className='wcms__block-title'>Functionalities</h2>
            <div className='wcms__points'>
              <div className='wcms__points-block'>
                <h3 className='wcms__points-title'>Data Visualization</h3>
                <div className='wcms__points-content'>
                  <div className='wcms__points-description'>
                    Visualize various kinds of information on <Link to='/'>W</Link> which is a virtual EC site.
                    <br />
                    Here are some examples.
                    <br />
                    <br />
                    <ul>
                      <li>User information</li>
                      <li>Sales Comparison</li>
                      <li>Product Reviews</li>
                      <li>Customer Satisfaction</li>
                    </ul>
                    <br />
                    Some of the graphs are clickable and will take you to a detailed page.
                  </div>
                  <div className='wcms__points-slider'>
                    <Swiper tag='section' wrapperTag='ul' slidesPerView={1} navigation pagination spaceBetween={0}>
                      {dataVisualizationImgs.map((Img) => {
                        return (
                          <SwiperSlide tag='li' key={uuidv4()}>
                            <div className='slider-bg' style={{ backgroundImage: `url(${Img})` }}></div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>

              <div className='wcms__points-block'>
                <h3 className='wcms__points-title'>Content Management</h3>
                <div className='wcms__points-content'>
                  <p className='wcms__points-description'>
                    You can add, edit, and delete products and categories that are reflected on <Link to='/'>W</Link>.
                    <br />
                    <br />
                    However, if you log in as a demo user, you can add products and categories, but you cannot edit or delete them.
                  </p>
                  <div className='wcms__points-slider'>
                    <Swiper tag='section' wrapperTag='ul' slidesPerView={1} navigation pagination spaceBetween={0}>
                      {contentManagementImgs.map((Img) => {
                        return (
                          <SwiperSlide tag='li' key={uuidv4()}>
                            <div className='slider-bg ' style={{ backgroundImage: `url(${Img})` }}></div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>

              <div className='wcms__points-block'>
                <h3 className='wcms__points-title'>Form Validation and Token Based Authorization</h3>
                <div className='wcms__points-content'>
                  <div className='wcms__points-description'>
                    The following pages are examples where form validation is implemented
                    <br />
                    <br />
                    <ul>
                      <li>Login / Signin</li>
                      <li>Adding product / category</li>
                      <li>Editing product / category</li>
                    </ul>
                  </div>
                  <div className='wcms__points-slider'>
                    <Swiper tag='section' wrapperTag='ul' slidesPerView={1} navigation pagination spaceBetween={0}>
                      {dataValidationImgs.map((Img) => {
                        return (
                          <SwiperSlide tag='li' key={uuidv4()}>
                            <div className='slider-bg' style={{ backgroundImage: `url(${Img})` }}></div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
                <div className='wcms__points-content'>
                  <p className='wcms__points-description'>
                    JWT is used for user authentication and authorization.
                    <br />
                    <br />
                    It allows only the master user to edit or delete products and categories.
                  </p>
                  <div className='wcms__points-images'>
                    <img src={BgValFour} alt='' />
                    <img src={BgValThree} alt='' />
                  </div>
                </div>
              </div>

              <div className='wcms__points-block'>
                <h3 className='wcms__points-title'>Others...</h3>
                <div className='wcms__points-content'>
                  <p className='wcms__points-description is-wide'>Authentication, sorting, pagination, searching, etc...</p>
                </div>
              </div>
            </div>
          </div>
          <div className='wcms__bottom'>
            <div className='wcms__bottom-buttons'>
              <a href='/' target='_blank' className='wcms__bottom-button'>
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default WCMS;
