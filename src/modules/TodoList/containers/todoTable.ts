import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { fetchTodosInit } from "modules/actions";
import { TodoTable } from "../components/todoTable";

const mapStateToProps: any = (state): any => ({
  todoList: state.Todos
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
  })
)(TodoTable);

