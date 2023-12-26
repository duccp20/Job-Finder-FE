import React, { useState } from "react";
import arrowUp from "/svg/arrow-up.svg";
import arrowDown from "/svg/arrow-down.svg";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState({
    accountDropdown: false,
    postDropdown: false,
  });
  const accountOptions = [
    "Admin",
    "Nhà tuyển dụng",
    "Cộng tác viên",
    "Ứng viên",
  ];
  const postOptions = ["Tin tuyển dụng", "Đợt thực tập", "Hồ sơ ứng viên"];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdown = (nameDropdown) => {
    setDropdown((prev) => ({
      ...prev,
      [nameDropdown]: !prev[nameDropdown],
    }));
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdown(false);

    if (option === "Admin") {
      navigate("account");
    }
    if (option === "Nhà tuyển dụng") {
      navigate("/");
    }

    if (option === "Cộng tác viên") {
      navigate("/");
    }

    if (option === "Ứng viên") {
      navigate("/");
    }

    if (option === "Tin tuyển dụng") {
      navigate("/");
    }

    if (option === "Đợt thực tập") {
      navigate("/");
    }

    if (option === "Hồ sơ ứng viên") {
      navigate("/");
    }
  };
  return (
    <div className=" flex h-auto w-[15%] flex-col bg-white shadow-banner">
      <div
        className="mt-[10px] flex cursor-pointer items-center gap-2 py-[12px] pl-[22px] hover:bg-[#FE5656] hover:text-white"
        onClick={() => navigate("/admin")}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-current hover:text-white"
          >
            <path
              d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <p className="text-[16px] font-bold">Dashboard</p>
      </div>
      <div
        className="flex cursor-pointer items-center gap-1 py-[12px] pl-[18px] hover:bg-[#FE5656] hover:text-white"
        onClick={() => handleDropdown("accountDropdown")}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            className="stroke-current hover:text-white"
          >
            <path
              d="M15.7063 13.5875C15.5771 13.575 15.4221 13.575 15.2801 13.5875C12.2059 13.4875 9.76465 11.05 9.76465 8.05C9.76465 4.9875 12.3221 2.5 15.4996 2.5C18.6642 2.5 21.2347 4.9875 21.2347 8.05C21.2217 11.05 18.7805 13.4875 15.7063 13.5875Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.2477 18.2C6.12186 20.225 6.12186 23.525 9.2477 25.5375C12.7998 27.8375 18.6252 27.8375 22.1773 25.5375C25.3031 23.5125 25.3031 20.2125 22.1773 18.2C18.6381 15.9125 12.8127 15.9125 9.2477 18.2Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <p className="text-[16px] font-bold">Tài khoản</p>
        <span className="ml-[35px]">
          <img src={dropdown.accountDropdown ? arrowDown : arrowUp} alt="" />
        </span>
      </div>
      {dropdown.accountDropdown && (
        <div className=" text-[16px] font-[400] ">
          {accountOptions.map((option) => (
            <button
              key={option}
              onClick={() => selectOption(option)}
              className="w-full py-[15px] pl-[50px] text-left hover:bg-[#FE5656] hover:text-white "
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <div
        className="flex cursor-pointer items-center gap-2 py-[12px] pl-[20px] hover:bg-[#FE5656] hover:text-white"
        onClick={() => handleDropdown("postDropdown")}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            className="stroke-current hover:text-white"
          >
            <path
              d="M24.1667 9.00797V20.9946C24.1667 22.8313 23.9975 24.1363 23.5625 25.0667C23.5625 25.0788 23.5504 25.103 23.5383 25.1151C23.2725 25.4534 22.9221 25.6226 22.5113 25.6226C21.8708 25.6226 21.0975 25.1996 20.2638 24.3055C19.2729 23.2421 17.7504 23.3267 16.8804 24.4867L15.66 26.1059C15.1767 26.7584 14.5363 27.0846 13.8958 27.0846C13.2554 27.0846 12.615 26.7584 12.1316 26.1059L10.8992 24.4746C10.0413 23.3267 8.53082 23.2421 7.53999 24.2934L7.52789 24.3055C6.16248 25.7676 4.95419 25.9851 4.25336 25.1151C4.24127 25.103 4.22917 25.0788 4.22917 25.0667C3.79417 24.1363 3.625 22.8313 3.625 20.9946V9.00797C3.625 7.1713 3.79417 5.8663 4.22917 4.93588C4.22917 4.9238 4.22919 4.91172 4.25336 4.89963C4.94211 4.01755 6.16248 4.23505 7.52789 5.69713L7.53999 5.70922C8.53082 6.76047 10.0413 6.67589 10.8992 5.52797L12.1316 3.89672C12.615 3.24422 13.2554 2.91797 13.8958 2.91797C14.5363 2.91797 15.1767 3.24422 15.66 3.89672L16.8804 5.51589C17.7504 6.67589 19.2729 6.76047 20.2638 5.69713C21.0975 4.80297 21.8708 4.38005 22.5113 4.38005C22.9221 4.38005 23.2725 4.5613 23.5383 4.89963C23.5625 4.91172 23.5625 4.9238 23.5625 4.93588C23.9975 5.8663 24.1667 7.1713 24.1667 9.00797Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.6665 12.8867H19.3332"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.6665 17.1133H16.9165"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <p className="text-[16px] font-bold">Bài đăng</p>
        <span className="ml-[35px]">
          <img src={dropdown.postDropdown ? arrowDown : arrowUp} alt="" />
        </span>
      </div>
      {dropdown.postDropdown && (
        <div className=" text-[16px] font-[400]">
          {postOptions.map((option) => (
            <button
              key={option}
              onClick={() => selectOption(option)}
              className="w-full py-[15px] pl-[50px] text-left hover:bg-[#FE5656] hover:text-white "
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <div
        className="flex cursor-pointer items-center gap-2 px-[20px] py-[12px] hover:bg-[#FE5656] hover:text-white"
        onClick={() => navigate("/")}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M13.2539 7.58164V3.25H2.4375V22.75H23.5625V7.58164H13.2539ZM6.76406 20.5816H4.60078V18.4133H6.76406V20.5816ZM6.76406 16.25H4.60078V14.0816H6.76406V16.25ZM6.76406 11.9184H4.60078V9.75H6.76406V11.9184ZM6.76406 7.58164H4.60078V5.41328H6.76406V7.58164ZM11.0906 20.5816H8.92734V18.4133H11.0906V20.5816ZM11.0906 16.25H8.92734V14.0816H11.0906V16.25ZM11.0906 11.9184H8.92734V9.75H11.0906V11.9184ZM11.0906 7.58164H8.92734V5.41328H11.0906V7.58164ZM21.3992 20.5816H13.2539V18.4133H15.4172V16.25H13.2539V14.0816H15.4172V11.9133H13.2539V9.75H21.3992V20.5816ZM19.4898 11.9184H17.3266V14.0867H19.4898V11.9184ZM19.4898 16.25H17.3266V18.4184H19.4898V16.25Z"
              className="fill-current hover:text-white"
              fill-opacity="0.8"
            />
          </svg>
        </span>
        <p className="text-[16px] font-bold">Công ty</p>
      </div>
    </div>
  );
};

export default SideBar;
