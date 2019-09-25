import React, { useState, useEffect } from 'react';
import { Table, Input } from 'reactstrap';
import EditTask from './EditTask';

const Task = ({ history, location, editRow, updateTask, currentTask }) => {
  const [task, setTask] = useState(location.state.task);

  useEffect(() => {
    if (currentTask.id !== null) {
      setTask(currentTask);
    }
  }, [currentTask]);
  return (
    <div>
      <h1>Task Page</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.description}</td>
            <td>{task.created}</td>
            <td className="d-flex">
              <EditTask
                editRow={editRow}
                currentTask={task}
                updateTask={updateTask}
              />
              <Input type="checkbox" />
            </td>
          </tr>
        </tbody>
      </Table>
      <button className="btn btn-primary" onClick={() => history.push('/')}>
        Back
      </button>
    </div>
  );
};

export default Task;
