import React from 'react';
import './Pagination.css';

export default function Pagination({ currentPage, totalPages, setPage }) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button
            className="page-link"
            onClick={() => setPage(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  const renderPaginationControls = () => {
    return (
      <div className="pagination-controls">
        <button
          className="page-link"
          onClick={() => setPage(1)}
          disabled={currentPage === 1}
        >
          {'<<'}
        </button>
        <button
          className="page-link"
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        {renderPageNumbers()}
        <button
          className="page-link"
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </button>
        <button
          className="page-link"
          onClick={() => setPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          {'>>'}
        </button>
      </div>
    );
  };

  return (
    <nav>
      <ul className="pagination">
        {renderPaginationControls()}
      </ul>
    </nav>
  );
}
