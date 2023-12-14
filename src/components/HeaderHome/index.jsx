import React, { useEffect, useState } from "react";
import logo from "/images/logo-user.jpg";
import flag from "/svg/flag.svg";
import guest from "/images/guest-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doLogoutAction } from "../../redux/account/accountSlice";
const HeaderHome = () => {
  const dataUser = useSelector((state) => state.account.user);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState({
    jobDropdown: false,
    userDropdown: false,
  });
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const jobOptions = ["Tìm việc làm", "Tìm thực tập"];
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
      <div className="border-1 fixed top-0 z-[999] flex h-[70px] w-full items-center justify-between border-solid border-[rgb(209,209,209)] bg-white shadow-custom">
        <div className=" flex cursor-pointer items-center justify-between gap-5 pl-[26.75px] leading-10">
          <div>
            <span onClick={() => navigate("/")}>
              <img src={logo} alt="" />
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 text-[16px] font-[700]">
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
                    : "Tìm việc làm"}
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

            <span
              className={`cursor-pointer hover:text-[#FE5656]
               ${
                 window.location.pathname == "/apply"
                   ? "border-b-[#FE5656] text-[#FE5656]"
                   : "text-black"
               }`}
              onClick={() => navigate("/apply")}
            >
              Việc làm đã ứng tuyển
            </span>
            <span className="hover:text-[#FE5656]">
              <span>Việc làm đã lưu</span>
            </span>
          </div>
        </div>

        <div className="flex w-[18%] items-center justify-end gap-3 pr-[26.75px]">
          <a
            href="#
              "
          >
            <div className="flex items-center justify-center gap-2">
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
          </a>

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

            {/* {dropdown.userDropdown && (
                    <div className="absolute top-[20px] w-[105%] pt-8 pb-5 px-[20px]  rounded-[4px] shadow-banner text-left text-[15px] font-[600] bg-white z-[1]">
                      {userOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => selectOption(option)}
                          className="block w-full text-left pt-6 text-[15px] font-[600] hover:text-[#FE5656]"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )} */}

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

export default HeaderHome;
