import React from "react";
import HeaderHome from "../../components/HeaderHome";
import Pagination from "../../components/Pagination";
import AppliedJobItem from "../../components/JobItem/appliedjobitem";
import fetchDataAppliedJob from "./fetchDataAppliedJob";
import Loading from "../../components/Loading";

const AppliedJob = () => {
  const { loading, data, totalPages, totalItems, currentPage, setCurrentPage } =
    fetchDataAppliedJob();
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="pt-[50px]">
            <div className="mt-[70px] flex w-full px-[100px]">
              <div className="w-full pr-[50px]">
                <div className=" h-[117px] rounded-[5px] bg-[#FE5656] text-[#ffffff]">
                  <p className="pl-[18px] pt-[20px] text-[22px] font-[700px]  ">
                    Danh sách việc làm đã ứng tuyển
                  </p>
                  <p className="pl-[18px] pt-[25px] text-[16px]  font-[400px]">
                    Xem lại danh sách những việc làm mà bạn đã ứng tuyển trước
                    đó.
                  </p>
                </div>
                <p className="mb-[20px] mt-[30px]">
                  Bạn đã ứng tuyển {totalItems} việc làm
                </p>
                <div className="flex w-full flex-wrap">
                  {data &&
                    data.map((job) => (
                      <div className="w-1/2 p-2">
                        <AppliedJobItem
                          key={job.id}
                          logo={job.jobDTO.companyDTO.logo}
                          id={job.jobDTO.id}
                          name={job.jobDTO.name}
                          companyName={job.jobDTO.companyDTO.name}
                          location={job.jobDTO.province}
                          appliedDate={job.appliedDate}
                        />
                      </div>
                    ))}
                </div>

                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>

              <div></div>

              {/* <div className="h-[70vh] w-[230px] rounded-[5px] bg-[#7D7D7D82]"></div> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AppliedJob;
