import React from 'react';
import logo from './logo.svg';
import './App.css';

const someVar = 'some value';
const someText = 'some text';
const isReact = true;

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
          Learn React
        </a>
        <h3 style={{fontSize: 50, color: 'red'}}>Title</h3>
        <div>{someVar}</div>
        <div>{123}</div>
        <div>{2 ** 8}</div>
        <div>{isReact && someText}</div>
        <div>{isReact ? someVar : someText}</div>
        <div>{isReact ? 'true' : 'false'}</div>
      </header>
    </div>
  );
}

export default App;
