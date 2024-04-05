import React from 'react';
import '../todo/Todolist.css';

class AddTaskList extends React.Component {
    state = {
        name: ''
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value });
    }
    handleAddTask = (e) => {
        let task = {
            id: Math.floor(Math.random() * 1000) + 1,
            name: this.state.name
        };
        this.props.addNewTask(task);
        this.setState({
            name: ''
        })
    }

    render() {
        const { name } = this.state;
        return (
            <div className="add-to-do">
                <input type="text" value={name} onChange={this.handleChangeName} />
                <button className='btn-task' onClick={this.handleAddTask}>Add Task</button>
            </div>
        );
    }
}

export default AddTaskList;