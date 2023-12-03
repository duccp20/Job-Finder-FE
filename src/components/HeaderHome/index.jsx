import React, { useState } from "react";
import logo from "/images/logo-user.jpg";
import google from "/images/google.jpg";
import flag from "/svg/flag.svg";
import arrow from "/svg/arrow.svg";
import guest from "/images/guest-logo.jpg";
const HeaderHome = () => {
  const [dropdown, setDropdown] = useState({
    jobDropdown: false,
    userDropdown: false,
  });

  const [selectedOption, setSelectedOption] = useState(null);

  const jobOptions = ["Tìm việc làm", "Tìm thực tập"];
  const userOptions = ["Thông tin cá nhân", "Đổi mật khẩu", "Đăng xuất"];

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

          <div className="flex items-center justify-center gap-4 text-[16px] font-[700]">
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
              <a href="#">Việc làm đã ứng tuyển</a>
            </span>
            <span className="hover:text-[#FE5656]">
              <a href="#">Việc làm đã lưu</a>
            </span>
          </div>
        </div>

        <div className="w-[18%] flex items-center justify-end pr-[26.75px] gap-3">
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
            className="w-[80%] flex justify-between items-center relative"
            onMouseLeave={leaveDropdown}
          >
            <div
              className="flex flex-col w-full relative z-[2] cursor-pointer hover:text-[#FE5656]"
              onMouseOver={() => enterDropdown("userDropdown")}
            >
              <div className="w-[100%] border-[2px] border-[#C5C5C5] shadow-bannerLighter rounded-[25px] px-[20px] py-[14px] font-[700]">
                Tran Dang
              </div>
            </div>
            <div className="absolute -right-[15px] z-[10]">
              <a href="#">
                <img src={guest} className="rounded-[50%] w-full h-full" />
              </a>
            </div>

            {dropdown.userDropdown && (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
