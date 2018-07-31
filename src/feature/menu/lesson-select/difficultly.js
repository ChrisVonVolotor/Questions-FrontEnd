import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Main from "../../../main";
import Lesson from "../../../feature/lessons/lesson"

class Difficulty extends Component{

    componentDidMount() {
    }
    loadEasy(){
        ReactDOM.render(<Lesson/>, document.getElementById("quiz"));
    }

    loadMedium(){
        ReactDOM.render(<Lesson/>, document.getElementById("quiz"));
    }

    loadHard(){
        ReactDOM.render(<Lesson/>, document.getElementById("quiz"));
    }



    render(){
        return(
            <div>
                <button className="" onClick={this.loadEasy()}>
                    Easy
                </button>
                <br/>
                <br/>
                <button className="btn btn-warning" onClick={this.loadMedium()}>
                    Medium
                </button>
                <br/>
                <br/>
                <button className="btn btn-danger" onClick={this.loadHard()}>
                    Hard
                </button>
                <br/>
                <br/>
                <button>
                        Back
                </button>
            </div>

        )
    }


}

export default Difficulty;
