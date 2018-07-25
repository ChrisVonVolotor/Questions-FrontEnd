import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../lesson.css';
import Sidebar from './question-parchment/sidebar';
import Title from "./title";
import Question from "./question";

class Parchment extends Component{
    render(){
        return(
            <div>
                <Title/>
                <Sidebar/>
                <Question/>
            </div>
        )
    }
}

export default Parchment;