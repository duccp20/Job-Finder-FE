import React from "react";

const RecruitmentItem = (props) => {
  return (
    <div>
      <div className="flex items-center sm:gap-2 sm:px-[15px] sm:pt-[20px] sm:text-[8px] tablet-up:gap-5 tablet-up:px-[30px] tablet-up:pt-[35px]">
        <span className="sm:w-5">{props.icon}</span>
        <div>
          <p className="text-[#333333B2] sm:my-[5px] tablet-up:my-[10px]">
            {props.title}
          </p>
          <p className="font-[600] sm:my-[2px] sm:leading-[12px] tablet-up:mt-[10px] tablet-up:leading-[22px]">
            {props.detail}
          </p>
        </div>
      </div>
      <div className=" mx-[10%] mt-[20px] border-t border-gray-500 md:hidden"></div>
    </div>
  );
};

export default RecruitmentItem;
