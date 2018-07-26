import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Lesson from "./feature/lessons/lesson";


class Main extends Component{
    loadLesson(){
        ReactDOM.render(<Lesson/>, document.getElementById("quiz"));
    }

    render(){
        return (<div id="quiz">
            <button onClick={this.loadLesson}>Game</button>
        </div>)
    }
}

export default Main