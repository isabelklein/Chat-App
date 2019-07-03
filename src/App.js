import React from 'react';
import './App.css';
import Logo from './Logo.png'
import TextInput from './TextInput'

class App extends React.Component {
  
  state={
    messages:[]
  }

  sendMessage = (m) => {
    var messages = [...this.state.messages, m]
    this.setState({messages})
  }

  render() {
    console.log(this.state.messages)
    return (
      <div className="App">
        <header className="header">
          <img src={Logo} className="Logo" alt="" />
          Chatter
      </header>
        <TextInput sendMessage={this.sendMessage} />
      </div>
    );
  }
}
export default App;
