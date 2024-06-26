import React from "react";
import "./page_numbers.css";

function PageNumbers({
  onPageChange,
  // goToFirstPage,
  // goTolastPage,
  currentPage,
  totalPages,
  displayRange = 5,
}) {
  const pageNum = [];

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  // const handleFirstPageClick = () => {
  //   goToFirstPage();
  // };

  // const handleLastPageClick = () => {
  //   goTolastPage();
  // };

  let startPage = Math.max(1, currentPage - Math.floor(displayRange / 2));
  let endPage = Math.min(totalPages, startPage + displayRange - 1);

  if (endPage - startPage + 1 < displayRange) {
    startPage = endPage - displayRange + 1;
    // startPage = Math.max(1, endPage - displayRange + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNum.push(i);
  }

  const numbersOnPage = pageNum.map((number) => {
    return (
      <li key={number} onClick={handleClick}>
        <a href="#" className={number == currentPage ? "active" : "inactive"}>
          {number}
        </a>
      </li>
    );
  });

  return (
    <div className="pagination">
      <a href="#" className="inactive" onClick={handleClick}>
        Go to first page
      </a>
      <ul className="page-numbers">{numbersOnPage}</ul>
      <a href="#" className="inactive" onClick={handleClick}>
        Go to last page
      </a>
    </div>
  );
}

export default PageNumbers;
