import './App.css';
import Questions from './Questions';
import { Route, Switch, BrowserRouter as Router, IndexRoute, Redirect  } from 'react-router-dom'
import React, { Component, useState } from "react";

import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/questions" component={Questions}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  )
}

export default App;
