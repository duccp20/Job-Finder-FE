import React from "react";
import HeaderHome from "../../components/HeaderHome";
import JobItem from "../../components/JobItem";

const AppliedJob = () => {
  return (
    <div>
      <HeaderHome></HeaderHome>
      <div className=" flex w-full mt-[36px] ml-[100px] mr-[374px] ">
        <div className="w-[70%] pr-[50px]">
          <div className="rounded-[5px] bg-[#FE5656] h-[117px] text-[#ffffff] ">
            <p className="text-[22px] font-[700px] pt-[20px] pl-[18px]  ">
              Danh sách việc làm đã ứng tuyển
            </p>
            <p className="text-[16px] font-[400px] pt-[25px]  pl-[18px]">
              Xem lại danh sách những việc làm mà bạn đã ứng tuyển trước đó.
            </p>
          </div>
          <p className="mt-[30px] mb-[20px]">Bạn đã ứng tuyển 5 việc làm</p>

          <div>
            <JobItem></JobItem>
            <JobItem></JobItem>
            <JobItem></JobItem>
            <JobItem></JobItem>
            <JobItem></JobItem>
            <JobItem></JobItem>
          </div>
          <Pagination></Pagination>
        </div>

        <div></div>

        <div className="rounded-[5px] bg-[#7D7D7D82] w-[230px] h-[70vh]"></div>
      </div>
    </div>
  );
};

export default AppliedJob;
