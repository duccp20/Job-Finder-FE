import React, { useState } from "react";
import HeaderHome from "../../components/HeaderHome";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Toggle } from "../../components/Toggle";
import pen from "/public/svg/pen.svg";
import Input from "../../components/Input/input";
import IconError from "../../components/IconError";
import HeaderHR from "../../components/HeaderHR/headerHr";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ContactOverall = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderHR></HeaderHR>

      <div className="mx-auto my-[30px] w-[90%] rounded-[10px] border border-[#DEDEDE] shadow-banner">
        <h1 className="px-[30px] pt-[30px] text-[22px] font-bold">
          Thông tin tài khoản
        </h1>
        <div className="mt-[30px] flex w-full cursor-pointer items-center gap-7 py-[10px] pl-[40px] text-[16px] font-[600] shadow-banner">
          <span
            className={`border-b-[2px] border-transparent hover:border-b-[#FE5656] hover:text-[#FE5656] ${
              window.location.pathname == "/contact"
                ? "border-b-[#FE5656] text-[#FE5656]"
                : "text-black"
            }`}
            onClick={() => navigate("/")}
          >
            THÔNG TIN LIÊN HỆ
          </span>
          <span
            className={`border-b-[2px] border-transparent hover:border-b-[#FE5656] hover:text-[#FE5656] ${
              window.location.pathname == "/contact/company-infor"
                ? "border-b-[#FE5656] text-[#FE5656]"
                : "text-black"
            }`}
            onClick={() => navigate("company-infor")}
          >
            THÔNG TIN CÔNG TY
          </span>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ContactOverall;
