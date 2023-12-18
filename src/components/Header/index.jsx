import React from "react";
import logo from "/images/logo-user.jpg";
import flag from "/svg/flag.svg";
import arrow from "/svg/arrow.svg";
const Header = () => {
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
  // const items = [
  //   {
  //     label: <Link to="/login">Đăng nhập</Link>,
  //     key: "0",
  //   },
  //   {
  //     label: <Link onClick={handleLogout}>Đăng xuất</Link>,
  //     key: "1",
  //   },
  // ];
  // const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  // const userName = useSelector((state) => state.account.user.fullName);

  return (
    <>
      <div className=" border-1 fixed top-0 z-[999] flex h-[70px] w-full items-center justify-between border-solid border-[#D1D1D1] bg-white px-[26.75px] leading-10 shadow-custom">
        <div>
          <a href="/">
            <img src={logo} alt="" />
          </a>
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
            <a href="/register">Đăng ký</a>
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
