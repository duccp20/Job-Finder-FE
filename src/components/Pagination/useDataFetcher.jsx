import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const useDataFetcher = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const totalPages = 300;
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const page = Math.min(currentPage + 1, totalPages);
      try {
        const result = await axios.get(`${API_URL}?page=${page}`);
        setPages(result.data);
        setLoading(false);
      } catch (err) {
        console.log("Lỗi khi tải dữ liệu:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);
  return { loading, pages, totalPages, currentPage, setCurrentPage };
};

export default useDataFetcher;
