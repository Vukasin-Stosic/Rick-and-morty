import React from "react";
import "./page_numbers.css";

// function PageNumbers({ onPageChange }) {
//   const pageNum = [];

//   for (let i = 1; i < 43; i++) {
//     pageNum.push(i);
//   }

//   const numbersOnPage = pageNum.map((number) => {
//     return (
//       <li key={number} onClick={onPageChange}>
//         <a href="#">{number}</a>
//       </li>
//     );
//   });

//   return (
//     <div>
//       <ul className="page-numbers">{numbersOnPage}</ul>
//     </div>
//   );
// }
// BREAK
// function PageNumbers({
//   onPageChange,
//   currentPage,
//   totalPages,
//   displayRange = 5,
// }) {
//   const pageNumbers = [];

//   const handleClick = (pageNumber) => {
//     onPageChange(pageNumber);
//   };

//   let startPage = Math.max(1, currentPage - Math.floor(displayRange / 2));
//   let endPage = Math.min(totalPages, startPage + displayRange - 1);

//   if (endPage - startPage + 1 < displayRange) {
//     startPage = Math.max(1, endPage - displayRange + 1);
//   }

//   for (let i = startPage; i <= endPage; i++) {
//     pageNumbers.push(
//       <li
//         key={i}
//         onClick={() => handleClick(i)}
//         className={i === currentPage ? "active" : ""}
//       >
//         <a href="#">{i}</a>
//       </li>
//     );
//   }

//   return (
//     <div>
//       <ul className="page-numbers">{pageNumbers}</ul>
//     </div>
//   );
// }

//BREAK

function PageNumbers({
  onPageChange,
  goToFirstPage,
  goTolastPage,
  currentPage,
  totalPages,
  displayRange = 5,
}) {
  const pageNum = [];

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
    console.log(pageNumber);
  };

  const handleFirstPageClick = () => {
    goToFirstPage();
  };

  const handleLastPageClick = () => {
    goTolastPage();
  };

  let startPage = Math.max(1, currentPage - Math.floor(displayRange / 2));
  let endPage = Math.min(totalPages, startPage + displayRange - 1);

  if (endPage - startPage + 1 < displayRange) {
    startPage = Math.max(1, endPage - displayRange + 1);
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
      <a href="#" className="inactive" onClick={handleFirstPageClick}>
        Go to first page
      </a>
      <ul className="page-numbers">{numbersOnPage}</ul>
      <a href="#" className="inactive" onClick={handleLastPageClick}>
        Go to last page
      </a>
    </div>
  );
}

export default PageNumbers;
