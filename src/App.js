import { useState } from "react";
import AddTodo from "./components/add-todo/add-todo";
import TodosList from "./components/todo-list/todo-list";

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      name:"Dars qilish",
      completed: false
    },
    {
      id:2,
      name:"Kitob o'qish",
      completed: false
    },
    {
      id:3,
      name:"Kinoga borish",
      completed: false
    },
  ]);

  return (
    <main className="main container-xl">
     <h1 className="main__title my-5 text-center font-weight-bold text-info">ToDo App</h1>
     <AddTodo todos={todos} setTodos={setTodos} />

      <TodosList todos={todos} />
   </main>
  );
}

export default App;
