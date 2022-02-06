import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({ total, completed }) => {
  return (
    // <h2
    //   style={{
    //     color: "red",
    //     backgroundColor: "yellow",
    //   }}
    // >
    //   Has completado 2 de 3 TODOs
    // </h2>

    <h2 className="TodoCounter">
      Has completado {completed} de {total} TODOs
    </h2>
  );
};

export { TodoCounter };
