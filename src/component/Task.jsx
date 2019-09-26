import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import EditTask from './EditTask';
import DeleteOneTask from './DeleteOneTask';
import PropTypes from 'prop-types';

const Task = ({
  history,
  location,
  editRow,
  updateTask,
  currentTask,
  deleteTask
}) => {
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
              <DeleteOneTask deleteTask={deleteTask} currentTask={task} />
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

Task.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.object.isRequired,
  editRow: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  currentTask: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default Task;
