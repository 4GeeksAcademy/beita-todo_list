import React, { useState } from "react";
import '../../styles/index.css'; // Asegúrate de que este archivo exista

// Componente principal de la aplicación de TODO
const Home = () => {
  const [tasks, setTasks] = useState([]);  // Estado para las tareas
  const [newTask, setNewTask] = useState('');  // Estado para la nueva tarea

  // Maneja la adición de una nueva tarea
  const handleAddTask = (e) => {
    if (e.key === 'Enter' && newTask.trim()) {
      setTasks([...tasks, newTask]);  // Agrega la nueva tarea
      setNewTask('');  // Resetea el campo de entrada
    }
  };

  // Maneja la eliminación de una tarea
  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));  // Filtra la tarea a eliminar
  };

  return (
    <div className="todo-app text-center mt-5">
      <h1>todos</h1>

      <input
        type="text"
        placeholder="Añadir tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleAddTask}
        className="form-control mb-3"  // Clases de Bootstrap para el estilo
      />

      {tasks.length === 0 ? (
        <p>No hay tareas, añadir tareas</p>
      ) : (
        <ul className="task-list list-unstyled">
          {tasks.map((task, index) => (
            <li key={index} className="task-item d-flex justify-content-between align-items-center mb-2">
              {task}
              <span
                className="delete-icon"
                onClick={() => handleDeleteTask(task)}
                style={{ cursor: "pointer" }} // Estilo para el puntero al pasar el mouse
              >
                ❌
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
