import React, { useState } from 'react';
import './App.css';

type Task = {
  id: string;
  text: string;
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Пример задачи 1' },
    { id: '2', text: 'Пример задачи 2' },
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
      id: Date.now().toString(), 
      text: currentTask,
    };
    setTasks([...tasks, newTask]);
    setCurrentTask('');
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
            {task.text}{' '}
            <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
