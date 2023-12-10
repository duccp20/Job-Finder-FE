import React from "react";

const RecruitmentItem = (props) => {
  return (
    <div>
      <div className="flex gap-5 items-center px-[10%] pt-[10%]">
        <span>{props.icon}</span>
        <div>
          <p className="text-[#333333B2] my-[10px]">{props.title}</p>
          <p className="font-[600] mt-[10px]">{props.detail}</p>
        </div>
      </div>
      <div className=" border-t border-gray-500 mx-[10%] mt-[20px]"></div>
    </div>
  );
};

export default RecruitmentItem;
