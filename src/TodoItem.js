import React from 'react';
import './TodoItem.css';

//Esta es la clase de las Tareas Items
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
      ᄼ
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };