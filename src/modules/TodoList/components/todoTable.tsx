import * as React from 'react';
import '../styles/table.scss';
import { Link } from 'react-router';

const filterByPublicFields = (elem, i) => ({
  id: i + 1,
  title: elem.title,
  description: elem.description
});

export const TodoTable = ({ todoList, loading, checkedItems, handleCheckbox, gotoTodo }) => (
  <div className="tableContainer">
    { (todoList.length !== 0 && !loading) &&
    <table>
      <tbody>
      <tr>
        <th></th>
        <th>№</th>
        <th>Title</th>
        <th>Description</th>
      </tr>
      {
        todoList.map((l, i) =>
          <tr key={i}>
            <th><input type="checkbox" onChange={(e) => handleCheckbox(e, l)}/></th>
            {
              Object.values(filterByPublicFields(l, i))
                .map((o, i) => <th onClick={() => gotoTodo(l.id)} key={i}>{o}</th>)
            }
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

    {
      checkedItems.length > 0 &&
      <div className="actionButtons">
        <button>Set as finished</button>
        <button>Delete</button>
      </div>
    }
  </div>
);