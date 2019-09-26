import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

const Paginator = ({ tasksPerPage, totalTasks, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <PaginationItem
          key={number}
          className={number === currentPage ? 'page-item active' : 'page-item'}
        >
          <PaginationLink onClick={() => paginate(number)} href="#">
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};

Paginator.propTypes = {
  tasksPerPage: PropTypes.number.isRequired,
  totalTasks: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Paginator;
