import "./todo-item.scss";

const TodoItem = ({id, name, completed, todos, setTodos}) => {

  function handleDeleteButtonClick() {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function handleTodoChek() {
    setTodos(() => (
      todos.map(todo => (todo.id !== id) ? todo : {...todo, completed: !completed })
    ))
  }
  return (
    <li className={"todo " + (completed ? "todo--done" : "")}>
      <label className="todo__label">
      <input onChange={handleTodoChek} className="todo__checkbox" type="checkbox" />
      <p className="todo__name">{name}</p>
      </label>

      <button className="todo__action todo__edit bg-success text-white rounded">Edit todo</button>
      <button onClick={handleDeleteButtonClick} className="todo__action todo__delete bg-danger text-white rounded">Delete todo</button>
    </li>
  );
};

export default TodoItem;