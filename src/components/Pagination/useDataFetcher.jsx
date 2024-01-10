import { useState, useEffect } from "react";
import { callGetAllJobActive } from "../../service/job/api";
import { callGetAllCandidateJobCare } from "../../service/jobcare/api";
import { useSelector } from "react-redux";

const useDataFetcher = () => {
  const [loading, setLoading] = useState(false);
  const [dataJob, setDataJob] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [jobCare, setJobCare] = useState([]);
  const candidateID = useSelector((state) => state.candidate.id);
  console.log("candidateId", candidateID);
  const markAppliedJobs = async (allJobsResponse, jobCareResponse) => {
    // Duyệt qua từng job trong allJobsResponse
    allJobsResponse.forEach((job) => {
      job.applied = false; //default = false
      // Kiểm tra mỗi job trong jobCareResponse
      jobCareResponse.forEach((jobCare) => {
        // Nếu id === candidateID
        if (
          job.id === jobCare.jobDTO.id &&
          jobCare.candidateDTO.id === candidateID
        ) {
          console.log("jobCare", jobCare);
          // Thêm thuộc tính 'applied'
          job.applied = true;
        }
      });
    });

    setDataJob(allJobsResponse);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const no = Math.min(currentPage, totalPages);
      try {
        const result = await callGetAllJobActive(currentPage, 5);
        console.log("result", result);
        const resOfApplied = await callGetAllCandidateJobCare();
        console.log("resOfApplied", resOfApplied);
        setJobCare(resOfApplied);
        await markAppliedJobs(result.data, resOfApplied);
        setTotalPages(result.totalPages);
      } catch (err) {
        console.log("Lỗi khi tải dữ liệu:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  return { loading, dataJob, totalPages, currentPage, setCurrentPage };
};

export default useDataFetcher;
