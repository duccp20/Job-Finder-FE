import React, { useState } from "react";
import Header from "../../components/Header";
import Popup from "../../components/Popup";
import { useLocation, useParams } from "react-router";

export const Verify = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get("status");

  let text;
  status === "success"
    ? (text = "Xác thực thành công")
    : (text = "Xác thực thất bại");

  if (status === "completed") {
    text = "Tài khoản đã được xác thực";
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden pb-[50px]">
      {status && <Popup text={text}></Popup>}

      <>
        <Header></Header>
      </>
      <div className="mx-auto mt-[5%] h-auto w-[59%] rounded-[10px] border-[1px] border-[#DEDEDE] pb-[90px] pt-[70px] shadow-custom">
        <h1 className="mb-[30px] text-center text-[22px] font-[700] uppercase leading-normal">
          Xác thực tài khoản
        </h1>
        <div className="mx-[50px] font-[400] leading-normal text-[15]">
          <p className="m-4 font-[700]">
            Đăng nhập vào email của bạn để xác thực tài khoản
          </p>
          <p className="m-4">
            Trong quá trình tạo tài khoản, bạn sẽ nhận được một email từ
            Jobsit.vn.
          </p>
          <p className="m-4">
            Nếu bạn đã nhận được email thông báo tạo tài khoản thành công, vui
            lòng nhấp vào liên kết xác thực có gửi trong nội dung email.
          </p>
          <p className="m-4">
            Nếu bạn không nhận được email thông báo thành công, vui lòng nhấp
            vào link '
            <span className="text-red-600	">
              <a href="http://">Gửi lại email xác thực tài khoản</a>
            </span>
            ', hệ thống sẽ gửi email chứa liên kết xác thực vào tài khoản của
            bạn.
          </p>
          <p className="m-4">
            Nếu không tìm thấy email của Jobsit.vn trong hòm thư đến, bạn vui
            lòng kiểm tra email trong hòm thư Spam.
          </p>
        </div>
      </div>
    </div>
  );
};
