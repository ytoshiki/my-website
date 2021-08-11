import NavigationList from './NavigationList';
import '../styles/Navigation.scss';

const Navigation = () => {
  return (
    <div className='l-container'>
      <nav className='navigation'>
        <NavigationList />
      </nav>
    </div>
  );
};

export default Navigation;
