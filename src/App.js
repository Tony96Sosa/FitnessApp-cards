import React from 'react';
import Exercises from './pages/Exercises';
import ExerciseNew from './pages/ExerciseNew';
import { BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Exercises} />
        <Route path='/new' component={ExerciseNew} />
      </Switch>
    </Router>
  );
}

export default App;
