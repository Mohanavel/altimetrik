import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Components";
import {ReactRouter} from "./Router";

function App() {
  return (
    <div className="App container-fluid">
      <Header/>
      <ReactRouter />
    </div>
  );
}

export default App;
