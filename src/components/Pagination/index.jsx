import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    console.log("currentPage sau khi cập nhật:", currentPage);
  }, [currentPage]);
  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  };
  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;
  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <ReactPaginate
         forcePage={currentPage}
          breakLabel={<span className="mr-[12px]">...</span>}
          // breakLabel={currentPage + 1}
          nextLabel={
            showNextButton ? (
              <span className="flex h-10 w-10 items-center justify-center">
                <IoCaretForwardSharp />
              </span>
            ) : null
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          marginPagesDisplayed={0}
          previousLabel={
            showPrevButton ? (
              <span className="bg-gra flex h-10 w-10 items-center justify-center">
                <IoCaretBackSharp />
              </span>
            ) : null
          }
          pageLinkClassName={"block w-full h-full p-[8px]"}
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center items-center mb-[20px] mt-[20px]"
          pageClassName="text-center w-8 h-8 hover:rounded-full hover:bg-gray-300 flex justify-center items-center mr-[12px]"
          activeClassName="bg-[#FE5656] text-white rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Pagination;
