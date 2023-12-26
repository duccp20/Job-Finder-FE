import React from "react";
import useDataFetcher from "../../components/Pagination/useDataFetcher";
import PopupHr from "../../components/PopupHr";
import RecruitmentList from "../../components/RecruitmentList";
import HeaderHR from "../../components/HeaderHR/headerHr";

const RecruitmentListPage = (props) => {
  const { loading, pages, totalPages, currentPage, setCurrentPage } =
    useDataFetcher();
  return (
    <div className="h-screen w-full">
      {/* <PopupHr></PopupHr> */}


      <HeaderHR></HeaderHR>
      <div className="mx-auto my-[90px] h-full w-[87%] rounded-[10px] border px-[40px] pb-[44px] pt-[30px] shadow-banner">
        <h2 className="mb-[20px] text-xl font-bold not-italic">Thống kê tin</h2>
        <div className="flex justify-between">
          <div className="mb-[20px]  flex w-[59%]">
            <div className="mr-[24px] w-[30%] bg-[#F1F1F1] p-[20px] ">
              <p className="text-2xl font-bold not-italic text-[#FE5656]">
                {/* {props.total}  */} 30
              </p>
              <p className="text-base font-normal not-italic text-black">
                Tổng số tin đăng
              </p>
            </div>
            <div className="mr-[24px] w-[30%] bg-[#F1F1F1] p-[20px]">
              <p className="text-2xl font-bold not-italic text-[#FE5656]">
                {/* {props.open}  */} 3
              </p>
              <p className="text-base font-normal not-italic text-black">
                Tin đang mở
              </p>
            </div>
            <div className="mr-[24px] w-[30%] bg-[#F1F1F1] p-[20px]">
              <p className="text-2xl font-bold not-italic text-[#FE5656]">
                {/* {props.closed}  */} 27
              </p>
              <p className="text-base font-normal not-italic text-black">
                Tin đã đóng
              </p>
            </div>
          </div>
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
            <span className="cursor-pointer text-base font-bold not-italic text-white">
              Đăng tin tuyển dụng mới
            </span>
          </div>
        </div>
        <h2 className="mb-[12px] text-xl font-bold not-italic">
          Danh sách tin tuyển dụng
        </h2>
        <RecruitmentList></RecruitmentList>
      </div>
    </div>
  );
};

export default RecruitmentListPage;
