import React, { useState } from 'react';
import generateId from './generateId';
import './App.css';
import './style.css'

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

const App: React.FC = () => {

  
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Выгулить собаку', completed: false },
    { id: '2', text: 'Сделать тренировку', completed: true },
  ]);
  const [currentTask, setCurrentTask] = useState<string>('');
  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(event.target.value);
  };

  const handleAddTask = () => {
    if (currentTask.trim() === '') {
      return;
    }
    const newTask: Task = {
      id: generateId(),
      text: currentTask,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setCurrentTask('');
  };

  const handleTaskComplete = (id: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div>
        <input type="text" value={currentTask} onChange={handleTaskChange} />
        <button onClick={handleAddTask}>Добавить</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskComplete(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
