import ImgProjectOne from '../assets/img-project-02.png';
import ImgProjectTwo from '../assets/img-project-01.png';
import ImgProjectThree from '../assets/img-project-03.png';
import ImgProjectFour from '../assets/img-project-05.png';
import ImgReact from '../assets/react.png';
import ImgRedux from '../assets/redux.png';
import ImgTypescript from '../assets/typescript.png';
import ImgScss from '../assets/sass.png';
import ImgNode from '../assets/node-js.png';
import ImgExpress from '../assets/express.png';
import ImgMongo from '../assets/mongodb.png';
import ImgNext from '../assets/nextjs.png';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  return (
    <ul className='projects__list'>
      <li className='projects__item'>
        <div className='projects__item-img'>
          <img src={ImgProjectOne} alt='' />
        </div>
        <div className='projects__item-texts'>
          <h3 className='projects__item-title'>
            W <span>(content management system & data visualization)</span>
          </h3>
          <p className='projects__item-text'>A platform for automating data collection and reporting throughout teams, operations and supply chains.</p>
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
      </li>
      <li className='projects__item'>
        <div className='projects__item-img'>
          <img src={ImgProjectTwo} alt='' />
        </div>
        <div className='projects__item-texts'>
          <h3 className='projects__item-title'>
            W <span>(ecommerce site)</span>
          </h3>
          <p className='projects__item-text'>A platform for automating data collection and reporting throughout teams, operations and supply chains.</p>
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
          <button className='projects__button'>Learn More</button>
        </div>
      </li>
      <li className='projects__item'>
        <div className='projects__item-img'>
          <img src={ImgProjectThree} alt='' />
        </div>
        <div className='projects__item-texts'>
          <h3 className='projects__item-title'>Wordbook D</h3>
          <p className='projects__item-text'>A platform for English learners where people can search for a word, make their own word book, and test their vocab.</p>
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
          <button className='projects__button'>Learn More</button>
        </div>
      </li>
      <li className='projects__item'>
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
                  <img src={ImgReact} alt='' />
                </span>
              </li>
              <li>
                <span>
                  <img src={ImgNext} alt='' />
                </span>
              </li>
              <li>
                <span>
                  <img src={ImgScss} alt='' />
                </span>
              </li>
            </ul>
          </div>
          <button className='projects__button'>Learn More</button>
        </div>
      </li>
    </ul>
  );
};

export default ProjectList;
