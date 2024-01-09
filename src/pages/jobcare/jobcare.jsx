import React from "react";
import HeaderHome from "../../components/HeaderHome";
import Pagination from "../../components/Pagination";
import AppliedJobItem from "../../components/JobItem/appliedjobitem";
import JobItem from "../../components/JobItem";
import fetchDataJobCare from "./fetchDataJobCare";
import Loading from "../../components/Loading";
import { callDeleteJobCareByCandidateID } from "../../service/jobcare/api";

const JobCare = () => {
  const {
    loading,
    data,
    totalPages,
    setData,
    totalItems,
    currentPage,
    setCurrentPage,
  } = fetchDataJobCare();

  const handleDeleteJobCare = async (id) => {
    console.log("id delete", id);
    try {
      const res = await callDeleteJobCareByCandidateID(id);
      console.log("res delete", res);

      // Cập nhật lại danh sách công việc sau khi xóa
      const updatedData = data.filter((job) => job.id !== id);
      setData(updatedData); // Cập nhật state
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div>
            <div className="pt-[50px]">
              <div className=" mt-[70px] flex w-full px-[100px]">
                <div className="w-[70%] pr-[50px]">
                  <div className=" h-[117px] rounded-[5px] bg-[#FE5656] text-[#ffffff]">
                    <p className="pl-[18px] pt-[20px] text-[22px] font-[700px]  ">
                      Danh sách việc làm đã lưu
                    </p>
                    <p className="pl-[18px] pt-[25px] text-[16px]  font-[400px]">
                      Xem lại danh sách những việc làm mà bạn đã ứng lưu trước
                      đó.
                    </p>
                  </div>
                  <p className="mb-[20px] mt-[30px]">
                    Bạn đã ứng tuyển {totalItems} việc làm
                  </p>

                  <div>
                    {data &&
                      data.map((job) => (
                        <JobItem
                          key={job.id}
                          id={job.id}
                          name={job.jobDTO.name}
                          companyDTO={job.jobDTO.companyDTO}
                          province={job.jobDTO.province}
                          positionDTOs={job.jobDTO.positionDTOs}
                          scheduleDTOs={job.jobDTO.scheduleDTOs}
                          majorDTOs={job.jobDTO.majorDTOs}
                          amount={job.jobDTO.amount}
                          startDate={job.jobDTO.startDate}
                          endDate={job.jobDTO.endDate}
                          onDelete={() => handleDeleteJobCare(job.id)}
                        ></JobItem>
                      ))}
                  </div>

                  <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  ></Pagination>
                </div>

                <div></div>

                <div className="h-[70vh] w-[230px] rounded-[5px] bg-[#7D7D7D82]"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default JobCare;
