import React from "react";
import logo from "/images/logo-user.jpg";
import flag from "/svg/flag.svg";
import arrow from "/svg/arrow.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
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
      <div className=" border-1 fixed top-0 z-[999] flex h-[70px] w-full items-center justify-between border-solid border-[#D1D1D1] bg-white px-[26.75px] leading-10 shadow-custom">
        <div>
          <div onClick={() => navigate("/")}>
            <img src={logo} alt="" />
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

          <span className="font-semibold">
            <a href="/register">Đăng ký</a>
          </span>
          <span className="font-semibold">
            <a href="/login">Đăng nhập</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
