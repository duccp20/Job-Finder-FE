import React from "react";
import HeaderHome from "../../components/HeaderHome";

const Recruitment = () => {
  return (
    <div>
      <HeaderHome />
      <div className=" w-full flex flex-col gap-[36px] items-center">
        <form className="w-[80%] flex justify-between items-center h-auto rounded-[6px] border-[0.5px] border-[#FE5656] py-[12px] px-[18px] my-[40px]">
          <div className="flex items-end flex-grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              htmlFor="findjob"
            >
              <g clip-path="url(#clip0_937_516)">
                <path
                  d="M18.5658 17.332L14.1238 12.6562C15.1339 11.0777 15.6323 9.10546 15.3655 7.00389C14.9105 3.42928 12.1273 0.520299 8.72808 0.0672912C3.67416 -0.605873 -0.575609 3.86756 0.0639337 9.18749C0.494402 12.7672 3.25831 15.6992 6.65456 16.1758C8.65104 16.4566 10.5251 15.9322 12.0243 14.8687L16.4663 19.5445C17.0459 20.1547 17.9859 20.1547 18.5656 19.5445C19.1447 18.9336 19.1447 17.9414 18.5658 17.332ZM2.93531 8.12499C2.93531 5.36796 5.06613 3.12499 7.68531 3.12499C10.3045 3.12499 12.4353 5.36796 12.4353 8.12499C12.4353 10.882 10.3045 13.125 7.68531 13.125C5.06613 13.125 2.93531 10.8828 2.93531 8.12499Z"
                  fill="url(#paint0_linear_937_516)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_937_516"
                  x1="9.49996"
                  y1="0"
                  x2="9.49996"
                  y2="20.0021"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFB950" />
                  <stop offset="1" stop-color="#FE5656" />
                </linearGradient>
                <clipPath id="clip0_937_516">
                  <rect width="19" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              type="text"
              name="findjob"
              id="findjob"
              placeholder="Tìm kiếm việc làm"
              className="placeholder:text-[#626262] pl-[10px] w-full"
            />
          </div>

          <div className="flex items-end pr-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
            >
              <path
                d="M6.16629 20.5731C4.25375 18.1845 0 12.3953 0 9.14349C0 5.1982 3.14946 2 7.03463 2C10.9183 2 14.0693 5.1982 14.0693 9.14349C14.0693 12.3953 9.78253 18.1845 7.90297 20.5731C7.45231 21.1423 6.61695 21.1423 6.16629 20.5731ZM7.03463 11.5246C8.32798 11.5246 9.37951 10.4568 9.37951 9.14349C9.37951 7.83013 8.32798 6.76232 7.03463 6.76232C5.74129 6.76232 4.68975 7.83013 4.68975 9.14349C4.68975 10.4568 5.74129 11.5246 7.03463 11.5246Z"
                fill="url(#paint0_linear_937_520)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_937_520"
                  x1="7.03463"
                  y1="2"
                  x2="7.03463"
                  y2="21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFB950" />
                  <stop offset="1" stop-color="#FE5656" />
                </linearGradient>
              </defs>
            </svg>
            <input
              type="text"
              name="district"
              id="district"
              placeholder="Khu vực"
              className="placeholder:text-[#626262] "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              className="cursor-pointer"
            >
              <g clip-path="url(#clip0_937_523)">
                <path
                  d="M7.99979 13.5C7.65863 13.5 7.31729 13.3901 7.05729 13.1704L0.390625 7.54541C-0.130208 7.10596 -0.130208 6.39404 0.390625 5.95459C0.911458 5.51514 1.75521 5.51514 2.27604 5.95459L7.99979 10.7859L13.7248 5.95547C14.2456 5.51602 15.0894 5.51602 15.6102 5.95547C16.131 6.39492 16.131 7.10684 15.6102 7.54629L8.94354 13.1713C8.68312 13.391 8.34146 13.5 7.99979 13.5Z"
                  fill="url(#paint0_linear_937_523)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_937_523"
                  x1="8.00042"
                  y1="5.625"
                  x2="8.00042"
                  y2="13.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFB950" />
                  <stop offset="1" stop-color="#FE5656" />
                </linearGradient>
                <clipPath id="clip0_937_523">
                  <rect width="16" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="">
            <button
              className="shadow-md text-center text-base not-italic font-bold text-white rounded-[4px] px-[30px] py-[6px] bg-gradientCustom"
              type="submit"
            >
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-[6px] border-[2px] border-[#FE5656] px-[21px] py-[15px] my-[15px] flex justify-between">
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
          <div className="flex justify-between items-end">
            <span className="inline-block p-[10px] text-gray-600 text-xs not-italic font-semibold bg-[#F3F9FC]">
              Front end
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[10px]">
          <button className="bg-[#FE5656] text-white text-base not-italic font-bold rounded-[4px] px-[30px] py-[10px]">
            ỨNG TUYỂN NGAY
          </button>
          <div className="border-[2px] border-[#FE5656] relative">
            <button className=" text-[#FE5656] text-base not-italic font-bold rounded-[4px] px-[30px] py-[10px] mx-[20px]">
              LƯU TIN
            </button>
            <span className="absolute top-[50%] translate-y-[-50%] right-[20%]">
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
          </div>
        </div>
      </div>
      <div className="border-bottom-[2px] ">
        <span>CHI TIẾT </span>
        <span>TỔNG QUAN CÔNG TY</span>
      </div>
    </div>
  );
};

export default Recruitment;
