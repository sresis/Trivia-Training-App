import './App.css';
import Questions from './Questions';
import { Router, Route, browserHistory, IndexRoute, Redirect  } from 'react-router'
import { Container, Row, Col, ListGroup, Button, Modal } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Button>Play Game</Button>
      < Questions/>
    </div>
  );
}

export default App;
