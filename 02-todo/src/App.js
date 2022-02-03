import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const todos = [
  { text: "Aprender js", completed: true },
  { text: "Aprender react", completed: false },
  { text: "Aprender redux", completed: false },
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      {/* <h2>Has completado 2 de 3 TODOs</h2> */}
      <TodoSearch />
      {/* <input placeholder="Todo a buscar" />
      <button>+</button> */}
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
