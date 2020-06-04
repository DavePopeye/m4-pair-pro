import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook';
import { Container, Row } from 'react-bootstrap'
import fantasy from "./data/fantasy.json"



function App() {
  return (
    <div className="App">
      <MyBadge />
      <Container fluid>
        <Row>
          <SingleBook books={fantasy} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
