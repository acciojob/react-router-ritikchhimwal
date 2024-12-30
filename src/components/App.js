
import './../styles/App.css';
import React from 'react';
import Home from './Home';
import About from './About';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};


export default App;
