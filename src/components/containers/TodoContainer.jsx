import { connect } from "react-redux";
import TodoList from "../pure/TodoList";

//Actions
import { toggleTodo } from "../../store/actions/actions";

// Filter todo list
const filterTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter((todo) => !todo.completed);
    case "SHOW_COMPLETED":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todosState, state.filterState),
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

//We connect State  & Dispatch to Todolist´s props
const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoContainer;
