import React, { Component } from "react"
import "./App.css"

class App extends Component {
  state = {
    input: "",
    todos: ["ejemplo1", "ejemplo2"],
  }

  //borrar todos
  handleClick = (index) => {
    const newToDo = this.state.todos.filter((todo, idx) => {
      return idx !== index
    })
    this.setState({ todos: newToDo })
  }

  // Metodo para imprimir los todos
  handleSubmmit = (e) => {
    e.preventDefault()
    e.target.reset()
    const { input, todos } = this.state
    const newToDo = todos.concat(input)

    this.setState({
      todos: newToDo,
    })
  }

  render() {
    const todoListElements = this.state.todos.map((item, index) => {
      return (
        <div className="list-container">
          <div className="box">
            <div className="list-star"></div>
            <li
              onClick={() => this.handleClick(index)}
              key={index}
              className="list-item"
            >
              {item}
            </li>
          </div>

          <input
            type="checkbox"
            id="cbox1"
            value="first_checkbox"
            className="list-checkbox"
          />
        </div>
      )
    })
    return (
      <div className="content">
        <div className="container">
          <div className="title-img"></div>
          <p className="paragraph">Escribe tu tarea acá</p>
          <form onSubmit={this.handleSubmmit.bind(this)} className="form">
            <input
              onChange={(e) => {
                const { value } = e.target
                this.setState({
                  input: value,
                })
              }}
              required
              className="form-input"
            />
            <button
              type="submit"
              onClick={() => this.addItem}
              className="form-button"
            >
              Crear tarea
            </button>
          </form>
          <ul className="list">{todoListElements} </ul>
        </div>
      </div>
    )
  }
}

export default App
