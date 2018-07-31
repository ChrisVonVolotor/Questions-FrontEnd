import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Parchment from "./question-parchment/parchment";

class Lesson extends Component{

    render(){
        return(
            <div className="container center">
                <Parchment/>
            </div>
        )
    }
}

export default Lesson;