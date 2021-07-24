import Home from './pages/Home';
import './App.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/:project' exact component={ProjectDetail} />
      </Switch>
    </Router>
  );
};

export default App;
