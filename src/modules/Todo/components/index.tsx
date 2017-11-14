import * as React from 'react';
import '../styles/style.scss';

export const Todo = ({ todo, todoList, handleTodo, params, currentTodo }) => (
  <div className="todoContainer">
    <form onSubmit={handleTodo}>
      <div className="formElement">
        <label htmlFor="title">Title</label>
        <input name="title"
               required placeholder="Title" type="text"/>
      </div>
      <div className="formElement">
        <label htmlFor="description">Description</label>
        <textarea name="description"
                  rows="10" required placeholder="Description"
                  type="text"/>
      </div>
      <button>Submit</button>
    </form>
  </div>
);

