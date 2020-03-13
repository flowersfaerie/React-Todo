import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks
    }
  }

  toggleDone = taskId => {
    console.log("sf: App.js: App: toggleDone: taskId: ", taskId);
    this.setState({
      task: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  addTask = taskName => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          name: taskName,
          completed: false,
          id: (Math.random() * Math.random()).toString(9).substr(2,9)
        }
      ]
    });
  };

  clearCompleted = () => {
    console.log("sf: App.js: App: clearCompleted");
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
