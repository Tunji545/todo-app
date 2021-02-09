import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {

  render() {
    const {texts} = this.props;
    return (
      <ul className="list-item my-5">
        <h3 className="text-capitalize text-center">todo item</h3>
        {texts.map(text => {
          return (
            <TodoItem key={text.id} title={text.title} />

          )
        })}
        <button type="button" className="btn btn-danger btn-block text-capitalize text-center mt-5">clear button</button>
      </ul>
    )
  }
}