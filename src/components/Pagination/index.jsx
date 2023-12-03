// Pagination.js

import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <button
        className="text-blue-500 hover:underline"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack size={20} />
      </button>

      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="text-blue-500 hover:underline"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );
};

export default Pagination;
