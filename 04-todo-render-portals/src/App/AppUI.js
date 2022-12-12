import React from "react";
import { CreateTodoButton } from "../components/CreateTodoButton";
import EmptyTodos from "../components/EmptyTodos";
import { Modal } from "../components/Modal";
import { TodoCounter } from "../components/TodoCounter";
import { TodoForm } from "../components/TodoForm";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import TodosError from "../components/TodosError";
import TodosLoading from "../components/TodosLoading";
import { TodoContext } from "../context/TodoContext";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmptyTodos />}

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
      {!!openModal && (
        <Modal>
          {/* <p>Teletransportando...</p>
          {searchedTodos[0]?.text}
           */}
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
};

export { AppUI };
