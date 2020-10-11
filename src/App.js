import React from 'react';
import Exercises from './pages/Exercises';
import ExerciseNewContainer from './pages/ExerciseNewContainer';
import notfound from './pages/404';
import { BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Exercises} />
        <Route path='/new' component={ExerciseNewContainer} />
        <Route component={notfound} />
      </Switch>
    </Router>
  );
}

export default App;
