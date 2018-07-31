import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Difficulty from "./feature/menu/lesson-select/difficultly";
import About from "./feature/menu/about/about";


class Main extends Component{


    loadDifficulty(){
        ReactDOM.render(<Difficulty/>, document.getElementById("quiz"));
    }

    loadAbout(){
        ReactDOM.render(<About/>, document.getElementById("quiz"));
    }

    render(){
        return (<div className="center" id="quiz">

            <button onClick={this.loadDifficulty} className="">Start Lesson</button>
            <br/><br/>
            <button onClick={this.loadAbout} className="">About Us</button>

        </div>)
    }
}

export default Main