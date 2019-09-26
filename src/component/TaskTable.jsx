import React from 'react';
import { Table, Input } from 'reactstrap';
import EditTask from './EditTask';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TaskTable = ({
  tasks,
  editRow,
  updateTask,
  handleCheckdTask,
  onSort,
  sortColumn
}) => {
  const raiseSort = (path) => {
    const sort = { ...sortColumn };
    if (sort.path === path) {
      sort.order = sort.order === 'asc' ? 'desc' : 'asc';
    } else {
      sort.path = path;
      sort.order = 'asc';
    }
    onSort(sort);
  };
  return (
    <Table>
      <thead>
        <tr>
          <th onClick={() => raiseSort('id')}>ID</th>
          <th onClick={() => raiseSort('name')}>Name</th>
          <th onClick={() => raiseSort('description')}>Description</th>
          <th onClick={() => raiseSort('created')}>Created</th>
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

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  editRow: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  handleCheckdTask: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  sortColumn: PropTypes.object.isRequired
};

export default TaskTable;
