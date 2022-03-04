import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  // const onClickButton = () => {
  //   alert("Create Todo Button Clicked");
  // };
  // const onClickButton = (msg) => {
  //   alert(msg);
  // };
  // const onClickButton = (msg) => {
  //   return () => {
  //     alert(msg);
  //   };
  // };
  const onClickButton = () => {
    // props.setOpenModal(true);
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    // <button className="CreateTodoButton" onClick={alert("hola mundo")}>
    //   +
    // </button>
    // <button className="CreateTodoButton" onClick={() => alert("hola mundo")}>
    //   +
    // </button>

    // <button className="CreateTodoButton" onClick={onClickButton}>
    //   +
    // </button>
    // <button
    //   className="CreateTodoButton"
    //   onClick={onClickButton("Create Todo Button Clicked")}
    // >
    //   +
    // </button>
    // <button
    //   className="CreateTodoButton"
    //   onClick={() => onClickButton("Create Todo Button Clicked")}
    // >
    //   +
    // </button>

    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
