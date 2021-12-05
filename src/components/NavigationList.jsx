import { motion } from 'framer-motion';
import Jp from '../assets/jp.png';
import En from '../assets/en.png';

import { Link } from 'react-router-dom';

const NavigationList = () => {
  return (
    <>
      <motion.div className='navigation__logo'>
        <Link to='/'>T.Y.</Link>
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
          <a href='#projects'>Projects</a>
        </motion.li>
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
          <a href='#projects'>Blog</a>
        </motion.li>
   
      </ul> 

      <div className='navigation__lang'>
        <Link to='/jp' className='navigation__lang-icon is-jp'>
          <img src={Jp} alt='' />
        </Link>
        <Link to='/' className='navigation__lang-icon is-en'>
          <img src={En} alt='' />
        </Link>
      </div>
    </>
  );
};

export default NavigationList;
