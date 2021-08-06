import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Gender from './screens/gender';
import Home from './screens/home';

const App = (): React.ReactElement => (
  <Router>
    <Switch>
      <Route path="/gender">
        <Gender />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
