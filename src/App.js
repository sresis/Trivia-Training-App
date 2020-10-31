import './App.css';
import Questions from './Questions';
import { Route, Switch, BrowserRouter as Router, IndexRoute, Redirect  } from 'react-router-dom'
import React, { Component, useState } from "react";

import Home from './Home';

function App() {
  return (
    <React.Fragment>
      <div className="title container-fluid"><h3>Trivia Training 💪</h3></div>
      <div className="footer container-fluid">
        <p className="center">💡 | 
        <i className="fas fa-envelope-square padding"></i> Stephanie Resis | 
        <a href="https://www.linkedin.com/in/stephanie-resis/"><i className="fab fa-linkedin padding"></i> LinkedIn </a>
        </p>
      </div>
      <Router>
      <Switch>
        <Route path="/questions" component={Questions}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
      
    
    </React.Fragment>
    
  )
}

export default App;
