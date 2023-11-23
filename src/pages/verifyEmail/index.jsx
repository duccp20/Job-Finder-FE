import React from "react";
import Header from "../../components/Header";

export const VerifyEmail = () => {
  return (
    <div className="w-screen h-screen bg-[#fff] 	">
      <>
        <Header></Header>
      </>
      <div className="w-3/5 h-3/5 my-[45px] mx-auto bg-white rounded-xl shadow-custom  border-2">
        <h1 className="text-[17px] font-bold uppercase text-center my-[30px]">
          Xác thực tài khoản
        </h1>
        <div className="mx-[65px] text-xs		">
          <p className="font-bold m-4">
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
