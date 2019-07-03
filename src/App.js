import React from 'react';
import './App.css';
import Logo from './Logo.png'
import TextInput from './TextInput'

class App extends React.Component {

  gotMessage = (m) => {
    var messages = [...this.state.messages, m]
    this.setState({ messages })
  }

  render() {
    var { messages } = this.state
    return (
      <div className="App">
        <header className="header">
          <img src={Logo} className="Logo" alt="" />
          Chatter
      </header>
        <main className="messages">
          {messages.map((m, i) => {
            return (<div key={i} className="bubble-wrap">
              <div className="bubble">
                <span>{m}</span>
              </div>
            </div>)
          })}
        </main>
        <TextInput sendMessage={this.gotMessage} />
      </div>
    );
  }
}
export default App;
