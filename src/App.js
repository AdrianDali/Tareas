import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

/**Este es el Array de Items */
const tareas = [
  { text: 'Clase 4 Curso de Japones', complete: false },
  { text: 'Tarea 6 Curso de Japones', complete: false },
  { text: 'Reunion de Meet con companeros', complete: false },
  { text: 'Repaso de apuntes ', complete:false },
  
];

/** React.Fragment es para una etiqueta como componente como una etiqueta padre, 
 *  en react solo se puede enviar una etiqueta padre por componente como una etiqueta
 * 
 *  App sera nuestra funcion principal que retornara varios elementos
 */

function App() { 
  return (
    <React.Fragment >
      <TodoCounter />

      <TodoSearch />

      <TodoList>
      {tareas.map(todo => (
        <TodoItem key={todo.text} 
                  text={todo.text}  
                  completed={todo.completed} />))}
    
      </TodoList>
    
      <CreateTodoButton />
    </React.Fragment >
  );
}

export default App;