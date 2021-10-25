import { useState } from "react";
import AddTodo from "./components/add-todo/add-todo";
import TodosList from "./components/todo-list/todo-list";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <main className="main container">
     <h1 className="main__title my-5 text-center font-weight-bold text-info">To-Do App</h1>
     <AddTodo todos={todos} setTodos={setTodos} />

      <TodosList todos={todos} setTodos={setTodos} />
   </main>
  );
}

export default App;
