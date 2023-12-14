import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import axios from "axios";

const Pagination = () => {
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
  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <ReactPaginate
          breakLabel={<span className="mr-[12px]">...</span>}
          nextLabel={
            <span className="w-10 h-10 flex justify-center items-center">
              <IoCaretForwardSharp />
            </span>
          }
          // onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={15}
          previousLabel={
            <span className="w-10 h-10 flex justify-center items-center bg-gra">
              <IoCaretBackSharp />
            </span>
          }
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center items-center mb-[20px] mt-[20px]"
          pageClassName="block w-8 h-8 hover:rounded-full hover:bg-gray-300 flex justify-center items-center mr-[12px]"
          activeClassName="bg-[#FE5656] text-white rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Pagination;
