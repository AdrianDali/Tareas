import React from 'react';
import './TodoList.css';

/**Es el contenedor de la lista de tareas */
function TodoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };