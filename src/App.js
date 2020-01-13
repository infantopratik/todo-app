import React from "react";
import "./App.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          text: "Wash the car",
          isCompleted: false
        },
        {
          text: "Clean the room",
          isCompleted: false
        },
        {
          text: "Take Milo for a walk",
          isCompleted: false
        }
      ],
      newTodo: ""
    };
  }

  updateNewTodo = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  addNewTodo = () => {
    const todos = this.state.todos;
    todos.push({ text: this.state.newTodo, isCompleted: false });
    this.setState({
      todos,
      newTodo: ""
    });
  };

  render() {
    return (
      <div className="App">
        <p onClick={() => console.log("Test")}>Todo App</p>
        <ul>
          {this.state.todos.map(todo => (
            <li>{todo.text}</li>
          ))}
        </ul>
        <input onChange={this.updateNewTodo} value={this.state.newTodo} />
        <button onClick={this.addNewTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodoApp;
