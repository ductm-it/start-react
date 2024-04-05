import React, {Component} from "react";
import AddTaskList from "../todo/AddTaskList";
class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: [
				{'id':"1",'name':"todo-list-1"},
				{'id':"2",'name':"todo-list-2"},
				{'id':"3",'name':"todo-list-3"},
			]
		};
	}
	addNewTask = (todo) => {
		this.setState({
			tasks: [...this.state.tasks, todo],
		})
	}
	handleDeleteTask = (todo) => {
		let currentTask = this.state.tasks;
		currentTask = currentTask.filter(item => item.id !== todo.id);
		this.setState({
			tasks: currentTask,
		});
	}
	handleEditTask = (todo) => {
		let currentTask = this.state.tasks;
		currentTask = currentTask.map(item => {
			if(item.id === todo.id){
				item.name = 'Edited';
			}
			return item;
		});
		this.setState({
			tasks: currentTask,
		});
	}
	render(){
		let {tasks} = this.state;
		return (
			<div className="to-do-container">
				<AddTaskList addNewTask = {this.addNewTask}/>
				
				<div className="list-to-do">
					{tasks.map((item, index) => {
						return (
							<div key={item.id} className="list-item">
								<span>{item.id} - {item.name}</span>
								<button onClick={()=>this.handleEditTask(item)}>Edit</button>
								<button onClick={()=>this.handleDeleteTask(item)}>Delete</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default TodoList; 