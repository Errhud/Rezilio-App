import React, { Component } from "react";
import "./App.css";

import Contact from "./components/Contact";

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
          <h1 className="App-title">Contact Manager</h1>
        </header>
		<div>
			<Contact />
		</div>

      </div>
    );
  }
}
  


export default App;