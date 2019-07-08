import React from 'react';
import './App.css';
import Logo from './Logo.png'
import TextInput from './TextInput'
import NamePicker from './NamePicker'

class App extends React.Component {

  state = {
    messages: [],
    name: '',
    editName: false,
  }

  gotMessage = (text) => {
    var newMessagesArray = [...this.state.messages, text]
    this.setState({ messages: newMessagesArray })
  }

  render() {
    var { messages } = this.state
    return (
      <div className="App">
        <header className="header">
          <img src={Logo} className="Logo" alt="" />
          Chatter
          <NamePicker
            name={this.state.name}
            editName={this.state.editName}
            changeName={name => this.setState({ name })}
            setEditName={editName => this.setState({ editName })}
          />
        </header>
        <main className="messages">
          {messages.map((m, i) => {
            return (<div key={i} className="bubble-wrap">
              <div className="bubble-name">
                <span>{this.state.name}</span>
              </div>
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
