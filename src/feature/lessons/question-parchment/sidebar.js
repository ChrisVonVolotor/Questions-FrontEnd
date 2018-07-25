import React, {Component} from 'react';
import '../lesson.css';

class Sidebar extends Component{

    componentDidMount() {
    }

    render(){
        return(
            <div className="float-sm-left">
                <div id="drag1" draggable="true" onDragStart="drag(event)" className="drag">
                    }
                </div>
                <div id="drag2" draggable="true" onDragStart="drag(event)" className="drag">
                    :
                </div>
                <div id="drag3" draggable="true" onDragStart="drag(event)" className="drag">
                    ;
                </div>
                <div id="drag4" draggable="true" onDragStart="drag(event)" className="drag">
                    #
                </div>
            </div>
        )
    }


}

export default Sidebar;
