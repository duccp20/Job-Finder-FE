import React, { useEffect, useState } from "react";
import logo from "/images/logo.png";
import flag from "/svg/flag.svg";
import guest from "/images/guest-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { doLogoutAction } from "../../redux/account/accountSlice";
import LoginAs from "../LoginAs";
const HeaderHomeProps = (props) => {
  const role = props.role;
  const dataUser = useSelector((state) => state.account.user);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState({
    jobDropdown: false,
    userDropdown: false,
  });
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const [selectedOption, setSelectedOption] = useState(null);

  const isResponsive = window.innerWidth <= 1023;

  const [showPopup, setShowPopupLogin] = useState(false);

  const authOptions = isAuthenticated
    ? ["Thông tin cá nhân", "Đổi mật khẩu", "Đăng xuất"]
    : ["Đăng ký", "Đăng nhập"];
  const enterDropdown = (nameDropdown) => {
    setDropdown((prev) => ({
      ...prev,
      // [`${nameDropdown}`]: true,
      [`${nameDropdown}`]: !prev[nameDropdown],
    }));
  };

  const leaveDropdown = () => {
    setDropdown({
      jobDropdown: false,
      userDropdown: false,
    });
  };
  const selectOption = (option, e) => {
    setSelectedOption(option);
    setDropdown(false);

    switch (option) {
      case "Đăng ký":
        e.stopPropagation();
        setShowPopupLogin(true);
        break;
      case "Đăng nhập":
        navigate("/login");
        break;
      case "Đăng xuất":
        localStorage.removeItem("access_token");
        dispatch(doLogoutAction());
        navigate("/login");
        break;
      case "Thông tin cá nhân":
        navigate("/profile");
        break;
      case "Đổi mật khẩu":
        navigate("/change-password");
        break;
      default:
        break;
    }
  };

  return (
    <>
      {showPopup && (
        <LoginAs onClose={() => setShowPopupLogin(false)}></LoginAs>
      )}

      <div className="relative items-center justify-center bg-[#F6f6f6] md:flex md:h-auto md:w-full md:flex-col">
        <div className="border-1 fixed top-0  z-[999] flex h-[70px] w-full items-center justify-between border-solid border-[rgb(209,209,209)] bg-white shadow-custom md:relative">
          <div className=" flex cursor-pointer items-center justify-between gap-5 pl-[26.75px] leading-10">
            <div>
              <span onClick={props.onLogoClick} className="cursor-pointer">
                <img className="h-auto w-[300px]" src={logo} alt="" />
              </span>
            </div>
            {/* chỗ props  */}
            <div className="flex items-center justify-center gap-4 text-[16px] font-[700] md:hidden">
              <span
                className={`cursor-pointer hover:text-[#FE5656]
               ${
                 window.location.pathname == "/"
                   ? "border-b-[#FE5656] text-[#FE5656]"
                   : "text-black"
               }`}
                onClick={() => navigate("/")}
              >
                {props.firstObject}
              </span>
              <span
                className={`cursor-pointer hover:text-[#FE5656]
               ${
                 window.location.pathname == "/apply"
                   ? "border-b-[#FE5656] text-[#FE5656]"
                   : "text-black"
               }`}
                onClick={() => navigate("/apply")}
              >
                {props.secondObject}
              </span>
              <span
                className={`cursor-pointer hover:text-[#FE5656]
               ${
                 window.location.pathname == "/care"
                   ? "border-b-[#FE5656] text-[#FE5656]"
                   : "text-black"
               }`}
                onClick={() => navigate("/care")}
              >
                {props.thirdObject}
              </span>
            </div>
          </div>
          <div className="w-full items-end justify-center  pr-5  min-md:hidden">
            <a
              href="/
              "
            >
              <div className="flex items-center justify-end gap-2">
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
          </div>
          {/* dropdown thông tin  */}
          {!isResponsive ? (
            <div className="flex w-[18%] items-center justify-end gap-3 pr-[26.75px] ">
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
                  <div className="h-[55px] w-[55px] rounded-[50%] border shadow-bannerLighter">
                    <img
                      src={
                        isAuthenticated && dataUser && dataUser.avatar
                          ? `https://firebasestorage.googleapis.com/v0/b/job-worked.appspot.com/o/images%2F${dataUser.avatar}?alt=media`
                          : guest
                      }
                      className="h-full w-full rounded-[50%]"
                    />
                  </div>
                </div>

                {dropdown.userDropdown && (
                  <div className="absolute top-[20px] z-[1] w-[105%] rounded-[4px] bg-white px-[20px] pb-5 pt-8 text-left text-[15px] font-[600] shadow-banner">
                    {authOptions.map((option) => (
                      <button
                        key={option}
                        onClick={(e) => selectOption(option, e)}
                        className="block w-full pt-6 text-left text-[15px] font-[600] hover:text-[#FE5656]"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <nav className="  flex w-20 pr-10">
              <section>
                <div
                  className=" group relative  inline-block "
                  // onClick={() => setIsNavOpen((prev) => !prev)}
                  onClick={toggleNav}
                >
                  <div className="relative items-center ">
                    {isNavOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M13.705 12.2907C13.8928 12.4784 13.9983 12.7331 13.9983 12.9987C13.9983 13.2643 13.8928 13.5189 13.705 13.7067C13.5172 13.8945 13.2625 14 12.997 14C12.7314 14 12.4767 13.8945 12.2889 13.7067L7 8.41648L1.70944 13.7051C1.52165 13.8928 1.26695 13.9983 1.00137 13.9983C0.735788 13.9983 0.481087 13.8928 0.293294 13.7051C0.105501 13.5173 2.79833e-09 13.2626 0 12.997C-2.79833e-09 12.7315 0.105501 12.4768 0.293294 12.289L5.58385 7.00042L0.29496 1.71017C0.107167 1.52239 0.00166609 1.2677 0.00166609 1.00214C0.0016661 0.736577 0.107167 0.481891 0.29496 0.294109C0.482752 0.106328 0.737454 0.000832841 1.00303 0.000832838C1.26861 0.000832836 1.52331 0.106328 1.71111 0.294109L7 5.58435L12.2906 0.293276C12.4784 0.105494 12.7331 -4.42429e-09 12.9986 0C13.2642 4.42429e-09 13.5189 0.105494 13.7067 0.293276C13.8945 0.481058 14 0.735744 14 1.00131C14 1.26687 13.8945 1.52156 13.7067 1.70934L8.41615 7.00042L13.705 12.2907Z"
                          fill="#FE5656"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                      >
                        <path
                          d="M26.8828 15.5C26.8828 15.6927 26.8063 15.8775 26.67 16.0138C26.5338 16.15 26.3489 16.2266 26.1562 16.2266H4.84375C4.65105 16.2266 4.46625 16.15 4.32999 16.0138C4.19374 15.8775 4.11719 15.6927 4.11719 15.5C4.11719 15.3073 4.19374 15.1225 4.32999 14.9862C4.46625 14.85 4.65105 14.7734 4.84375 14.7734H26.1562C26.3489 14.7734 26.5338 14.85 26.67 14.9862C26.8063 15.1225 26.8828 15.3073 26.8828 15.5ZM4.84375 8.47656H26.1562C26.3489 8.47656 26.5338 8.40001 26.67 8.26376C26.8063 8.1275 26.8828 7.9427 26.8828 7.75C26.8828 7.5573 26.8063 7.3725 26.67 7.23624C26.5338 7.09999 26.3489 7.02344 26.1562 7.02344H4.84375C4.65105 7.02344 4.46625 7.09999 4.32999 7.23624C4.19374 7.3725 4.11719 7.5573 4.11719 7.75C4.11719 7.9427 4.19374 8.1275 4.32999 8.26376C4.46625 8.40001 4.65105 8.47656 4.84375 8.47656ZM26.1562 22.5234H4.84375C4.65105 22.5234 4.46625 22.6 4.32999 22.7362C4.19374 22.8725 4.11719 23.0573 4.11719 23.25C4.11719 23.4427 4.19374 23.6275 4.32999 23.7638C4.46625 23.9 4.65105 23.9766 4.84375 23.9766H26.1562C26.3489 23.9766 26.5338 23.9 26.67 23.7638C26.8063 23.6275 26.8828 23.4427 26.8828 23.25C26.8828 23.0573 26.8063 22.8725 26.67 22.7362C26.5338 22.6 26.3489 22.5234 26.1562 22.5234Z"
                          fill="#FE5656"
                        />
                        <path
                          d="M26.8828 15.5C26.8828 15.6927 26.8063 15.8775 26.67 16.0138C26.5338 16.15 26.3489 16.2266 26.1562 16.2266H4.84375C4.65105 16.2266 4.46625 16.15 4.32999 16.0138C4.19374 15.8775 4.11719 15.6927 4.11719 15.5C4.11719 15.3073 4.19374 15.1225 4.32999 14.9862C4.46625 14.85 4.65105 14.7734 4.84375 14.7734H26.1562C26.3489 14.7734 26.5338 14.85 26.67 14.9862C26.8063 15.1225 26.8828 15.3073 26.8828 15.5ZM4.84375 8.47656H26.1562C26.3489 8.47656 26.5338 8.40001 26.67 8.26376C26.8063 8.1275 26.8828 7.9427 26.8828 7.75C26.8828 7.5573 26.8063 7.3725 26.67 7.23624C26.5338 7.09999 26.3489 7.02344 26.1562 7.02344H4.84375C4.65105 7.02344 4.46625 7.09999 4.32999 7.23624C4.19374 7.3725 4.11719 7.5573 4.11719 7.75C4.11719 7.9427 4.19374 8.1275 4.32999 8.26376C4.46625 8.40001 4.65105 8.47656 4.84375 8.47656ZM26.1562 22.5234H4.84375C4.65105 22.5234 4.46625 22.6 4.32999 22.7362C4.19374 22.8725 4.11719 23.0573 4.11719 23.25C4.11719 23.4427 4.19374 23.6275 4.32999 23.7638C4.46625 23.9 4.65105 23.9766 4.84375 23.9766H26.1562C26.3489 23.9766 26.5338 23.9 26.67 23.7638C26.8063 23.6275 26.8828 23.4427 26.8828 23.25C26.8828 23.0573 26.8063 22.8725 26.67 22.7362C26.5338 22.6 26.3489 22.5234 26.1562 22.5234Z"
                          stroke="#FE5656"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </section>

              {/* <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul> */}
            </nav>
          )}
        </div>

        <div
          className={
            isNavOpen
              ? " flex w-full flex-col  justify-center gap-4 px-12 pt-5 sm:px-5  "
              : "hidden"
          }
        >
          {/* div ô */}
          <div
            className="relative flex h-auto w-full flex-col justify-between rounded-[10px] border-[0.5px] border-[#DEDEDE] bg-white px-[15px]
                 py-5  md:cursor-pointer  "
          >
            <div className="flex w-full flex-col justify-start  pr-[26.75px] ">
              <div
                className="relative flex w-full flex-row items-center justify-between px-0"
                // onMouseLeave={leaveDropdown}
              >
                {/* avatar */}
                <div className="relative  z-[10] ">
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
                {/* tên */}
                <div
                  className="relative z-[2] flex w-full cursor-pointer flex-col pt-0 hover:text-[#FE5656]"
                  onClick={() => enterDropdown("userDropdown")}
                  // onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <div className="w-[100%] px-[20px] pt-0 font-[700] ">
                    {isAuthenticated && dataUser && dataUser.firstName
                      ? dataUser.firstName
                      : "Khách"}
                  </div>
                </div>
                {/* mũi tên */}
                {dropdown.userDropdown ? (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="14"
                      viewBox="0 0 27 14"
                      fill="none"
                      onClick={() => enterDropdown("userDropdown")}
                    >
                      <path
                        d="M13.4987 13.2559C12.9466 13.2559 12.3942 13.0745 11.9734 12.7118L1.18395 3.42606C0.341027 2.70061 0.341027 1.52539 1.18395 0.799944C2.02688 0.0744977 3.39241 0.0744977 4.23534 0.799944L13.4987 8.7755L22.7642 0.801395C23.6071 0.0759483 24.9726 0.0759483 25.8156 0.801395C26.6585 1.52684 26.6585 2.70206 25.8156 3.42751L15.0261 12.7132C14.6047 13.0759 14.0517 13.2559 13.4987 13.2559Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                ) : (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="26"
                      viewBox="0 0 13 26"
                      fill="none"
                      onClick={() => enterDropdown("userDropdown")}
                    >
                      <path
                        d="M13 13.001C13 13.5554 12.8186 14.11 12.4559 14.5325L3.1702 25.3653C2.44475 26.2116 1.26953 26.2116 0.544085 25.3653C-0.181362 24.519 -0.181362 23.1479 0.544085 22.3016L8.51964 13.001L0.545534 3.69837C-0.179912 2.85206 -0.179912 1.48104 0.545534 0.634731C1.27098 -0.211578 2.4462 -0.211578 3.17165 0.634731L12.4574 11.4675C12.8201 11.8907 13 12.4458 13 13.001Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                )}
              </div>
              {/* email */}
              <div
                className="relative z-[2] flex w-full cursor-pointer flex-col hover:text-[#FE5656]"
                onClick={() => enterDropdown("userDropdown")}
                // onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <div className="w-[100%] px-0 pt-[14px]  font-[400] text-[#333333B2] ">
                  {isAuthenticated && dataUser && dataUser.email
                    ? dataUser.email
                    : "hmuhmu@gmail.com"}
                </div>
              </div>
            </div>
            {dropdown.userDropdown && (
              <div className=" z-[999] flex w-full flex-col gap-5 rounded-[4px] bg-white px-0 pt-5 text-left text-[15px] font-[600] ">
                {authOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectOption(option)}
                    className=" flex w-full gap-5 rounded-xl bg-[#F2EFEF] px-3 py-[15px] text-left text-[15px] font-[600] transition-all  hover:text-[#FE5656]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative flex h-auto w-full flex-col justify-between rounded-[10px] border-[0.5px] border-[#DEDEDE] bg-white px-[18px]
                 py-[15px]  md:cursor-pointer  "
          >
            <span className="text-base font-[600px] not-italic text-black ">
              Tìm việc làm
            </span>
          </div>
          <div className="relative flex h-auto w-full flex-col justify-between rounded-[10px] border-[0.5px] border-[#DEDEDE] bg-white px-[18px]  py-[15px]  md:cursor-pointer  ">
            <span className="text-base font-[600px] not-italic text-black ">
              Việc làm đã ứng tuyển
            </span>
          </div>
          <div className=" relative flex h-auto w-full flex-col justify-between gap-5 rounded-[10px] border-[0.5px] border-[#DEDEDE] bg-white px-[18px]    py-[15px]  md:cursor-pointer  ">
            <span className="text-base font-[600px] not-italic text-black ">
              Việc làm đã lưu
            </span>
          </div>
          {/* <li className="my-8 border-b border-gray-400 uppercase">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="my-8 border-b border-gray-400 uppercase">
              <a href="/contact">Contact</a>
            </li> */}
        </div>
      </div>
    </>
  );
};

export default HeaderHomeProps;
