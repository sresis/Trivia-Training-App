import { Col, Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import React, { Component, useState } from "react";
import { Route, Switch, BrowserRouter as Router, IndexRoute, Redirect, useHistory  } from 'react-router-dom'
import Questions from './Questions';
import './App.css';

function Home(props) {
  // update state to start trivia game
  const history = useHistory();
  const handleClick = () => {
    history.push(`/questions`);
  };

  return (
    <div className="home">
      <h1>Welcome to Trivia Training!</h1>
      <button className="start-trivia"
                id="home-but" 
              onClick={handleClick}> 
        Start Playing! 
      </button>
    </div>
      );
}

export default Home;