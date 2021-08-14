import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/header.scss';

const Header = ({ hasParent, lang }) => {
  const renderNavigation = hasParent ? (
    <Link to={lang ? lang : ''} className={`header-link ${lang && 'lang-jp'}`}>
      <img src='https://img.icons8.com/fluent-systems-regular/48/000000/back.png' alt='' />
      {lang ? '戻る' : 'Back'}
    </Link>
  ) : (
    <Navigation />
  );
  return <header style={{ position: 'relative' }}>{renderNavigation}</header>;
};

export default Header;
