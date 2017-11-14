import { connect } from 'react-redux';
import { compose, lifecycle, withState, withHandlers } from 'recompose';
import { fetchTodosInit } from "modules/actions";
import { TodoTable } from "../components/todoTable";

const mapStateToProps: any = (state): any => ({
  todoList: state.Todos.list.sort((a, b) => b.order - a.order),
  loading: state.Todos.loading
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(fetchTodosInit())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getTodos();
    }
  }),
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
    }
  }),
)(TodoTable);

