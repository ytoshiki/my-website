import Home from './pages/Home';
import './App.scss';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import WCMS from './components/projects/W-CMS';
import WEC from './pages/projects/WEC';
import WordBook from './pages/projects/WordBook';
import Connect from './pages/projects/Connect';
import HomeJP from './pages/jp/HomeJP';
import WCMSJP from './components/jp/W-CMSJP';
import WECJP from './pages/projects/WECJP';
import WordBookJP from './pages/projects/WordBookJP';
import ConnectJP from './pages/projects/ConnectJP';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact component={Home} />
        <Route path='/w-cms' component={WCMS} />
        <Route path='/w-ec' component={WEC} />
        <Route path='/wb-d' component={WordBook} />
        <Route path='/the-connect' component={Connect} />
        <Route path='/jp' exact component={HomeJP} />
        <Route path='/jp/w-cms' component={WCMSJP} />
        <Route path='/jp/w-ec' component={WECJP} />
        <Route path='/jp/wb-d' component={WordBookJP} />
        <Route path='/jp/the-connect' component={ConnectJP} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
