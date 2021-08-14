import TopImage from '../../assets/img-main.png';
import ImgJs from '../../assets/js.png';
import { motion } from 'framer-motion';

import '../../styles/Top.scss';

const TopJP = () => {
  return (
    <div className='l-container'>
      <div className='top'>
        <div className='top__right'>
          <motion.div
            className='top__image'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.8,
                  duration: 0.7
                }
              }
            }}
          >
            <img src={TopImage} alt='' />
          </motion.div>
        </div>
        <div className='top__left'>
          <motion.h1
            className='top__name'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                y: 20,
                opacity: 0
              },
              visible: {
                y: 0,
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1.4,
                  duration: 0.4
                }
              }
            }}
          >
            こんにちは。初めまして。
            <br></br>
            吉岡寿輝です。
          </motion.h1>
          <motion.p
            className='top__title'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                y: 20,
                opacity: 0
              },
              visible: {
                y: 0,
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1.6,
                  duration: 0.4
                }
              }
            }}
          >
            名古屋でフロントエンドエンジニアをしています。ウェブ開発は仕事と趣味です。
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default TopJP;
