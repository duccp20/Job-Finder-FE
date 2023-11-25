import React from "react";
import Header from "../../components/Header";
import Popup from "../../components/Popup";

export const VerifyEmail = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#F6F6F6] relative pb-[50px]">
      <Popup
        text="ĐĂNG KÝ THÀNH CÔNG!
"
      ></Popup>

      <>
        <Header></Header>
      </>
      <div className="w-[59%] h-auto mt-[5%] pt-[70px] pb-[90px] mx-auto bg-white rounded-[10px] shadow-custom border-[1px] border-[#DEDEDE]">
        <h1 className="text-[22px] font-[700] uppercase text-center mb-[30px] leading-normal">
          Xác thực tài khoản
        </h1>
        <div className="mx-[50px] font-[400] text-[15] leading-normal">
          <p className="font-[700] m-4">
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
              Gửi lại email xác thực tài khoản
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
