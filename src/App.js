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
      <div className="">
          <div className="topbar">
            <Music/>
          </div>
          <div className="">
              <img className="bee" src={bee} alt="Logo" />
          <Header/>
          </div>
          <div className="container">
          <Main/>
          </div>

          <div className="shrub footer">

              <div className="footerText">
                <Footer/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
