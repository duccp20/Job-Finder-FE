import { useState, useEffect } from "react";
import { callGetAllJobActive } from "../../service/job/api";
import { useSelector } from "react-redux";
import { callGetJobCareByCandidateID } from "../../service/jobcare/api";

const fetchDataJobCare = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const candidateID = useSelector((state) => state.candidate.id);
  console.log("candidateID", candidateID);
  useEffect(() => {
    const fetchData = async () => {
      const no = Math.min(currentPage, totalPages);
      try {
        const result = await callGetJobCareByCandidateID(candidateID, no, 5);
        setData(result.data);
        setTotalPages(result.totalPages);
        setLoading(false);
      } catch (err) {
        console.log("Lỗi khi tải dữ liệu:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);
  return { loading, data, setData, totalPages, currentPage, setCurrentPage };
};

export default fetchDataJobCare;
