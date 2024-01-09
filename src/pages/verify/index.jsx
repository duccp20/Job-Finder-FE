import React, { useState } from "react";
import Header from "../../components/Header";
import Popup from "../../components/Popup";
import { useLocation, useParams } from "react-router";
import { callActiveMail } from "../../service/user/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Verify = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get("status");
  const email = searchParams.get("email");
  const message = searchParams.get("message");
  const token = searchParams.get("code");
  let text;
  let flag;
  let login; //flag = true => send mail active account
  status === "success"
    ? (text = "Xác thực thành công")
    : (text = "Xác thực thất bại");

  if (status === "completed") {
    text = "Tài khoản đã được xác thực";
  }

  if (status === "success" && token) {
    localStorage.setItem("access_token", token);
    login = true;
  }

  if (status === "fail" && message === "token-expired") {
    text = (
      <>
        Token đã hết hạn!
        <br />
        <span className="fon text-[13px]  ">
          Vui lòng{" "}
          <span className=" text-red-500 underline">bấm vào nút tiếp tục</span>{" "}
          để gửi lại email kích hoạt tài khoản!
        </span>
      </>
    );
    flag = true;
  }

  const handleCallActiveMail = async () => {
    const res = await callActiveMail(email);

    if (res.httpCode === 200 && res.message === "SEND MAIL") {
      toast.success("Gửi email xác thực thành công! Vui lòng kiểm tra email!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Gửi email xác thực thất bại!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden pb-[50px]">
      {/* flag = true => send mail */}
      {status && (
        <Popup
          text={text}
          flag={flag}
          sendMail={() => handleCallActiveMail()}
          login={login}
        ></Popup>
      )}

      <>
        <ToastContainer />
      </>
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
            DreamxWork
          </p>
          <p className="m-4">
            Nếu bạn đã nhận được email thông báo tạo tài khoản thành công, vui
            lòng nhấp vào liên kết xác thực có gửi trong nội dung email.
          </p>
          <p className="m-4">
            Nếu bạn không nhận được email thông báo thành công, vui lòng nhấp
            vào link '
            <span
              onClick={() => handleCallActiveMail()}
              className="cursor-pointer	text-red-600"
            >
              Gửi lại email xác thực tài khoản
            </span>
            ', hệ thống sẽ gửi email chứa liên kết xác thực vào tài khoản của
            bạn.
          </p>
          <p className="m-4">
            Nếu không tìm thấy email của DreamxWork trong hòm thư đến, bạn vui
            lòng kiểm tra email trong hòm thư Spam.
          </p>
        </div>
      </div>
    </div>
  );
};
