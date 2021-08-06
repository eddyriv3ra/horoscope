import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './screens/home';

const App = (): React.ReactElement => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
    </Switch>
  </Router>
);

export default App;
