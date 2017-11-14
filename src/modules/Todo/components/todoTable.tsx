import * as React from 'react';
import '../styles/table.scss';
const todoList = require('assets/mock-data/todoList.json');

const filterByPublicFields = (elem) => ({
  title: elem.title,
  description: elem.description
});

export const TodoTable = () => (
  <div className="tableContainer">
    <table>
      <tbody>
      <tr>
        <th>Title</th>
        <th>Description</th>
      </tr>
      {
        todoList.map((l, i) =>
          <tr key={i}>
            {
              Object.values(filterByPublicFields(l))
                .map((o, i) => <th key={i}>{o}</th>)
            }
          </tr>
        )
      }
      </tbody>
    </table>
  </div>
);