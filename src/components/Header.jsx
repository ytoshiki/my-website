import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/header.scss';

const Header = ({ hasParent }) => {
  const renderNavigation = hasParent ? (
    <Link to='/' className='header-link'>
      <img src='https://img.icons8.com/fluent-systems-regular/48/000000/back.png' alt='' /> Back
    </Link>
  ) : (
    <Navigation />
  );
  return <header style={{ position: 'relative' }}>{renderNavigation}</header>;
};

export default Header;
