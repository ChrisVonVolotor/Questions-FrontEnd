import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./main";
import Header from "./feature/shell/header";
import Footer from "./feature/shell/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          <Footer/>
      </div>
    );
  }
}

export default App;
