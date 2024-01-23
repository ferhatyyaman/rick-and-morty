import React from 'react';
import './Pagination.css';

export default function Pagination({ currentPage, totalPages, basePath, setPage }) {
  const getPageLink = (page) => `${basePath}/${page}`;

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

  return (
    <nav>
      <ul className="pagination">
        {renderPageNumbers()}
      </ul>
    </nav>
  );
}
