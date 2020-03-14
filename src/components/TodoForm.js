import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ""
        };
    }

    handleChanges = e => {
        this.setState({ taskName: e.target.value });
    };

    handleAddTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskName);
        this.setState({
            taskName: ""
        })
    };

    render() {
        console.log("sf: TodoForm.js: render: rendering form");
        return (
            <form onSubmit={this.handleAddTask}>
                <input
                    type="text"
                    name="task"
                    value={this.state.taskName}
                    onChange={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;