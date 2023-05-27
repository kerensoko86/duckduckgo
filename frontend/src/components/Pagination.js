import React from "react";
import "../style/css/pagination.css";

const Pagination = ({
  totalItems,
  fetchData,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    if (totalItems > 0) {
      fetchData(pageNumber);
    }
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="paging-container">
      <ul className="page-numbers">
        <li
          onClick={() => handlePageChange(currentPage - 1)}
          className={currentPage === 1 || !totalPages ? "disabled" : ""}
        >
          Prev
        </li>
        {renderPageNumbers()}
        <li
          onClick={() => handlePageChange(currentPage + 1)}
          className={
            currentPage === totalPages || !totalPages ? "disabled" : ""
          }
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
