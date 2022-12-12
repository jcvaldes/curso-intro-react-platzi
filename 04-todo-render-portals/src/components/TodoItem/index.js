import React from 'react'
import './TodoItem.css'
// const TodoItem = (props) => {
//   return (
//     <li>
//       <span>C</span>
//       <p>{props.text}</p>
//       <span>X</span>
//     </li>
//   );
// };

// export { TodoItem };

function TodoItem(props) {
  // const onComplete = () => {
  //   alert("Ya completaste la tarea " + props.text);
  // };
  // const onDelete = () => {
  //   alert("Borraste la tarea " + props.text);
  // };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  )
}

export { TodoItem }
