import React from "react";

const RecruitmentHeader = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-[40px]">
        <div className="flex flex-col">
          <div className="flex">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="rounded-[8px] border border-[#7D7D7D] object-cover h-[90px] w-[90px] mr-[20px]"
            />
            <div className="flex flex-col justify-between flex-grow">
              <h3 className="text-red-500 text-xl not-italic font-bold">
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
                <span className="text-gray-800 text-base not-italic font-light">
                  Hồ Chí Minh
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-[10px]">
            <span className="inline-block p-[10px] text-gray-600 text-xs not-italic font-semibold bg-[#F3F9FC]">
              Front end
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[10px]">
          <button className="flex-1 px-5 py-2 bg-[#FE5656] text-white text-base not-italic font-bold rounded-[4px] hover:outline hover:outline-[#FE5656] hover:bg-white hover:text-[#FE5656]">
            ỨNG TUYỂN NGAY
          </button>
          <button className="flex-1 pr-5 py-2 text-[#FE5656] text-base not-italic font-bold rounded-[4px]  border-[2px] border-solid border-[#FE5656] relative">
            LƯU TIN
            <span className="absolute top-[50%] translate-y-[-50%] right-[15%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
              >
                <path
                  d="M17.4175 0.9375H2.48821C1.11399 0.9375 0 1.78229 0 2.82442V19.8027C0 20.7737 1.38873 21.3783 2.49443 20.8893L9.95283 17.5896L17.4123 20.8889C18.5164 21.3437 19.9057 20.7737 19.9057 19.8027V2.82442C19.9057 1.78229 18.7912 0.9375 17.4175 0.9375ZM17.4175 18.706L9.95283 15.4039L2.48821 18.706V3.06028C2.48821 2.9278 2.62454 2.82442 2.75258 2.82442H17.0598C17.2827 2.82442 17.4175 2.9278 17.4175 3.06028V18.706Z"
                  fill="#FE5656"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="w-full cursor-pointer shadow-banner py-[10px] flex items-center gap-7 text-[16px] font-[600] pl-[40px] mt-[20px]">
        <span className="border-b-[2px] border-transparent hover:text-[#FE5656] hover:border-b-[#FE5656]">
          CHI TIẾT
        </span>
        <span className="border-b-[2px] border-transparent hover:text-[#FE5656] hover:border-b-[#FE5656] ">
          TỔNG QUAN CÔNG TY
        </span>
      </div>
    </div>
  );
};

export default RecruitmentHeader;
