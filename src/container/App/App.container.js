import React from 'react';
// ? style
import { Button } from 'antd';
import logo from '../../shared/media/logo.svg';
import './App.style.css';
import 'antd/dist/antd.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        aprendiendo react wiiii
        </a>
        <Button>Click aqui</Button>
      </header>
    </div>
  );
}

export default App;
