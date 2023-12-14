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
      <div className="h-[70px] flex justify-between items-center border-1 border-solid border-[rgb(209,209,209)] shadow-custom ">
        <div className=" flex items-center justify-between pl-[26.75px] leading-10 gap-5">
          <div>
            <a href="http://">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-[16px] font-[700]">
            <div
              className="flex flex-col relative"
              onMouseLeave={leaveDropdown}
            >
              <div
                className="flex items-center justify-center gap-2 hover:text-[#FE5656] cursor-pointer  z-[2]"
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
                <div className="absolute right-0 w-[105%] pt-9 px-2 mt-1 rounded-[4px] shadow-custom text-left text-[15px] font-[600] bg-white z-[1]">
                  {jobOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectOption(option)}
                      className="block w-full text-left pt-1 text-[15px] font-[600] hover:text-[#FE5656]"
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

        <div className="w-[20%] flex items-center justify-end pr-[26.75px] gap-5">
          <div className="w-[30%] flex items-center justify-center gap-2 cursor-pointer">
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

          <div className="w-[15%] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
            >
              <path
                d="M13.1429 1.875V2.92266C16.865 3.59707 19.7143 7.27734 19.7143 11.7188V13.6758C19.7143 16.3359 20.5101 18.9199 21.963 21L22.7279 22.0898C23.0257 22.5117 23.0822 23.0918 22.8768 23.5781C22.6714 24.0645 22.2402 24.375 21.7679 24.375H1.23215C0.758291 24.375 0.326784 24.0645 0.121632 23.5781C-0.0835709 23.0918 -0.0258656 22.5117 0.270054 22.0898L1.03552 21C2.49202 18.9199 3.28572 16.3359 3.28572 13.6758V11.7188C3.28572 7.27734 6.13505 3.59707 9.85715 2.92266V1.875C9.85715 0.839648 10.5913 0 11.5 0C12.4087 0 13.1429 0.839648 13.1429 1.875ZM11.0893 5.625C8.14242 5.625 5.75001 8.35547 5.75001 11.7188V13.6758C5.75001 16.4824 5.03742 19.2188 3.71235 21.5625H19.2882C17.9636 19.2188 17.25 16.4824 17.25 13.6758V11.7188C17.25 8.35547 14.8576 5.625 11.9107 5.625H11.0893ZM14.7857 26.25C14.7857 27.1934 14.4418 28.2012 13.8257 28.9043C13.2096 29.6074 12.3266 30 11.5 30C10.6272 30 9.79041 29.6074 9.17434 28.9043C8.55827 28.2012 8.2143 27.1934 8.2143 26.25H14.7857Z"
                fill="#00B074"
              />
            </svg>
            <span className="absolute top-0 right-0 w-[50%]">
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
            className="w-[80%] flex justify-between items-center relative"
            onMouseLeave={leaveDropdown}
          >
            <div
              className="flex flex-col w-full relative z-[2] cursor-pointer hover:text-[#FE5656]"
              onMouseOver={() => enterDropdown("userDropdown")}
            >
              <div className="w-[100%] border-[2px] border-[#C5C5C5] shadow-bannerLighter rounded-[25px] px-[20px] py-[14px] font-[700]">
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
                  className="rounded-[50%] w-full h-full"
                />
              </a>
            </div>

            {dropdown.userDropdown && (
              <div className="absolute top-[20px] w-[105%] pt-8 pb-5 px-[20px] rounded-[4px] shadow-banner text-left text-[15px] font-[600] bg-white z-[1]">
                {authOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectOption(option)}
                    className="block w-full text-left pt-6 text-[15px] font-[600] hover:text-[#FE5656]"
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
