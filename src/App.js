import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Delete from './component/Delete';
import Paginator from './component/Paginator';
import TaskTable from './component/TaskTable.jsx';
import AddTask from './component/AddTask.jsx';
import Task from './component/Task';
import { Input } from 'reactstrap';
import _ from 'lodash';

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
  const [searchTask, setSearchTask] = useState('');
  const [sortColumn, setSortColumn] = useState({ path: 'id', order: 'asc' });

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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

  const handleSearch = (e) => {
    setSearchTask(e.target.value);
  };

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  // Searching
  let filteredTasks = tasks;
  if (searchTask.length > 0) {
    filteredTasks = filteredTasks.filter((task) => {
      return (
        task.id.toString().includes(searchTask) ||
        task.name.toLowerCase().includes(searchTask.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTask.toLowerCase()) ||
        task.created.toLowerCase().includes(searchTask.toLowerCase())
      );
    });
  } else {
    filteredTasks = tasks;
  }

  //Sorting
  const sorted = _.orderBy(
    filteredTasks,
    [sortColumn.path],
    [sortColumn.order]
  );

  //Pagination
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = sorted.slice(indexOfFirstTask, indexOfLastTask);
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
              <Input
                type="text"
                name="search"
                id="search"
                value={searchTask}
                placeholder="Search"
                className="mb-4"
                onChange={(e) => handleSearch(e)}
              />
              <TaskTable
                tasks={currentTasks}
                editRow={editRow}
                updateTask={updateTask}
                handleCheckdTask={handleCheckdTask}
                onSort={handleSort}
                sortColumn={sortColumn}
                {...props}
              />
              <Paginator
                tasksPerPage={tasksPerPage}
                totalTasks={tasks.length}
                currentPage={currentPage}
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
              deleteTask={deleteTask}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
