import React, {Component} from 'react';
import '../lesson.css';
class QuestionSolver extends Component {

    state = {
        tasks: [
            {name:"Yip Yip",category:"Answers", bgcolor: "yellow"},
            {name:"Woof", category:"Answers", bgcolor:"pink"},
            {name:"Meow", category:"Answers", bgcolor:"skyblue"}
        ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        let tasks = this.state.tasks.filter((task) => {
            if (task.name == id) {
                task.category = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }

    render() {


        var tasks = {
            Answers: [],
            Solution: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <span key={t.name}
                     onDragStart = {(e) => this.onDragStart(e, t.name)}
                     draggable
                     className="drag"
                    // style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </span>
            );
        });

        return (
            <div className="row">
                <div className="container-drag col-3 border-warning">
                    <div className=""
                         onDragOver={(e)=>this.onDragOver(e)}
                         onDrop={(e)=>{this.onDrop(e, "Answers")}}>
                        <span className="task-header">Answers</span>
                        {tasks.Answers}
                    </div>
                   <div className="questions col-lg-9">
                       <p>
                       The answer is of course, <span className="place"
                         onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>this.onDrop(e, "Solution")}>&emsp;&emsp;</span>
                        {tasks.Solution} so easy!
                       </p>
                   </div>
            </div>


            </div>
        );
    }

}

export default QuestionSolver;
