import Home from './pages/Home';
import './App.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import WCMS from './components/projects/W-CMS';
import WEC from './pages/projects/WEC';
import WordBook from './pages/projects/WordBook';
import Connect from './pages/projects/Connect';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/w-cms' component={WCMS} />
        <Route path='/w-ec' component={WEC} />
        <Route path='/wb-d' component={WordBook} />
        <Route path='/the-connect' component={Connect} />
      </Switch>
    </Router>
  );
};

export default App;
