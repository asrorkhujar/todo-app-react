import TodoItem from "../todo-item/todo-item";
import "./todo-list.scss";

const TodosList = ({todos}) => {
  console.log(todos);
  return (
    <ul className="todos-list">
      {
        todos.map((todo) => <TodoItem {...todo} />)
      }
    </ul>
  );
};

export default TodosList;