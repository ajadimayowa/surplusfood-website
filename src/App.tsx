import React from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container fluid className='bg-primary "min-vh-100"'>
        <Row className='justify-content-center'>
          <h1>Welcome To Surplus Food</h1>
        </Row>
      </Container>
    </div>
  );
}

export default App;
