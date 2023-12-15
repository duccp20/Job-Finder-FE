import React, { useEffect, useState } from "react";
import logo from "/images/logo-user.jpg";
import flag from "/svg/flag.svg";
import guest from "/images/guest-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doLogoutAction } from "../../redux/account/accountSlice";
const HeaderHR = () => {
  const dataUser = useSelector((state) => state.account.user);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState({
    jobDropdown: false,
    userDropdown: false,
  });
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const jobOptions = ["Quản lý việc làm", "Quản lý thực tập"];
  // const userOptions = ["Thông tin cá nhân", "Đổi mật khẩu", "Đăng xuất"];
  const authOptions = isAuthenticated
    ? ["Thông tin cá nhân", "Đổi mật khẩu", "Đăng xuất"]
    : ["Đăng ký", "Đăng nhập"];
  const enterDropdown = (nameDropdown) => {
    setDropdown((prev) => ({
      ...prev,
      [`${nameDropdown}`]: true,
    }));
  };

  const leaveDropdown = () => {
    setDropdown({
      jobDropdown: false,
      userDropdown: false,
    });
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdown(false);

    if (option === "Đăng ký") {
      navigate("/register");
    }
    if (option === "Đăng nhập") {
      navigate("/login");
    }

    if (option === "Đăng xuất") {
      localStorage.removeItem("access_token");
      dispatch(doLogoutAction());
      navigate("/login");
    }

    if (option === "Thông tin cá nhân") {
      navigate("/profile");
    }
  };

  return (
    <>
      <div className="border-1 flex h-[70px] items-center justify-between border-solid border-[rgb(209,209,209)] shadow-custom ">
        <div className=" flex items-center justify-between gap-5 pl-[26.75px] leading-10">
          <div>
            <a href="http://">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-[16px] font-[700]">
            <div
              className="relative flex flex-col"
              onMouseLeave={leaveDropdown}
            >
              <div
                className="z-[2] flex cursor-pointer items-center justify-center gap-2  hover:text-[#FE5656]"
                onMouseOver={() => enterDropdown("jobDropdown")}
              >
                <span>
                  {jobOptions.includes(selectedOption)
                    ? selectedOption
                    : "Quản lý việc làm"}
                </span>
                <span>
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
                </span>
              </div>

              {dropdown.jobDropdown && (
                <div className="absolute right-0 z-[1] mt-1 w-[105%] rounded-[4px] bg-white px-2 pt-9 text-left text-[15px] font-[600] shadow-custom">
                  {jobOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectOption(option)}
                      className="block w-full pt-1 text-left text-[15px] font-[600] hover:text-[#FE5656]"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="hover:text-[#FE5656]">
              <a href="#">Tìm kiếm ứng viên</a>
            </span>
          </div>
        </div>

        <div className="flex w-[20%] items-center justify-end gap-5 pr-[26.75px]">
          <div className="flex w-[30%] cursor-pointer items-center justify-center gap-2">
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

          <div className="relative w-[15%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
            >
              <path
                d="M13.1424 1.875V2.92266C16.8645 3.59707 19.7138 7.27734 19.7138 11.7188V13.6758C19.7138 16.3359 20.5096 18.9199 21.9625 21L22.7274 22.0898C23.0252 22.5117 23.0817 23.0918 22.8763 23.5781C22.6709 24.0645 22.2397 24.375 21.7674 24.375H1.23166C0.757802 24.375 0.326296 24.0645 0.121144 23.5781C-0.0840592 23.0918 -0.0263539 22.5117 0.269566 22.0898L1.03503 21C2.49153 18.9199 3.28524 16.3359 3.28524 13.6758V11.7188C3.28524 7.27734 6.13457 3.59707 9.85666 2.92266V1.875C9.85666 0.839648 10.5908 0 11.4995 0C12.4082 0 13.1424 0.839648 13.1424 1.875ZM11.0888 5.625C8.14193 5.625 5.74952 8.35547 5.74952 11.7188V13.6758C5.74952 16.4824 5.03693 19.2188 3.71186 21.5625H19.2877C17.9631 19.2188 17.2495 16.4824 17.2495 13.6758V11.7188C17.2495 8.35547 14.8571 5.625 11.9102 5.625H11.0888ZM14.7852 26.25C14.7852 27.1934 14.4413 28.2012 13.8252 28.9043C13.2091 29.6074 12.3261 30 11.4995 30C10.6268 30 9.78992 29.6074 9.17385 28.9043C8.55778 28.2012 8.21381 27.1934 8.21381 26.25H14.7852Z"
                fill="#FE5656"
              />
            </svg>
            <span className="absolute right-0 top-0 w-[50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="9"
                  transform="matrix(1 0 0 -1 0 18.5)"
                  fill="#FF2900"
                />
              </svg>
            </span>
          </div>

          <div
            className="relative flex w-[80%] items-center justify-between"
            onMouseLeave={leaveDropdown}
          >
            <div
              className="relative z-[2] flex w-full cursor-pointer flex-col hover:text-[#FE5656]"
              onMouseOver={() => enterDropdown("userDropdown")}
            >
              <div className="w-[100%] rounded-[25px] border-[2px] border-[#C5C5C5] px-[20px] py-[14px] font-[700] shadow-bannerLighter">
                {isAuthenticated && dataUser && dataUser.firstName
                  ? dataUser.firstName
                  : "Khách"}
              </div>
            </div>
            <div className="absolute -right-[15px] z-[10]">
              <a href="#">
                <img
                  src={
                    isAuthenticated && dataUser && dataUser.avatar
                      ? dataUser.avatar
                      : guest
                  }
                  className="h-full w-full rounded-[50%]"
                />
              </a>
            </div>

            {dropdown.userDropdown && (
              <div className="absolute top-[20px] z-[1] w-[105%] rounded-[4px] bg-white px-[20px] pb-5 pt-8 text-left text-[15px] font-[600] shadow-banner">
                {authOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectOption(option)}
                    className="block w-full pt-6 text-left text-[15px] font-[600] hover:text-[#FE5656]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHR;
