import React, { useState } from 'react';
import TaskTable from './component/TaskTable.jsx';
import AddTask from './component/AddTask.jsx';

import './App.css';

function App() {
  const tasksData = [
    {
      id: 1,
      name: 'First task',
      description: 'First description',
      created: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Second task',
      description: 'Second description',
      created: new Date().toISOString()
    },
    {
      id: 3,
      name: 'Thrid task',
      description: 'Thrid description',
      created: new Date().toISOString()
    },
    {
      id: 4,
      name: 'Four task',
      description: 'Four description',
      created: new Date().toISOString()
    },
    {
      id: 5,
      name: 'Five task',
      description: 'Five description',
      created: new Date().toISOString()
    },
    {
      id: 6,
      name: 'Six task',
      description: 'Six description',
      created: new Date().toISOString()
    },
    {
      id: 7,
      name: 'Seven task',
      description: 'Seven description',
      created: new Date().toISOString()
    },
    {
      id: 8,
      name: 'Eight task',
      description: 'Eight description',
      created: new Date().toISOString()
    },
    {
      id: 9,
      name: 'Nine task',
      description: 'Nine description',
      created: new Date().toISOString()
    },
    {
      id: 10,
      name: 'Ten task',
      description: 'Ten description',
      created: new Date().toISOString()
    }
  ];
  const initialFormState = { id: null, name: '', username: '', created: null };

  const [tasks, setTasks] = useState(tasksData);
  const [currentTask, setCurrentTask] = useState(initialFormState);

  const editRow = (task) => {
    setCurrentTask({
      id: task.id,
      name: task.name,
      description: task.description,
      created: task.created
    });
  };

  const addTask = (task) => {
    task.id = tasks.length + 1;
    task.created = new Date().toISOString();
    setTasks([...tasks, task]);
  };

  return (
    <div className="container">
      <h1 className="text-center">Todo List App </h1>
      <AddTask addTask={addTask} />
      <TaskTable tasks={tasks} editRow={editRow} currentTask={currentTask} />
    </div>
  );
}

export default App;
