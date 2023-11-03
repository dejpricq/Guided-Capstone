import React from 'react';

const Pagination = ({ currentPage, pageSize, totalPages, onPageChange, onPageSizeChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  const handlePageSizeChange = (event) => {
    onPageSizeChange(event.target.value);
  };

  return (
    <div>
      <button disabled={isFirstPage} onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button disabled={isLastPage} onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </button>
      <select value={pageSize} onChange={handlePageSizeChange}>
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={50}>50 per page</option>
      </select>
    </div>
  );
};

export default Pagination;
