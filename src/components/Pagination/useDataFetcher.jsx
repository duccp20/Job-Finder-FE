import { useState, useEffect } from "react";
import { callGetAllJobActive } from "../../service/job/api";

const useDataFetcher = () => {
  const [loading, setLoading] = useState(true);
  const [dataJob, setDataJob] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const no = Math.min(currentPage, totalPages);
      try {
        const result = await callGetAllJobActive(no, 5);
        setDataJob(result.data);
        setTotalPages(result.totalPages);
        setLoading(false);
      } catch (err) {
        console.log("Lỗi khi tải dữ liệu:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);
  return { loading, dataJob, totalPages, currentPage, setCurrentPage };
};

export default useDataFetcher;
