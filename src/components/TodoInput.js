import React, { Component } from "react";

export default class TodoInput extends Component {

  render() {
    const {title, handleChange, handleSubmit, editItem} = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input 
              type="text" 
              className="form-control text-capitalize" 
              placeholder="add a todo item" 
              value={title}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={
            editItem ? 'btn btn-block bg-success mt-3'
                      : 'btn btn-block bg-primary mt-3'
          }>
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    )
  }
}