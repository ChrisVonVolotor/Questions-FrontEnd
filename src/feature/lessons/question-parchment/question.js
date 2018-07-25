import React, {Component} from 'react';
import '../lesson.css';

class Question extends Component{

    componentDidMount() {
    }

    render(){
        return(
            <div className="float-right">
                <pre>
                    public class Hello{<br />
                    public static void main() {<br />
                    System.out.println("Hello World") <span id="place1" ondrop="drop(event)" ondragover="allowDrop(event)"class="place">&emsp;&emsp;</span> <br />
                    } <br />
                    }
                </pre>
            </div>
        )
    }


}

export default Question;
