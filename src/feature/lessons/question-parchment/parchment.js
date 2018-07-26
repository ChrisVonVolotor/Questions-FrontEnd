import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../lesson.css';
import QuestionSolver from './quesion-solve';
import QuestionTitle from "./question-title";
import QuestionDescription from "./question-description";

class Parchment extends Component{
    render(){
        return(
            <div>
                <QuestionTitle/>
                <QuestionDescription/>
                <QuestionSolver/>
            </div>
        )
    }
}

export default Parchment;