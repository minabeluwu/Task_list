import React, { Component } from "react"
import "./App.css"

class App extends Component {
  state = {
    input: "",
    todos: ["ejemplo1", "ejemplo2"],
  }

  handleClick = (index) => {
    const newToDo = this.state.todos.filter((todo, idx) => {
      return idx !== index
    })
    this.setState({ todos: newToDo })
  }
  handleSubmmit = (e) => {
    e.preventDefault()
    const { input, todos } = this.state
    const newToDo = todos.concat(input)

    this.setState({
      todos: newToDo,
    })
  }

  render() {
    const todoListElements = this.state.todos.map((item, index) => {
      return (
        <li
          onClick={() => this.handleClick(index)}
          key={index}
          className="list-item"
        >
          {item}
        </li>
      )
    })
    return (
      <div className="content">
        <div className="container">
          <h1 className="title">Task List</h1>

          <form onSubmit={this.handleSubmmit}>
            <input
              onChange={(e) => {
                const { value } = e.target
                this.setState({
                  input: value,
                })
              }}
              className="input"
            />
          </form>
          <ul className="list">{todoListElements}</ul>
        </div>

        <img
          src="https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="flower"
        />
      </div>
    )
  }
}

export default App
