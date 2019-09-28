import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

const Paginator = ({ tasksPerPage, totalTasks, paginate, currentPage }) => {
  const pages = [];

  const pagesCount = Math.ceil(totalTasks / tasksPerPage);

  if (pagesCount === 1) return null;

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <Pagination>
      {pages.map((page) => (
        <PaginationItem
          key={page}
          className={page === currentPage ? 'page-item active' : 'page-item'}
        >
          <PaginationLink onClick={() => paginate(page)} href="#">
            {page}
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
