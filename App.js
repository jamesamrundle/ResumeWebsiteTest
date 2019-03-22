import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
        <div className="App">
            <About />
        </div>
    );
  }
}

export default App;
