import { useState, useEffect } from "react";
import { callGetAllJobActive } from "../../service/job/api";
import { useSelector } from "react-redux";
import { callGetJobCareByCandidateID } from "../../service/jobcare/api";
import { callGetAllAppliedJobByCandidate } from "../../service/applyJob/api";

const fetchDataAppliedJob = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const no = Math.min(currentPage, totalPages);
      try {
        const result = await callGetAllAppliedJobByCandidate(no, 5);
        console.log("result in fetch data applied", result);
        setData(result.data);
        setTotalPages(result.totalPages);
        setTotalItems(result.totalItems);
        setLoading(false);
      } catch (err) {
        console.log("Lỗi khi tải dữ liệu:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);
  return { loading, data, totalPages, totalItems, currentPage, setCurrentPage };
};

export default fetchDataAppliedJob;
