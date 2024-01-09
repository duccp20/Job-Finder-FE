import React, { useState } from "react";
import logo from "/images/logo.png";
import flag from "/svg/flag.svg";
import arrow from "/svg/arrow.svg";
import { useNavigate } from "react-router-dom";
import LoginAs from "../LoginAs";
const Header = () => {
  const navigate = useNavigate();
  const [showRegisterMethod, setShowRegisterMethod] = useState(false);
  // const dispatch = useDispatch();
  // const handleLogout = async () => {
  //   const logout = await callLogout();
  //   if (logout.statusCode === 201) {
  //     message.success(
  //       "Logout thành công! sẽ tự động chuyển sang login sau 3s",
  //       3
  //     ); // Hiển thị thông báo trong 3 giây
  //     setTimeout(() => {
  //       dispatch(doLogoutAction(false));
  //       localStorage.removeItem("access_token");
  //       window.location.href = "/login"; // Chuyển hướng sau khi thông báo hiển thị đủ thời gian
  //     }, 3000); // Đợi 3 giây
  //   } else {
  //   }
  // };

  return (
    <>
      {showRegisterMethod && (
        <LoginAs onClose={() => setShowRegisterMethod(false)} />
      )}
      <div className=" border-1 fixed top-0 z-[999] flex h-[70px] w-full items-center justify-between border-solid border-[#D1D1D1] bg-white px-[26.75px] leading-10 shadow-custom">
        <div>
          <div>
            <span onClick={() => navigate("/")}>
              <img className="h-auto w-[300px]" src={logo} alt="" />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-9">
          <a
            href="#
        "
          >
            {" "}
            <div className="flex items-center justify-center gap-2">
              <img src={flag} alt="" />
              <img src={arrow} alt="" />
            </div>
          </a>

          <span className="font-semibold hover:text-[#FE5656]">
            <span
              onClick={(e) => {
                e.stopPropagation();
                setShowRegisterMethod(true);
              }}
            >
              Đăng ký
            </span>
          </span>
          <span className="font-semibold hover:text-[#FE5656]">
            <a href="/login">Đăng nhập</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
