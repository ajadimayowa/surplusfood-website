import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [hamburger, toggleHamburger] = useState(false)
  return (

    <div class="container">
      <Header />

      <h1>Welcome to Surplus Food</h1>

    </div>
  )
}

export default App;
