import { connect } from 'react-redux';
import { Todo } from "../components/index";
import { createTodoInit, fetchTodoByIdDone, fetchTodoByIdInit, fetchTodosInit } from "../../actions";
import { compose, lifecycle, withState } from 'recompose';
import { ITodo } from "interfaces";
import { initialize } from "redux-form";

const mapStateToProps: any = (state): any => ({
  todoList: state.Todos.list,
  todo: state.form.todoForm && state.form.todoForm.values
});

const mergeProps: any = (props, { dispatch }, ownProps): any => ({
  ...props,
  ...ownProps,
  handleSubmit: () => dispatch(createTodoInit()),
  fetchTodo: (id: string) => dispatch(fetchTodoByIdInit(id)),
  setTodo: (todo: ITodo) => {
    dispatch(fetchTodoByIdDone(todo));
    dispatch(initialize('todoForm', todo));
  }
});

export default compose(
  connect(mapStateToProps, null, mergeProps),
  lifecycle({
    componentDidMount() {
      const todoId = this.props.params && +this.props.params.id;
      if ( !this.props.todoList.length ) {
        todoId && this.props.fetchTodo(todoId);
      } else {
        todoId && this.props.setTodo(this.props.todoList.find(t => t.id === todoId));
      }
    }
  })
)(Todo);
