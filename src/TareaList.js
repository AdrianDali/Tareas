import React from 'react';
import './TareaList.css';

/**Es el contenedor de la lista de tareas */
function TareaList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TareaList };