import ImgProjectOne from '../assets/img-project-02.png';
import ImgProjectTwo from '../assets/img-project-01.png';
import ImgProjectThree from '../assets/img-project-03.png';
import ImgProjectFour from '../assets/img-project-05.png';
import ImgReact from '../assets/react.png';
import ImgRedux from '../assets/redux.png';
import ImgTypescript from '../assets/typescript.png';
import ImgScss from '../assets/sass.png';
import ImgCss from '../assets/css.png';
import ImgNode from '../assets/node-js.png';
import ImgExpress from '../assets/express.png';
import ImgMongo from '../assets/mongodb.png';
import ImgNext from '../assets/nextjs.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import InView from 'react-intersection-observer';

const ProjectList = () => {
  return (
    <ul className='projects__list'>
      <li className='projects__item' id='w-cms'>
        <InView threshold={0.5} triggerOnce>
          {({ ref, inView }) => (
            <motion.div className='projects__item-inner' ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6 }}>
              <div className='projects__item-img'>
                <img src={ImgProjectOne} alt='' />
              </div>
              <div className='projects__item-texts'>
                <h3 className='projects__item-title'>
                  W <span>(content management system & data visualization)</span>
                </h3>
                <p className='projects__item-text'>
                  A content management system that allows you to add and edit products and categories for <a href='#w-ec'>W</a> (e-commerce site).
                </p>
                <div className='projects__item-option'>
                  <span className='projects__item-text is-sm'>
                    <span>Technologies</span>
                  </span>
                  <ul className='projects__item-list'>
                    <li>
                      <span>
                        <img src={ImgReact} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgRedux} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgTypescript} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgScss} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgNode} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgExpress} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgMongo} alt='' />
                      </span>
                    </li>
                  </ul>
                </div>
                <Link className='projects__button' to='/w-cms'>
                  Learn More
                </Link>
              </div>
            </motion.div>
          )}
        </InView>
      </li>
      <li className='projects__item' id='w-ec'>
        <InView threshold={0.5} triggerOnce>
          {({ ref, inView }) => (
            <motion.div className='projects__item-inner' ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6 }}>
              <div className='projects__item-img'>
                <img src={ImgProjectTwo} alt='' />
              </div>
              <div className='projects__item-texts'>
                <h3 className='projects__item-title'>
                  W <span>(ecommerce site)</span>
                </h3>
                <p className='projects__item-text'>
                  Virtual e-commerce site. Products and categories are managed on <a href='#w-cms'>W</a>.
                </p>
                <div className='projects__item-option'>
                  <span className='projects__item-text is-sm'>
                    <span>Technologies</span>
                  </span>
                  <ul className='projects__item-list'>
                    <li>
                      <span>
                        <img src={ImgReact} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgRedux} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgTypescript} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgScss} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgNode} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgExpress} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgMongo} alt='' />
                      </span>
                    </li>
                  </ul>
                </div>
                <Link className='projects__button' to='/w-ec'>
                  Learn More
                </Link>
              </div>
            </motion.div>
          )}
        </InView>
      </li>
      <li className='projects__item'>
        <InView threshold={0.5} triggerOnce>
          {({ ref, inView }) => (
            <motion.div className='projects__item-inner' ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6 }}>
              <div className='projects__item-img'>
                <img src={ImgProjectThree} alt='' />
              </div>
              <div className='projects__item-texts'>
                <h3 className='projects__item-title'>Wordbook D</h3>
                <p className='projects__item-text'>A platform for English learners where people can search for a word, make their own word book, and test their vocabulary.</p>
                <div className='projects__item-option'>
                  <span className='projects__item-text is-sm'>
                    <span>Technologies</span>
                  </span>
                  <ul className='projects__item-list'>
                    <li>
                      <span>
                        <img src={ImgReact} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgRedux} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgTypescript} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgScss} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgNode} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgExpress} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgMongo} alt='' />
                      </span>
                    </li>
                  </ul>
                </div>
                <Link className='projects__button' to='/wb-d'>
                  Learn More
                </Link>
              </div>
            </motion.div>
          )}
        </InView>
      </li>
      <li className='projects__item'>
        <InView threshold={0.5} triggerOnce>
          {({ ref, inView }) => (
            <motion.div className='projects__item-inner' ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6 }}>
              <div className='projects__item-img'>
                <img src={ImgProjectFour} alt='' />
              </div>
              <div className='projects__item-texts'>
                <h3 className='projects__item-title'>THE CONNECT</h3>
                <p className='projects__item-text'>A platform where people can search for worldwide articles by selecting categories, languages, or keywords.</p>
                <div className='projects__item-option'>
                  <span className='projects__item-text is-sm'>
                    <span>Technologies</span>
                  </span>
                  <ul className='projects__item-list'>
                    <li>
                      <span>
                        <img src={ImgTypescript} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgNext} alt='' />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src={ImgCss} alt='' />
                      </span>
                    </li>
                  </ul>
                </div>
                <Link className='projects__button' to='/the-connect'>
                  Learn More
                </Link>
              </div>
            </motion.div>
          )}
        </InView>
      </li>
    </ul>
  );
};

export default ProjectList;
