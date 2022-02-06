import React from "react";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";

const AppUI = ({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      {/* <h2>Has completado 2 de 3 TODOs</h2> */}
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* <input placeholder="Todo a buscar" />
      <button>+</button> */}
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
};

export { AppUI };
