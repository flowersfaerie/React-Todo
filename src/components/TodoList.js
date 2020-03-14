// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Task from './Todo';

const TodoList = props => {
    return (
        <div className="task-list">
            {props.tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    toggleDone={props.toggleDone}
                />
            ))}
            <br />
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;