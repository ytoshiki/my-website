import { motion } from 'framer-motion';
import Jp from '../assets/jp.png';
import En from '../assets/en.png';
import { Link as Scroll } from 'react-scroll';

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
          <div className='navigation__lang-icon is-jp'>
            <img src={Jp} alt='' />
            日本語
          </div>
          <div className='navigation__lang-icon is-en'>
            <img src={En} alt='' />
            English
          </div>
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
          <Scroll to='projects' spy={true} smooth={true} duration={500}>
            <span> {'<'}</span>
            Projects <span> {'/>'}</span>
          </Scroll>
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
