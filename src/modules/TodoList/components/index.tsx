import * as React from 'react';
import TodoTable from "../containers/todoTable";
require('../styles/style.scss');

export const TodoList = () => (
  <div>
    <h1 className="welcome">Welcome to the TODO App</h1>
    <TodoTable/>
  </div>
);