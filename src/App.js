import React from 'react';
import './App.css';
import Logo from './Logo.png'
import TextInput from './TextInput'
import NamePicker from './NamePicker'
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"
import Camera from 'react-snap-pic'

class App extends React.Component {

  state = {
    messages: [],
    name: '',
    editName: false,
    showCamera: false
  }

  componentWillMount() {
    var name = localStorage.getItem('name')
    if (name) {
      this.setState({ name })
    }

    /* <=========================> */
    firebase.initializeApp({
      apiKey: "AIzaSyBJZer5kAE4Rg1n0WlZN0vZdZp4HzXu_hM",
      authDomain: "chat-app-76f1c.firebaseapp.com",
      projectId: "chat-app-76f1c",
      storageBucket: "chat-app-76f1c.appspot.com",
    });

    this.db = firebase.firestore();

    this.db.collection("messages").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          //console.log(change.doc.data())
          this.receive(change.doc.data())
        }
      })
    })
    /* <=========================> */
  }
  receive = (m) => {
    const messages = [m, ...this.state.messages]
    messages.sort((a, b) => b.ts - a.ts)
    this.setState({ messages })
  }

  send = (m) => {
    this.db.collection("messages").add({
      ...m,
      from: this.state.name || 'No name',
      ts: Date.now()
    })
  }

  /* <===========================> */

  gotMessage = (text) => {
    var message = {
      text,
      from: this.state.name
    }
    var newMessagesArray = [...this.state.messages, message]
    this.setState({ messages: newMessagesArray })
  }

  setEditName = (editName) => {
    if (!editName) {
      localStorage.setItem('name', this.state.name)
    }
    this.setState({ editName })
  }

  render() {
    var { editName, messages, name } = this.state
    return (
      <div className="App">
        <header className="header">
          <div className="logoHeader">
            <img src={Logo} className="Logo" alt="" />
            Chatter</div>
          <NamePicker
            name={this.state.name}
            editName={this.state.editName}
            changeName={name => this.setState({ name })}
            setEditName={this.setEditName}
          />
        </header>
        <main className="messages">
          {messages.map((m, i) => {
            return <Message key={i} m={m} name={name} />
          })}
        </main>
        <TextInput sendMessage={text => this.send({ text })}
          showCamera={() => this.setState({ showCamera: true })} />
        {this.state.showCamera && <Camera takePicture={this.takePicture} />}
      </div>
    );
  }
  takePicture = (img) => {
    console.log(img)
    this.setState({ showCamera: false })
  }
}

export default App;

function Message(props) {
  var { m, name } = props
  return (<div className="bubble-wrap"
    from={m.from === name ? "me" : "you"}
  >
    {m.from !== name && <div className="bubble-name">{m.from} </div>}
    <div className="bubble">
      <span>{m.text}</span>
    </div>
  </div>)
}
