import React from "react";

const ParameterAdmin = (props) => {
  return (
    <div className="flex w-[25%] items-center gap-[20px] rounded-[10px] py-[30px] pl-[25px] shadow-banner">
      <span className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="60"
          viewBox="0 0 64 60"
          fill="none"
        >
          <ellipse cx="32" cy="30" rx="32" ry="30" fill="#FE5656" />
        </svg>
        <span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          {props.icon}
        </span>
      </span>
      <div>
        <p className="mb-[7px] text-[30px] font-semibold">{props.parameter}</p>
        <p className="text-[16px] font-semibold text-[#7D7D7D]">{props.text}</p>
      </div>
    </div>
  );
};

export default ParameterAdmin;
