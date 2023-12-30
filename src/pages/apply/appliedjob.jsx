import React from "react";
import HeaderHome from "../../components/HeaderHome";
import Pagination from "../../components/Pagination";
import AppliedJobItem from "../../components/JobItem/appliedjobitem";

const AppliedJob = () => {
  return (
    <div>
      <div className="pt-[50px]">
        <div className="mt-[70px] flex w-full px-[100px]">
          <div className="w-[70%] pr-[50px]">
            <div className=" h-[117px] rounded-[5px] bg-[#FE5656] text-[#ffffff]">
              <p className="pl-[18px] pt-[20px] text-[22px] font-[700px]  ">
                Danh sách việc làm đã ứng tuyển
              </p>
              <p className="pl-[18px] pt-[25px] text-[16px]  font-[400px]">
                Xem lại danh sách những việc làm mà bạn đã ứng tuyển trước đó.
              </p>
            </div>
            <p className="mb-[20px] mt-[30px]">Bạn đã ứng tuyển 5 việc làm</p>

            <div>
              <AppliedJobItem></AppliedJobItem>
              <AppliedJobItem></AppliedJobItem>
              <AppliedJobItem></AppliedJobItem>
              <AppliedJobItem></AppliedJobItem>
              <AppliedJobItem></AppliedJobItem>
              <AppliedJobItem></AppliedJobItem>
            </div>
            <Pagination></Pagination>
          </div>

          <div></div>

          <div className="h-[70vh] w-[230px] rounded-[5px] bg-[#7D7D7D82]"></div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
