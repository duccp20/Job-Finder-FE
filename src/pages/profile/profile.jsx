import React from "react";

import { Toggle } from "../../components/Toggle";

import HeaderHome from "../../components/HeaderHome";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Profile = () => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const user = useSelector((state) => state.account.user);
  const navigate = useNavigate();
  return (
    <div>
      <HeaderHome />
      <div className="flex h-auto w-full px-[100px] gap-[24px] items-start my-[60px]">
        <div className="border border-[#FE5656] rounded-[10px] w-[40%] h-auto py-[50px] px-[45px] shadow-banner">
          <img
            className="aspect-square mx-auto rounded-full object-cover bg-center bg-no-repeat w-[200px] h-[200px]"
            src="https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />

          <h3 className="text-red-500 text-center text-2xl not-italic font-extrabold mt-[35px] mb-[45px]">
            {isAuthenticated && user && user.firstName + " " + user.lastName}
          </h3>
          <hr className="mb-[35px] border-[1px]" />
          <div className="flex items-center">
            <p className="text-red-500 text-base not-italic font-semibold leading-relaxed pr-4">
              Cho phép nhà tuyển dụng tìm kiếm hồ sơ trực tuyến của bạn
            </p>
            <Toggle></Toggle>
          </div>
          <p className="text-[#7D7D7D] text-xs italic font-normal pt-3">
            Cho phép nhà tuyển dụng chủ động tìm kiếm hồ sơ của bạn để có thêm
            nhiều cơ hội việc làm tốt từ IT Jobs.
          </p>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Profile;
