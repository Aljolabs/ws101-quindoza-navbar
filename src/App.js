// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import vinto from './logo-bike3.png';

function App() {
  return (
    <Router>
      <div className="landing-page">
        <header className="header">
          <Link to="/" className="logo"><img src={vinto} alt="Logo" className="app-logo" /></Link>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link> 
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <p>© Developed by Mark Aljo Quindoza. All Rights Reserved 2024.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
