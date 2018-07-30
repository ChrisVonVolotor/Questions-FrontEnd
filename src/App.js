import React, { Component } from 'react';
import './App.css';
import Main from "./main";
import Header from "./feature/shell/header";
import Footer from "./feature/shell/footer";
import bee from "./bee.png";
import Music from "./feature/media/music";
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {


 render() {

    return (
      <div className="App col-10">
          <Music/>
          <div className="col-md-8">
              <img className="bee" src={bee} alt="Logo" />
          <Header/>
          </div>
          <div className="col-md-8">
          <Main/>
          </div>
          <div className="footer col-md-8">
          <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
