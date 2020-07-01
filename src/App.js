//Author : Éric-Hudon-Bujold
//Date: 07/01/2020

import React, { Component } from "react";
import "./App.css";

import Contact from "./components/Contact";

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