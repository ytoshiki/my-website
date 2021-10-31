import TopImage from '../../assets/img-main.png';
import ImgJs from '../../assets/js.png';
import { motion } from 'framer-motion';

import '../../styles/Top.scss';

const TopJP = () => {
  return (
    <div className='l-container'>
      <div className='top-wrapper'>
        <div className='top'>
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
              Toshiki Yoshioka
              <br /> Junior front-end developer
              <br />
              Based in Nagoya, Japan
              <br />
              Looking for a new opportunity
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
            ></motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopJP;
