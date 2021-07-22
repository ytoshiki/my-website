const NavigationItem = ({ item }) => {
  return (
    <li className='navigation__item'>
      <a href={item.href}>{item.text}</a>
    </li>
  );
};

export default NavigationItem;
