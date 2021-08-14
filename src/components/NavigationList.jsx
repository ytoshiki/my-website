import { motion } from 'framer-motion';
import Jp from '../assets/jp.png';
import En from '../assets/en.png';

import { Link } from 'react-router-dom';

const NavigationList = () => {
  return (
    <>
      <motion.div
        className='navigation__logo'
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.4, delay: 0.3 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 20 }
        }}
      >
        <div className='navigation__lang'>
          <Link to='/jp' className='navigation__lang-icon is-jp'>
            <img src={Jp} alt='' />
            日本語
          </Link>
          <Link to='/' className='navigation__lang-icon is-en'>
            <img src={En} alt='' />
            English
          </Link>
        </div>
      </motion.div>
      <ul className='navigation__list'>
        <motion.li
          className='navigation__item'
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.4, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 20 }
          }}
        >
          <a href='#projects'>
            <span> {'<'} </span>
            Projects <span> {'/>'}</span>
          </a>
        </motion.li>

        <motion.li
          className='navigation__item'
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.4, delay: 0.7 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 20 }
          }}
        >
          <a href='https://www.linkedin.com/in/toshikiyoshioka' target='_blank' rel='noreferrer'>
            <span> {'<'}</span> About <span> {'/>'}</span>
          </a>
        </motion.li>
      </ul>
    </>
  );
};

export default NavigationList;
