import React, { useEffect, useState } from "react";
import logo from "/images/logo-user.jpg";
import flag from "/svg/flag.svg";
import guest from "/images/guest-logo.jpg";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="border-1 fixed top-0 z-[999] flex h-[70px] w-full items-center justify-between border-solid border-[rgb(209,209,209)] bg-white shadow-custom">
        <div className=" flex cursor-pointer items-center justify-between gap-5 pl-[26.75px] leading-10">
          <div>
            <span onClick={() => navigate("/")}>
              <img src={logo} alt="" />
            </span>
          </div>
        </div>

        <div className="flex w-[18%] items-center justify-end gap-3 pr-[26.75px]">
          <a
            href="#
              "
          >
            <div className="flex items-center justify-center gap-2">
              <img src={flag} alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
              >
                <path
                  d="M7.99979 7.875C7.65863 7.875 7.31729 7.76514 7.05729 7.54541L0.390625 1.92041C-0.130208 1.48096 -0.130208 0.769043 0.390625 0.32959C0.911458 -0.109863 1.75521 -0.109863 2.27604 0.32959L7.99979 5.16094L13.7248 0.330469C14.2456 -0.108985 15.0894 -0.108985 15.6102 0.330469C16.131 0.769922 16.131 1.48184 15.6102 1.92129L8.94354 7.54629C8.68312 7.76602 8.34146 7.875 7.99979 7.875Z"
                  fill="black"
                />
              </svg>
            </div>
          </a>

          <div className="relative flex w-[80%] items-center justify-between">
            <div className="relative z-[2] flex w-full cursor-pointer flex-col hover:text-[#FE5656]">
              <div className="w-[100%] rounded-[25px] border-[2px] border-[#C5C5C5] px-[20px] py-[14px] font-[700] shadow-bannerLighter">
                Khách
              </div>
            </div>
            <div className="absolute -right-[15px] z-[10]">
              <a href="#">
                <img src={guest} className="h-full w-full rounded-[50%]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAdmin;
