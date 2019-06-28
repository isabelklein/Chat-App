import React from 'react';
import './App.css';
import Logo from './Logo.png'
import TextInput from './TextInput'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={Logo} className="Logo" alt=""/>
        Chatter
      </header>
      <div className="ChatLeft">
          Hey! How are you?
      </div>
      <div className="ChatRight">
        Hi! Nice to hear from you! I'm great! hbu?
      </div>
      <TextInput />
    </div> 
  );
}

export default App;
