import "./todo-item.scss";

const TodoItem = ({id, name, completed}) => {
  return (
    <li className={"todo " + (completed ? "todo--done" : "")}>
      <input value={id} className="todo__checkbox" type="checkbox" />
      <p className= "todo__name">{name}</p>

      <button data-id={id} className="todo__action todo__edit bg-success text-white rounded">Edit todo</button>
      <button data-id={id} className="todo__action todo__delete bg-danger text-white rounded">Delete todo</button>
    </li>
  );
};

export default TodoItem;