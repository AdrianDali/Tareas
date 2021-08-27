import React from 'react';
import { TareaCounter } from './TareaCounter';
import { TareaSearch } from './TareaSearch';
import { CreateTareaButton } from './CreateTareaButton';
import { TareaList } from './TareaList';
import { TareaItem } from './TareaItem';

/**Este es el Array de Items  */
/** primer parametro es la tarea y el segundo es si fue completada */
const tareas = [
  { text: 'Clase 4 Curso de Japones', completed: true },
  { text: 'Tarea 6 Curso de Japones', completed: true },
  { text: 'Reunion de Meet con companeros', completed: false },
  { text: 'Repaso de apuntes ', completed:false },
  
];

/** React.Fragment es para una etiqueta como componente como una etiqueta padre, 
 *  en react solo se puede enviar una etiqueta padre por componente como una etiqueta
 * 
 *  App sera nuestra funcion principal que retornara varios elementos
 */

function App() { 
  return (
    <React.Fragment >
      <TareaCounter />

      <TareaSearch />

      <TareaList>
        
      {/* cada ves que llamemos a tarea item enviaremos key que es para optimisar */
      /*  Enviaremos el texto de nuestro arreglo de tareas */
      /*  Enviaremos el tarea complete */
      tareas.map(tarea => (
        <TareaItem key={tarea.text} 
                  text={tarea.text}  
                  completed={tarea.completed} />))}
    
      </TareaList>
    
      <CreateTareaButton />
    </React.Fragment >
  );
}

export default App;