import NavigationList from './NavigationList';
import '../styles/Navigation.scss';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='l-container'>
        <NavigationList />
      </div>
    </nav>
  );
};

export default Navigation;
