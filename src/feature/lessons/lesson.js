import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../lesson.css';
import Parchment from "./question-parchment/parchment";

class Lesson extends Component{
    render(){
        return(
            <div>
                <Parchment/>
            </div>
        )
    }
}

export default Lesson;