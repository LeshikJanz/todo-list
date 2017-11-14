import { connect } from 'react-redux';
import { Todo } from "../components/index";
import { createTodoInit } from "../../actions";

const mapStateToProps: any = (state): any => ({
  todoList: state.Todos.list
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
  }
});

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(Todo);
