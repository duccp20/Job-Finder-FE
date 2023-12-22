import React from "react";
import ParameterAdmin from "../../components/Admin/parameterAdmin";

import pie from "/images/Pie-chart.jpg";
import area from "/images/Area-chart.jpg";
import bar from "/images/Bar-chart.jpg";

const DashBoard = () => {
  return (
    <div className="flex w-[80%] flex-col gap-[20px]">
      <div className=" px-[10px] py-[10px] shadow-banner">Dashboard</div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex gap-[30px]">
          <ParameterAdmin
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="25"
                viewBox="0 0 38 25"
                fill="none"
              >
                <path
                  d="M19 0C20.4027 0 21.748 0.635774 22.7398 1.76746C23.7317 2.89914 24.2889 4.43404 24.2889 6.03448C24.2889 7.63493 23.7317 9.16982 22.7398 10.3015C21.748 11.4332 20.4027 12.069 19 12.069C17.5973 12.069 16.2521 11.4332 15.2602 10.3015C14.2684 9.16982 13.7111 7.63493 13.7111 6.03448C13.7111 4.43404 14.2684 2.89914 15.2602 1.76746C16.2521 0.635774 17.5973 0 19 0ZM8.42226 4.31034C9.26848 4.31034 10.0543 4.56897 10.7343 5.03448C10.5076 7.5 11.1423 9.94828 12.4418 11.8621C11.6863 13.5172 10.1751 14.6552 8.42226 14.6552C7.21994 14.6552 6.06687 14.1102 5.2167 13.1402C4.36654 12.1702 3.88892 10.8546 3.88892 9.48276C3.88892 8.11095 4.36654 6.79532 5.2167 5.82531C6.06687 4.85529 7.21994 4.31034 8.42226 4.31034ZM29.5778 4.31034C30.7801 4.31034 31.9332 4.85529 32.7834 5.82531C33.6335 6.79532 34.1111 8.11095 34.1111 9.48276C34.1111 10.8546 33.6335 12.1702 32.7834 13.1402C31.9332 14.1102 30.7801 14.6552 29.5778 14.6552C27.8249 14.6552 26.3138 13.5172 25.5583 11.8621C26.8758 9.92141 27.4873 7.4762 27.2658 5.03448C27.9458 4.56897 28.7316 4.31034 29.5778 4.31034ZM9.17781 21.9828C9.17781 18.4138 13.5751 15.5172 19 15.5172C24.4249 15.5172 28.8223 18.4138 28.8223 21.9828V25H9.17781V21.9828ZM0.866699 25V22.4138C0.866699 20.0172 3.7227 18 7.59114 17.4138C6.69959 18.5862 6.15559 20.2069 6.15559 21.9828V25H0.866699ZM37.1334 25H31.8445V21.9828C31.8445 20.2069 31.3005 18.5862 30.4089 17.4138C34.2774 18 37.1334 20.0172 37.1334 22.4138V25Z"
                  fill="white"
                />
              </svg>
            }
            parameter="365"
            text="Người dùng"
          ></ParameterAdmin>
          <ParameterAdmin
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="35"
                viewBox="0 0 27 35"
                fill="none"
              >
                <path
                  d="M15.9534 0H4.375C3.21468 0 2.10188 0.460936 1.28141 1.28141C0.460936 2.10188 0 3.21468 0 4.375V30.625C0 31.7853 0.460936 32.8981 1.28141 33.7186C2.10188 34.5391 3.21468 35 4.375 35H21.875C23.0353 35 24.1481 34.5391 24.9686 33.7186C25.7891 32.8981 26.25 31.7853 26.25 30.625V10.2966C26.2499 9.71645 26.0193 9.16014 25.6091 8.75L17.5 0.640938C17.0899 0.230673 16.5336 0.000123894 15.9534 0ZM16.4062 7.65625V3.28125L22.9688 9.84375H18.5938C18.0136 9.84375 17.4572 9.61328 17.047 9.20305C16.6367 8.79281 16.4062 8.23641 16.4062 7.65625ZM5.46875 6.5625H10.9375C11.2276 6.5625 11.5058 6.67773 11.7109 6.88285C11.916 7.08797 12.0312 7.36617 12.0312 7.65625C12.0312 7.94633 11.916 8.22453 11.7109 8.42965C11.5058 8.63477 11.2276 8.75 10.9375 8.75H5.46875C5.17867 8.75 4.90047 8.63477 4.69535 8.42965C4.49023 8.22453 4.375 7.94633 4.375 7.65625C4.375 7.36617 4.49023 7.08797 4.69535 6.88285C4.90047 6.67773 5.17867 6.5625 5.46875 6.5625ZM5.46875 13.125H20.7812C21.0713 13.125 21.3495 13.2402 21.5546 13.4454C21.7598 13.6505 21.875 13.9287 21.875 14.2188V29.5312C21.875 29.8213 21.7598 30.0995 21.5546 30.3046C21.3495 30.5098 21.0713 30.625 20.7812 30.625H5.46875C5.17867 30.625 4.90047 30.5098 4.69535 30.3046C4.49023 30.0995 4.375 29.8213 4.375 29.5312V14.2188C4.375 13.9287 4.49023 13.6505 4.69535 13.4454C4.90047 13.2402 5.17867 13.125 5.46875 13.125Z"
                  fill="white"
                />
              </svg>
            }
            parameter="2,858"
            text="Bài đăng"
          ></ParameterAdmin>
          <ParameterAdmin
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="28"
                viewBox="0 0 32 28"
                fill="none"
              >
                <path
                  d="M24.8889 18.6667H21.7778V21.7778H24.8889M24.8889 12.4444H21.7778V15.5556H24.8889M28 24.8889H15.5556V21.7778H18.6667V18.6667H15.5556V15.5556H18.6667V12.4444H15.5556V9.33333H28M12.4444 6.22222H9.33333V3.11111H12.4444M12.4444 12.4444H9.33333V9.33333H12.4444M12.4444 18.6667H9.33333V15.5556H12.4444M12.4444 24.8889H9.33333V21.7778H12.4444M6.22222 6.22222H3.11111V3.11111H6.22222M6.22222 12.4444H3.11111V9.33333H6.22222M6.22222 18.6667H3.11111V15.5556H6.22222M6.22222 24.8889H3.11111V21.7778H6.22222M15.5556 6.22222V0H0V28H31.1111V6.22222H15.5556Z"
                  fill="white"
                />
              </svg>
            }
            parameter="502"
            text="Công ty"
          ></ParameterAdmin>
          <ParameterAdmin
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M36.6668 14.9997L20.0002 8.33301L3.3335 14.9997L20.0002 21.6663L36.6668 14.9997ZM36.6668 14.9997V24.9997"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 17.666V26.666C10 27.9921 11.0536 29.2639 12.9289 30.2016C14.8043 31.1392 17.3478 31.666 20 31.666C22.6522 31.666 25.1957 31.1392 27.0711 30.2016C28.9464 29.2639 30 27.9921 30 26.666V17.666"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            parameter="206"
            text="Trường học"
          ></ParameterAdmin>
        </div>

        <div className="flex w-full gap-[30px]">
          <div className="flex w-[50%] flex-col rounded-[10px] shadow-banner">
            <h1 className="my-[20px] ml-[20px]">Tổng tài khoản người dùng</h1>
            <hr className=" w-full border-t-2 border-[#DEDEDE]" />
            <div className="flex">
              <div className="mx-[10px] my-[20px] w-[30%] rounded-[10px] py-[20px] pl-[20px] shadow-banner">
                <p className="mb-[7px] text-[30px] font-semibold">201</p>
                <p className="text-[16px] font-semibold text-[#7D7D7D]">
                  Ứng viên
                </p>
              </div>
              <div className="mx-[10px] my-[20px] w-[30%] rounded-[10px] py-[20px] pl-[20px] shadow-banner">
                <p className="mb-[7px] text-[30px] font-semibold">100</p>
                <p className="text-[16px] font-semibold text-[#7D7D7D]">
                  Nhà tuyển dụng
                </p>
              </div>
              <div className="mx-[10px] my-[20px] w-[30%] rounded-[10px] py-[20px] pl-[20px] shadow-banner">
                <p className="mb-[7px] text-[30px] font-semibold">47</p>
                <p className="text-[16px] font-semibold text-[#7D7D7D]">
                  Cộng tác viên
                </p>
              </div>
            </div>
            <img className="mx-auto" src={pie} alt="" />
          </div>
          <div className="flex w-[50%] flex-col rounded-[10px] shadow-banner">
            <div className="my-[20px] flex items-center justify-between gap-[10px]">
              <h1 className=" ml-[20px] ">Tài khoản người dùng mới</h1>
              <div className="mr-[10px] flex gap-[10px]">
                <div className="flex cursor-pointer items-center gap-[15px] rounded-[5px] bg-[#FE5656] px-[15px] py-[10px] text-white">
                  <p>Tất cả</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="7"
                      viewBox="0 0 16 7"
                      fill="none"
                    >
                      <path
                        d="M7.99979 6.60553C7.65863 6.60553 7.31729 6.51338 7.05729 6.32907L0.390625 1.61084C-0.130208 1.24222 -0.130208 0.645072 0.390625 0.276459C0.911458 -0.0921531 1.75521 -0.0921531 2.27604 0.276459L7.99979 4.32898L13.7248 0.277196C14.2456 -0.091416 15.0894 -0.091416 15.6102 0.277196C16.131 0.645809 16.131 1.24296 15.6102 1.61157L8.94354 6.32981C8.68312 6.51412 8.34146 6.60553 7.99979 6.60553Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex cursor-pointer items-center gap-[15px] rounded-[5px] bg-[#FE5656] px-[15px] py-[10px] text-white">
                  <p>Tháng</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="7"
                      viewBox="0 0 16 7"
                      fill="none"
                    >
                      <path
                        d="M7.99979 6.60553C7.65863 6.60553 7.31729 6.51338 7.05729 6.32907L0.390625 1.61084C-0.130208 1.24222 -0.130208 0.645072 0.390625 0.276459C0.911458 -0.0921531 1.75521 -0.0921531 2.27604 0.276459L7.99979 4.32898L13.7248 0.277196C14.2456 -0.091416 15.0894 -0.091416 15.6102 0.277196C16.131 0.645809 16.131 1.24296 15.6102 1.61157L8.94354 6.32981C8.68312 6.51412 8.34146 6.60553 7.99979 6.60553Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <hr className=" w-full border-t-2 border-[#DEDEDE]" />
            <div className="flex h-full items-center justify-center">
              <img src={area} alt="" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center shadow-banner">
          <h1 className=" py-[30px]">Thống kê bài đăng</h1>
          <div className="absolute right-3 top-3 flex cursor-pointer items-center gap-[15px] rounded-[5px] bg-[#FE5656] px-[15px] py-[10px] text-white">
            <p>Tháng</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="7"
                viewBox="0 0 16 7"
                fill="none"
              >
                <path
                  d="M7.99979 6.60553C7.65863 6.60553 7.31729 6.51338 7.05729 6.32907L0.390625 1.61084C-0.130208 1.24222 -0.130208 0.645072 0.390625 0.276459C0.911458 -0.0921531 1.75521 -0.0921531 2.27604 0.276459L7.99979 4.32898L13.7248 0.277196C14.2456 -0.091416 15.0894 -0.091416 15.6102 0.277196C16.131 0.645809 16.131 1.24296 15.6102 1.61157L8.94354 6.32981C8.68312 6.51412 8.34146 6.60553 7.99979 6.60553Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <hr className=" w-full border-t-2 border-[#DEDEDE]" />
          <div className="flex h-full  justify-center">
            <img src={bar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
