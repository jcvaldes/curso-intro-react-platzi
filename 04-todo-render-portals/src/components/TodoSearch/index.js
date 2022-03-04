import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchValueChange = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Buscar una tarea..."
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <p>{searchValue}</p>
    </>
  );
}

export { TodoSearch };

// Antes el state se escribía así:
// class Componente extends React.Component {
//   constructor() {
//     this.state = {
//       name: "Juan",
//     };
//   }
//   render() {
//     return <div onClick={() => this.setState("Oliver")}>{this.state.name}</div>;
//   }
// }
