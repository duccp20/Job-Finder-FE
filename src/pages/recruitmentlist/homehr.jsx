import React from "react";
import OverallHr from "./Overall";
const HomeHr = () => {
  return (
    <>
      <div className=" mx-auto mb-[20px] mt-[90px] flex h-full w-[87%] rounded-[10px] border-[2px] border-[#DEDEDE]">
        <div className="item w-[40%]  border-[#DEDEDE] px-[30px] py-[40px]">
          <h2 className=" relative mb-[20px] text-xl font-bold not-italic text-black after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:bg-[#f3bd50] after:content-['']">
            Tin tuyển dụng
          </h2>
          <div className="flex justify-between ">
            <div className="">
              <div className="mb-[30px] rounded-[10px] border border-[#DEDEDE] px-[5px] py-[12px]">
                <p className="text-2xl font-semibold not-italic text-black">
                  12
                </p>
                <p className="text-xs font-semibold not-italic text-[#7D7D7D]">
                  Tổng số tin đăng
                </p>
              </div>
              <div className="mb-[30px] h-auto rounded-[10px] border border-[#DEDEDE] px-[5px] py-[12px] shadow-custom">
                <p className="text-2xl font-semibold not-italic text-black">
                  12
                </p>
                <p className="text-xs font-semibold not-italic text-[#7D7D7D]">
                  Tin đang mở
                </p>
              </div>
              <div className="h-auto rounded-[10px] border border-[#DEDEDE] px-[5px] py-[12px] shadow-custom">
                <p className="text-2xl font-semibold not-italic text-black">
                  12
                </p>
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
        <div className="item w-[45%] border-[#DEDEDE] px-[30px] py-[40px]">
          <h2 className=" relative mb-[20px] text-xl font-bold not-italic text-black after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:bg-[#f3bd50] after:content-['']">
            Thống kê
          </h2>

          <div className="flex-1 pl-[20px]">
            <img
              src="https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
              alt=""
              className="w-full rounded-[10px] object-cover "
            />
          </div>
        </div>
      </div>
      <OverallHr></OverallHr>
    </>
  );
};

export default HomeHr;
