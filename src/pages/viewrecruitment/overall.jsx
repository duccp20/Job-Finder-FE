import React, { useState } from "react";
import HeaderHome from "../../components/HeaderHome";
import SearchBar from "../../components/SearchBatr/search";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewRecruitmentOverall = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <HeaderHome />
      </div>
      {/* <SearchBar /> */}

      <div className="m-auto mb-[10px] mt-[100px] w-[90%] rounded-[6px] border-[2px] border-[#FE5656] py-[45px]">
        <div className="flex items-center justify-between px-[40px]">
          <div className="flex flex-col">
            <div className="flex">
              <img
                src="https://source.unsplash.com/random"
                alt=""
                className="mr-[20px] h-[90px] w-[90px] rounded-[8px] border border-[#7D7D7D] object-cover"
              />
              <div className="flex flex-grow flex-col justify-between">
                <h3 className="text-xl font-bold not-italic text-red-500">
                  Thực tập Java
                </h3>
                <span>Công ty R2S</span>
                <div className="flex items-baseline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_194_975)">
                      <path
                        d="M5.32544 15.6748C3.6737 13.8549 0 9.44412 0 6.96658C0 3.96065 2.71999 1.52393 6.07536 1.52393C9.42947 1.52393 12.1507 3.96065 12.1507 6.96658C12.1507 9.44412 8.44855 13.8549 6.82529 15.6748C6.43609 16.1085 5.71464 16.1085 5.32544 15.6748ZM6.07536 8.7808C7.19234 8.7808 8.10048 7.96724 8.10048 6.96658C8.10048 5.96593 7.19234 5.15236 6.07536 5.15236C4.95838 5.15236 4.05024 5.96593 4.05024 6.96658C4.05024 7.96724 4.95838 8.7808 6.07536 8.7808Z"
                        fill="#FE5656"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_194_975">
                        <rect width="19" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-base font-light not-italic text-gray-800">
                    Hồ Chí Minh
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-[10px] flex items-end justify-between">
              <span className=" bg-[#F3F9FC] p-[10px] text-xs font-semibold not-italic text-gray-600">
                Front end
              </span>
            </div>
          </div>
          {/* logo edit recruitment */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="39"
            viewBox="0 0 47 39"
            fill="none"
            className=" flex flex-col"
          >
            <rect
              x="0.25"
              y="0.25"
              width="46.5"
              height="38.5"
              rx="4.75"
              stroke="#7D7D7D"
              stroke-opacity="0.5"
              stroke-width="0.5"
            />
            <path
              d="M5.875 16.25H27.4167V19.5H5.875V16.25ZM5.875 13H27.4167V9.75H5.875V13ZM5.875 26H19.5833V22.75H5.875V26ZM35.2696 20.9137L36.66 19.76C36.8412 19.6094 37.0564 19.4898 37.2933 19.4083C37.5302 19.3268 37.7841 19.2848 38.0406 19.2848C38.2971 19.2848 38.5511 19.3268 38.788 19.4083C39.0249 19.4898 39.2401 19.6094 39.4212 19.76L40.8117 20.9137C41.5754 21.5475 41.5754 22.5712 40.8117 23.205L39.4212 24.3587L35.2696 20.9137ZM33.8792 22.0675L23.5 30.68V34.125H27.6517L38.0308 25.5125L33.8792 22.0675Z"
              fill="#7D7D7D"
              fill-opacity="0.7"
            />
          </svg>
        </div>
        <div className="mt-[20px] flex w-full cursor-pointer items-center gap-7 py-[10px] pl-[40px] text-[16px] font-[600] shadow-banner">
          <span
            className={`border-b-[2px] border-transparent hover:border-b-[#FE5656] hover:text-[#FE5656] ${
              window.location.pathname == "/viewrecruitment"
                ? "border-b-[#FE5656] text-[#FE5656]"
                : "text-black"
            }`}
            onClick={() => navigate("")}
          >
            CHI TIẾT
          </span>
          <span
            className={`border-b-[2px] border-transparent hover:border-b-[#FE5656] hover:text-[#FE5656] ${
              window.location.pathname == "/viewrecruitment/viewcompany"
                ? "border-b-[#FE5656] text-[#FE5656]"
                : "text-black"
            }`}
            onClick={() => navigate("viewcompany")}
          >
            TỔNG QUAN CÔNG TY
          </span>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ViewRecruitmentOverall;
