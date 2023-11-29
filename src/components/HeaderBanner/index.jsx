import React from "react";

const HeaderBanner = (props) => {
  return (
    <div className="khung-header bg-[#FE5656] w-full h-[55px] flex justify-between py-[14px] px-[44px]">
      <span className="text-xl not-italic font-bold text-white font-openSans ">
        Thông tin cá nhân
      </span>
      <a href="#" className="">
        <img src={pen} alt="" />
      </a>
    </div>
  );
};

export default HeaderBanner;
