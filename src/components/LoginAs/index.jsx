import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginAs = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="transparent absolute top-0 z-[100000] flex h-screen w-screen items-center justify-center  overflow-hidden bg-black bg-opacity-30 shadow-custom">
      <div className="h-auto w-[45%] rounded-[40px] bg-gradientCustom px-[50px] py-[40px] backdrop-blur-[6.800000190734863px] ">
        <h1 className="mb-[30px] text-center text-[30px] font-[800] uppercase leading-normal text-white">
          BẠN ĐĂNG KÝ VỚI VAI TRÒ LÀ
        </h1>
        <div className="mb-[20px] flex gap-[20px]">
          <div className="flex w-[50%] flex-col items-center rounded-[40px] bg-[#FFFFFF] bg-opacity-50 px-[30px] pb-[50px] pt-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 230 230"
              fill="none"
            >
              <path
                d="M115 95.8333C119.405 95.8333 123.766 94.9658 127.836 93.2801C131.905 91.5945 135.603 89.1238 138.718 86.0092C141.832 82.8946 144.303 79.197 145.988 75.1275C147.674 71.058 148.542 66.6964 148.542 62.2917C148.542 57.8869 147.674 53.5253 145.988 49.4558C144.303 45.3864 141.832 41.6888 138.718 38.5741C135.603 35.4595 131.905 32.9888 127.836 31.3032C123.766 29.6176 119.405 28.75 115 28.75C106.104 28.75 97.5727 32.2838 91.2825 38.5741C84.9922 44.8644 81.4583 53.3959 81.4583 62.2917C81.4583 71.1875 84.9922 79.7189 91.2825 86.0092C97.5727 92.2995 106.104 95.8333 115 95.8333ZM28.75 195.5V201.25H201.25V195.5C201.25 174.033 201.25 163.3 197.072 155.097C193.397 147.884 187.533 142.02 180.32 138.345C172.117 134.167 161.383 134.167 139.917 134.167H90.0833C68.6167 134.167 57.8833 134.167 49.68 138.345C42.4674 142.02 36.6034 147.884 32.9283 155.097C28.75 163.3 28.75 174.033 28.75 195.5Z"
                fill="white"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <button
              className="rounded-[40px] bg-white px-[20px] py-[10px] text-center text-[29px] font-[800] text-[#FE5656] shadow-button"
              type="button"
              onClick={() => navigate("/register/candidate")}
            >
              Người Ứng Tuyển
            </button>
          </div>

          <div className="flex w-[50%] flex-col items-center rounded-[40px] bg-[#FFFFFF] bg-opacity-50 px-[30px] pb-[50px] pt-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 251 251"
              fill="none"
            >
              <path
                d="M188.25 156.875H167.334V177.792H188.25M188.25 115.042H167.334V135.958H188.25M209.167 198.708H125.5V177.792H146.417V156.875H125.5V135.958H146.417V115.042H125.5V94.125H209.167M104.584 73.2083H83.667V52.2917H104.584M104.584 115.042H83.667V94.125H104.584M104.584 156.875H83.667V135.958H104.584M104.584 198.708H83.667V177.792H104.584M62.7503 73.2083H41.8337V52.2917H62.7503M62.7503 115.042H41.8337V94.125H62.7503M62.7503 156.875H41.8337V135.958H62.7503M62.7503 198.708H41.8337V177.792H62.7503M125.5 73.2083V31.375H20.917V219.625H230.084V73.2083H125.5Z"
                fill="white"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <button
              className="rounded-[40px] bg-white px-[20px] py-[10px] text-center text-[29px] font-[800] text-[#FFB950] shadow-button"
              type="button"
              onClick={() => navigate("/register/recruiter")}
            >
              Nhà Tuyển Dụng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAs;
