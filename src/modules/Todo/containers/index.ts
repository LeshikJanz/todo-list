import { connect } from 'react-redux';
import { Todo } from "../components/index";
import { createTodoInit, fetchTodoByIdDone, fetchTodoByIdInit, fetchTodosInit } from "../../actions";
import { compose, lifecycle, withState } from 'recompose';
import { ITodo } from "interfaces";

const mapStateToProps: any = (state): any => ({
  todoList: state.Todos.list,
  todo: state.Todo
});

const mergeProps: any = (props, { dispatch }, ownProps): any => ({
  ...props,
  ...ownProps,
  handleTodo: (e) => {
    e.preventDefault();
    const { title, description } = e.target.elements;

    dispatch(
      createTodoInit({
        title: title.value,
        description: description.value,
        order: props.todoList.length
      }));
  },
  fetchTodo: (id: string) => dispatch(fetchTodoByIdInit(id)),
  setTodo: (todo: ITodo) => dispatch(fetchTodoByIdDone(todo)),
});

export default compose(
  connect(mapStateToProps, null, mergeProps),
  withState('currentTodo', 'updateTodo', {}),
  lifecycle({
    componentDidMount() {
      const todoId = this.props.params && +this.props.params.id;
      if (!this.props.todoList.length) {
        todoId && this.props.fetchTodo(todoId);
      } else {
        todoId && this.props.setTodo(this.props.todoList.find(t => t.id === todoId))
      }
    }
  })
)(Todo);
