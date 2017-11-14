import * as React from 'react';

export const Todo = ({ handleTodo }) => (
  <div>
    <form onSubmit={handleTodo}>
      <div>
        <label htmlFor="title">Title</label>
        <input name="title" required placeholder="Title" type="text"/>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea name="description" required placeholder="Title" type="text"/>
      </div>
      <button>Submit</button>
    </form>
  </div>
);
