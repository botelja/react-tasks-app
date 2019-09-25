import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Paginator from './component/Paginator';
import TaskTable from './component/TaskTable.jsx';
import AddTask from './component/AddTask.jsx';
import Task from './component/Task';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(5);

  const addTask = (task) => {
    task.id = tasks.length + 1;
    task.created = new Date().toISOString();
    setTasks([...tasks, task]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    setCurrentTask(updatedTask);
  };

  const editRow = (task) => {
    setCurrentTask({
      id: task.id,
      name: task.name,
      description: task.description,
      created: task.created
    });
  };

  //Pagination
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-center">Todo List App </h1>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <div>
              <AddTask addTask={addTask} {...props} />
              <TaskTable
                tasks={currentTasks}
                editRow={editRow}
                updateTask={updateTask}
                {...props}
              />
              <Paginator
                tasksPerPage={tasksPerPage}
                totalTasks={tasks.length}
                paginate={paginate}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/task/:id"
          render={(props) => (
            <Task
              editRow={editRow}
              updateTask={updateTask}
              currentTask={currentTask}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
