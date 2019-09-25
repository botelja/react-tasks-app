import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Delete from './component/Delete';
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
      created: new Date().toISOString(),
      selected: false
    },
    {
      id: 2,
      name: 'Second task',
      description: 'Second description',
      created: new Date().toISOString(),
      selected: false
    },
    {
      id: 3,
      name: 'Thrid task',
      description: 'Thrid description',
      created: new Date().toISOString(),
      selected: false
    },
    {
      id: 4,
      name: 'Four task',
      description: 'Four description',
      created: new Date().toISOString(),
      selected: false
    },
    {
      id: 5,
      name: 'Five task',
      description: 'Five description',
      created: new Date().toISOString(),
      selected: false
    },
    {
      id: 6,
      name: 'Six task',
      description: 'Six description',
      created: new Date().toISOString(),
      selected: false
    },
    {
      id: 7,
      name: 'Seven task',
      description: 'Seven description',
      created: new Date().toISOString(),
      selected: false
    },
    {
      id: 8,
      name: 'Eight task',
      description: 'Eight description',
      created: new Date().toISOString(),
      selected: false
    },
    {
      id: 9,
      name: 'Nine task',
      description: 'Nine description',
      created: new Date().toISOString(),
      selected: false
    },
    {
      id: 10,
      name: 'Ten task',
      description: 'Ten description',
      created: new Date().toISOString(),
      selected: false
    }
  ];
  const initialFormState = {
    id: null,
    name: '',
    username: '',
    created: null,
    selected: false
  };

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

  const deleteTasks = () => {
    let selectedTasks = [];

    selectedTasks = tasks.filter((task) => task.selected === false);
    setTasks(selectedTasks);
  };

  const editRow = (task) => {
    setCurrentTask({
      id: task.id,
      name: task.name,
      description: task.description,
      created: task.created
    });
  };

  const handleCheckdTask = (e, task) => {
    let checked = e.target.checked;
    setTasks(
      tasks.map((t) => {
        if (task.id === t.id) {
          t.selected = checked;
        }
        return t;
      })
    );
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
              <div className="d-flex">
                <AddTask addTask={addTask} {...props} />
                <Delete handleDelete={deleteTasks} />
              </div>
              <TaskTable
                tasks={currentTasks}
                editRow={editRow}
                updateTask={updateTask}
                handleCheckdTask={handleCheckdTask}
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
