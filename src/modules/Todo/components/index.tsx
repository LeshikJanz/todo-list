import * as React from 'react';
import { TodoTable } from "./todoTable";
require('../styles/style.scss');

export const Todo = () => {

  return (
    <div>
      <h1 className="welcome">Welcome to the TODO App</h1>
      <TodoTable/>
    </div>
  )
};