import React from 'react';
import './TareaItem.css';

//Esta es la clase de las Tareas Items

/**
 * la o
 */
function TareaItem(props) {
  return (
    <li className="TareaItem">
      {/*Enviamos un string si recibimos complete true  anadimos el otro icono*/}
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
      ᄼ
      </span>
      {/*aqui aparecera la tarea*/ }
      <p className={`TareaItem-p ${props.completed && 'TareaItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TareaItem };