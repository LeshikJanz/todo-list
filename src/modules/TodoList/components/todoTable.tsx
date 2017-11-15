import * as React from 'react';
import '../styles/table.scss';
import { Link } from 'react-router';

const filterByPublicFields = (elem, i) => ({
  id: i + 1,
  title: elem.title,
  description: elem.description
});

export const TodoTable = ({
                            todoList,
                            loading,
                            checkedItems,
                            handleCheckbox,
                            gotoTodo,
                            isFinishedList,
                            markAsFinished,
                            handleFinish,
                            handleDelete
                          }) => (
  <div>
    { (todoList.length !== 0 && !loading) &&
    <table>
      <tbody>
      <tr>
        <th>№</th>
        <th>Title</th>
        <th>Description</th>
        <th></th>
      </tr>
      {
        todoList
          .filter(t => t.isFinished === isFinishedList)
          .map((l, i) =>
            <tr key={i}>
              {
                Object.values(filterByPublicFields(l, i))
                  .map((o, i) => <th onClick={() => gotoTodo(l.id)} key={i}>{o}</th>)
              }
              <th className="tableActions">
                {!isFinishedList && <button onClick={() => handleFinish(l)}>Finish</button>}
                {isFinishedList && <button onClick={() => handleFinish(l)}>Active</button>}
                <button onClick={() => handleDelete(l.id)}>Delete</button>
              </th>
            </tr>
          )
      }
      </tbody>
    </table>
    }
    { loading && <h1>Loading...</h1> }
    { (!loading && todoList.length === 0) &&
    <h1 className="emptyTable">
      There is no one Todo. Tap to the New Button in the top left corner for starting your experience.
    </h1>
    }
  </div>
);