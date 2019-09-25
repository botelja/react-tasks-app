import React from 'react';
import { Table, Input } from 'reactstrap';
import EditTask from './EditTask';
import { Link } from 'react-router-dom';

const TaskTable = ({ tasks, editRow, updateTask, handleCheckdTask }) => {
  return (
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
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.created}</td>
              <td className="d-flex">
                <Link
                  to={{
                    pathname: `/task/${task.id}`,
                    state: { task }
                  }}
                  className="btn btn-primary btn-sm mr-2"
                >
                  Open
                </Link>
                <EditTask
                  editRow={editRow}
                  currentTask={task}
                  updateTask={updateTask}
                />
                <Input
                  type="checkbox"
                  checked={task.selected}
                  onChange={(e) => handleCheckdTask(e, task)}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No tasks</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TaskTable;
