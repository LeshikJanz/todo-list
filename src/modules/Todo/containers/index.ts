import { connect } from 'react-redux';
import { Todo } from "../components/index";
import { createTodoInit } from "../../actions";

const mapStateToProps: any = (state): any => ({});

const mapDispatchToProps = (dispatch) => ({
  handleTodo: (e) => {
    e.preventDefault();
    const { title, description } = e.target.elements;
    dispatch(createTodoInit({ title: title.value, description: description.value }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Todo);
