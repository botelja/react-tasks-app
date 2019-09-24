import React from 'react';
import { Table, Button, Input } from 'reactstrap';
import EditTask from './EditTask';

const TaskTable = ({ tasks, editRow, currentTask }) => (
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
              <Button color="primary" className="btn-sm mr-2">
                Open
              </Button>
              <EditTask editRow={editRow} currentTask={currentTask} />
              <Input type="checkbox" className="" />
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

export default TaskTable;
