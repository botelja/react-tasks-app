import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginator = ({ tasksPerPage, totalTasks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination aria-label="Page navigation example">
      {pageNumbers.map((number) => (
        <PaginationItem key={number}>
          <PaginationLink onClick={() => paginate(number)} href="#">
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};

export default Paginator;
