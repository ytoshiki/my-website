import { motion } from 'framer-motion';
import Jp from '../assets/jp.png';
import En from '../assets/en.png';

import { Link } from 'react-router-dom';

const NavigationList = ({lang}) => {
  return (
    <>
      <div className='navigation__logo'>
        <Link to='/'>T.Y.</Link>
      </div>

      <ul className='navigation__list'>
        <li
          className='navigation__item'
          
        >
          <a href='#projects'>{lang == "jp" ? "制作物" : "Projects"}</a>
        </li>
        <li
          className='navigation__item'
          
        >
          <a href='#projects'>{lang == "jp" ? "ブログ" : "Blog"}</a>
        </li>
        <li
          className='navigation__item'
          
        >
          <a href='#projects'>{lang == "jp" ? "私について" : "About"}</a>
        </li>
   
      </ul> 

      <div className='navigation__lang' >
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
