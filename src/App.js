import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Questionnaire from './component/Questionnaire';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Container>
        <h1>Petit questionnaire amusant pour une femme charmante</h1>
        <Row>
          <Col></Col>
          <Col xs={6}><Questionnaire /></Col>
          <Col></Col>
        </Row>
      </Container>
      <p></p>
      <p>@ ta famille qui t'aime - 2023</p>
    </div>
  );
}

export default App;
