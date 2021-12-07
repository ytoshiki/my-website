import NavigationList from './NavigationList';
import '../styles/Navigation.scss';

const Navigation = ({lang}) => {
  return (
    <div className='l-container'>
      <nav className='navigation'>
        <NavigationList lang={lang}/>
      </nav>
    </div>
  );
};

export default Navigation;
