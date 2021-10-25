import TodoItem from "../todo-item/todo-item";
import "./todo-list.scss";

const TodosList = ({todos, setTodos}) => {

  return (
    <ul className="todos-list">
      {
        todos.map((todo) => <TodoItem todos={todos} setTodos={setTodos} {...todo} />)
      }
    </ul>
  );
};

export default TodosList;