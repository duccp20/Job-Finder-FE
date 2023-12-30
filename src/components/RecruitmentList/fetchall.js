import { useState, useEffect } from "react";
import {
  callGetActiveJobByCompanyID,
  callGetDisableJobByCompanyID,
  callGetAllJobByCompanyID,
} from "../../service/job/api";

const useFetchJobs = (initialFetchFunction) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async (fetchFunction) => {
    const no = Math.min(currentPage, totalPages);
    try {
      const result = await fetchFunction(no, 3);
      setData(result.data);
      setTotalPages(result.totalPages);
      setLoading(false);
    } catch (err) {
      console.log("Lỗi khi tải dữ liệu:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(initialFetchFunction);
  }, [currentPage, initialFetchFunction]);

  return { loading, data, totalPages, currentPage, setCurrentPage, fetchData };
};

export default useFetchJobs;
