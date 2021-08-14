import ImgProjectOne from '../../assets/img-project-02.png';
import ImgProjectTwo from '../../assets/img-project-01.png';
import ImgProjectThree from '../../assets/img-project-03.png';
import ImgProjectFour from '../../assets/img-project-05.png';
import ImgReact from '../../assets/react.png';
import ImgRedux from '../../assets/redux.png';
import ImgTypescript from '../../assets/typescript.png';
import ImgScss from '../../assets/sass.png';
import ImgCss from '../../assets/css.png';
import ImgNode from '../../assets/node-js.png';
import ImgExpress from '../../assets/express.png';
import ImgMongo from '../../assets/mongodb.png';
import ImgNext from '../../assets/nextjs.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import InView from 'react-intersection-observer';

const ProjectListJP = () => {
  return (
    <ul className='projects__list'>
      <li className='projects__item'>
        <InView threshold={0.5} triggerOnce>
          {({ ref, inView }) => (
            <motion.div className='projects__item-inner' ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6 }}>
              <div className='projects__item-img'>
                <img src={ImgProjectOne} alt='' />
              </div>
              <div className='projects__item-texts'>
                <h3 className='projects__item-title'>
                  W <span>(コンテンツ管理/データのグラフ化)</span>
                </h3>
                <p className='projects__item-text'>
                  <Link to='/'>W(ECサイト)</Link>のコンテンツ管理、及び利用者・商品・売り上げのデータ化。
                </p>
                <div className='projects__item-option'>
                  <span className='projects__item-text is-sm'>
                    <span>テクノロジー</span>
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
                <Link className='projects__button' to='/jp/w-cms'>
                  もっと見る
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
                <img src={ImgProjectTwo} alt='' />
              </div>
              <div className='projects__item-texts'>
                <h3 className='projects__item-title'>
                  W <span>(ECサイト)</span>
                </h3>
                <p className='projects__item-text'>
                  ECサイト。カテゴリー及び商品は別アプリ<Link to='/'>(W)</Link>からAPIで登録・所得が可能。
                </p>
                <div className='projects__item-option'>
                  <span className='projects__item-text is-sm'>
                    <span>テクノロジー</span>
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
                <Link className='projects__button' to='/jp/w-ec'>
                  もっと見る
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
                <p className='projects__item-text'>英語学習者向けのアプリ。単語の意味・画像の検索が可能。単語帳を作ってテストができる。</p>
                <div className='projects__item-option'>
                  <span className='projects__item-text is-sm'>
                    <span>テクノロジー</span>
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
                <Link className='projects__button' to='/jp/wb-d'>
                  もっと見る
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
                <p className='projects__item-text'>世界中のニュースを集めたアプリ。カテゴリー、言語、キーワードで検索が可能。</p>
                <div className='projects__item-option'>
                  <span className='projects__item-text is-sm'>
                    <span>テクノロジー</span>
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
                <Link className='projects__button' to='/jp/the-connect'>
                  もっと見る
                </Link>
              </div>
            </motion.div>
          )}
        </InView>
      </li>
    </ul>
  );
};

export default ProjectListJP;
