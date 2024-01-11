import { useEffect, useState } from "react";
import {
  callFilterJobInHomePage,
  callGetAllJobActive,
} from "../../service/job/api";

const useJobFilter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredCurrentPage, setFilteredCurrentPage] = useState(0);
  const [filteredTotalPages, setFilteredTotalPages] = useState(0);

  const filterJobs = async (
    scheduleReq,
    locationReq,
    majorReq,
    selectedProvince,
    search,
    page,
  ) => {
    setIsLoading(true);
    try {
      const no = Math.min(filteredCurrentPage, filteredTotalPages);

      if (
        scheduleReq === "" &&
        locationReq === "" &&
        majorReq === "" &&
        search === "" &&
        selectedProvince === ""
      ) {
        return;
      }
      const res = await callFilterJobInHomePage(
        no,
        5,
        scheduleReq,
        locationReq,
        majorReq,
        selectedProvince,
        search,
      );
      console.log(res);
      setFilteredJobs(res.data);
      setFilteredTotalPages(res.totalPages);
    } catch (error) {
      console.error("Lỗi khi lọc công việc:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    filteredJobs,
    filteredTotalPages,
    filteredCurrentPage,
    setFilteredCurrentPage,
    filterJobs,
  };
};

export default useJobFilter;
