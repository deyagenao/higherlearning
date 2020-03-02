import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Apply from './pages/Apply';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav/>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
