import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import {v4 as uuid} from "uuid"

class App extends React.Component {
  state = {
    texts: [],
    id: 0,
    title: "",
    editItem: false
  }

  handleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const newText = {
      id: uuid(),
      title: this.state.title
    }

    const updatedText = [...this.state.texts, newText];

    this.setState({
      texts: updatedText,
      id: uuid(),
      title: "",
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      texts: []
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-center text-capitalize">Todo App</h3>
            <TodoInput 
              title={this.state.title} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList 
              texts={this.state.texts} 
              clearList={this.clearList} 
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;