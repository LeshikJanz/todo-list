import { connect } from 'react-redux';
import { compose, lifecycle, withState, withHandlers, withProps } from 'recompose';
import { fetchTodosInit } from "modules/actions";
import { TodoTable } from "../components/todoTable";
import { push } from 'react-router-redux';
import { urls } from "../../../urls";

const mapStateToProps: any = (state): any => ({
  todoList: state.Todos.list.sort((a, b) => b.order - a.order),
  loading: state.Todos.loading
});

export default compose(
  connect(mapStateToProps),
  withState('checkedItems', 'handleCheckedArray', []),
  withHandlers({
    handleCheckbox: ({ checkedItems, handleCheckedArray }) => ({ target }, item) => {
      if (target.checked) {
        checkedItems.push(item);
        handleCheckedArray(checkedItems);
      } else {
        const items = checkedItems.filter(c => c !== item);
        handleCheckedArray(items);
      }
    },
    getTodos: ({ dispatch }) => () => dispatch(fetchTodosInit()),
    gotoTodo: ({ dispatch }) => (id) => dispatch(push(urls.todo + '/' + id)),
  }),
  lifecycle({
    componentDidMount() {
      this.props.getTodos();
    }
  })
)(TodoTable);

