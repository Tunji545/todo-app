import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {

  render() {
    const {texts, clearList, handleDelete, handleEdit} = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo item</h3>
        {texts.map(text => {
          return (
            <TodoItem 
              key={text.id} 
              title={text.title} 
              handleDelete={() => handleDelete(text.id)}
              handleEdit={() => handleEdit(text.id)}
            />

          )
        })}
        <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>clear button</button>
      </ul>
    )
  }
}