import React from "react";
import useDataFetcher from "../../components/Pagination/useDataFetcher";
import RecruitmentList from "../../components/RecruitmentList";
import Table from "../../components/Table";
import HeaderHR from "../../components/HeaderHR/headerHr";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RecruitmentListOpen = ({}) => {
  const { loading, pages, totalPages, currentPage, setCurrentPage } =
    useDataFetcher();

  const navigate = useNavigate();

  return (
    <div>
      <div className=" mx-auto mb-[20px] mt-[90px] flex h-full w-[87%] rounded-[10px] border-[2px] border-[#DEDEDE]">
        <div className="item w-[40%] border-[#DEDEDE] px-[30px] py-[40px]">
          <h2 className=" relative mb-[20px] text-xl font-bold not-italic text-black after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:bg-[#f3bd50] after:content-['']">
            Tin tuyển dụng
          </h2>
          <div className="flex justify-between ">
            <div className="">
              <div className="mb-[30px] rounded-[10px] border border-[#DEDEDE] px-[5px] py-[12px] shadow-banner">
                <p className="text-2xl font-semibold not-italic text-black">
                  12
                </p>
                <p className="text-xs font-semibold not-italic text-[#7D7D7D]">
                  Tổng số tin đăng
                </p>
              </div>
              <div className="mb-[30px] h-auto rounded-[10px] border border-[#DEDEDE] px-[5px] py-[12px] shadow-banner">
                <p className="text-2xl font-semibold not-italic text-black">
                  12
                </p>
                <p className="text-xs font-semibold not-italic text-[#7D7D7D]">
                  Tin đang mở
                </p>
              </div>
              <div className="h-auto rounded-[10px] border border-[#DEDEDE] px-[5px] py-[12px] shadow-banner">
                <p className="text-2xl font-semibold not-italic text-black">
                  12
                </p>
                ``
                <p className="text-xs font-semibold not-italic text-[#7D7D7D]">
                  Tin đã đóng
                </p>
              </div>
            </div>
            <div className="flex-1 pl-[20px]">
              <img
                src="https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
                alt=""
                className="w-full rounded-[10px] object-cover "
              />
            </div>
          </div>
        </div>

        <div className="item w-[50%] border-x-[3px] border-[#DEDEDE] px-[30px] py-[40px]">
          <h2 className=" relative mb-[20px] text-xl font-bold not-italic text-black after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:bg-[#f3bd50] after:content-['']">
            Tin đăng mới & lượt ứng tuyển
          </h2>

          <div className="flex-1 pl-[20px]">
            <img
              src="https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
              alt=""
              className="w-full rounded-[10px] object-cover "
            />
          </div>
        </div>
        <div className="item w-[45%] border-[#DEDEDE] py-[40px] pr-[30px]">
          <h2 className=" after: relative mx-[30px] mb-[20px] text-xl font-bold not-italic text-black after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:bg-[#f3bd50] after:content-['']">
            Thống kê
          </h2>
          <Table></Table>
        </div>
      </div>
      <div className="mx-auto my-[90px] h-full w-[87%] rounded-[10px] border px-[40px] pb-[44px] pt-[30px] shadow-banner">
        <div className="mb-[36px] flex justify-between">
          <h2 className="mb-[12px] text-xl font-bold not-italic">
            Danh sách tin tuyển dụng
          </h2>
          <div className="flex  h-[45px] items-center gap-[15px] bg-[#FE5656] px-[20px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
            >
              <path
                d="M18 0.5H2C0.89 0.5 0.00999999 1.39 0.00999999 2.5L0 14.5C0 15.61 0.89 16.5 2 16.5H12V14.5H2V8.5H20V2.5C20 1.39 19.11 0.5 18 0.5ZM18 4.5H2V2.5H18V4.5ZM22 13.5V15.5H19V18.5H17V15.5H14V13.5H17V10.5H19V13.5H22Z"
                fill="white"
              />
            </svg>
            <span
              className="cursor-pointer text-base font-bold not-italic text-white"
              onClick={() => navigate("job/create")}
            >
              Đăng tin tuyển dụng mới
            </span>
          </div>
        </div>
        <RecruitmentList></RecruitmentList>
      </div>
    </div>
  );
};

export default RecruitmentListOpen;
