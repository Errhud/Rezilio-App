import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ContactList from "./components/ContactList";

const contacts = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];

class App extends Component {
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact Manager</h1>
        </header>

        <ContactList contacts={contacts} />
		<div className="buttons">
			<button className="ACButton" title="Add Contact" >Add Contact </button>
			<button className="GCButton" title="Gender Graph" >Gender Graph </button>
		</div>
      </div>
    );
  }
}
  


export default App;