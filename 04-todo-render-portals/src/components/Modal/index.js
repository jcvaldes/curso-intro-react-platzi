import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../../context/TodoContext";
import "./Modal.css";
const Modal = ({ children }) => {
  // return ReactDOM.createPortal(children, document.getElementById("modal"));

  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
};

export { Modal };
