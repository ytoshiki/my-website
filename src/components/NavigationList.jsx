import NavigationItem from './NavigationItem';
import IconLinkedIn from '../assets/linkedIn.svg';
import IconGithub from '../assets/github.svg';

const NavigationList = () => {
  return (
    <ul className='navigation__list'>
      <li className='navigation__item'>
        <a href='https://github.com/ytoshiki' target='_blank' rel='noreferrer'>
          <span className='navigation__item-img'>
            <img src={IconGithub} alt='' />
          </span>
        </a>
      </li>
      <li className='navigation__item'>
        <a href='https://github.com/ytoshiki' target='_blank' rel='noreferrer'>
          <span className='navigation__item-img'>
            <img src={IconLinkedIn} alt='' />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default NavigationList;
