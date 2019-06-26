import React from 'react';
import logo from './logo.svg';
import './App.css';
import UWHuskies from './UWHuskies.png'
import TextInput from './TextInput'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={UWHuskies} className="UwHuskies" alt=""/>
        MyApp
      </header>
      <TextInput />
    </div> 
  );
}

export default App;
