import React from 'react';
import Exercises from './pages/Exercises';
import ExerciseNewContainer from './pages/ExerciseNewContainer/ExerciseNewContainer';
import notfound from './pages/Error/404';
import Home from './pages/Home/Home';
import { BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/exercises' component={Exercises} />
        <Route path='/new' component={ExerciseNewContainer} />
        <Route component={notfound} />
      </Switch>
    </Router>
  );
}

export default App;
