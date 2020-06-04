import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import { Container, Row } from 'react-bootstrap'
import fantasy from "./data/fantasy.json"



function App() {
  return (
    <div className="App">
      <BookList books={fantasy} />
    </div>
  );
}

export default App;
