import React, { useState } from "react";
import Input from "../../components/Input/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header";

import { useLocation } from "react-router-dom";
import Popup from "../../components/Popup";
import { callSendForgetPass } from "../../service/user/api";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email không đúng định dạng")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        "Email không đúng định dạng"
      )
      .required("Email không đúng định dạng"),
  })
  .required();

export const ForgetPass = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState({
    status: false,
    message: "",
    redirect: "",
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get("status");

  let text;

  if (status === "completed" || status === "fail") {
    text = "Yêu cầu đổi mật khẩu này đã không còn hiệu lực";
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setShowPopup(false);
    setIsSubmitting(true);
    const res = await callSendForgetPass(data.email);
    setIsSubmitting(false);
    console.log(res);

    if (res.httpCode === 200 && res.message === "SEND MAIL") {
      setShowPopup({
        status: true,
        message:
          "Yêu cầu đổi mật khẩu đã được gửi đến email của bạn, vui lòng vào email để tiếp tục.",
      });
      return;
    }

    if (res?.errors && res.message === "DATA NOT FOUND") {
      setShowPopup({
        status: true,
        message: "Email của bạn chưa được đăng ký hoặc chưa được xác thực!",
      });
      console.log(res);
      return;
    }
  };

  return (
    <>
      <div className="h-screen relative">
        {status && <Popup text={text} redirect={"login"} />}
        <Header></Header>

        <form
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 h-auto py-11 px-9 my-0 mx-auto bg-white shadow-2xl shadow-black rounded-[46px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-black text-3xl not-italic font-sans font-extrabold uppercase text-center mb-4">
            Quên mật khẩu
          </h3>
          {showPopup.status && (
            <p
              className={`rounded-lg  w-full -top-[27px] text-white bg-gradientCustom p-2 ${
                showPopup ? "animate-fade-in-up" : ""
              }`}
            >
              {showPopup.message}
            </p>
          )}
          <div className="relative h-auto">
            <label
              htmlFor="email"
              className="text-gray-900 text-xl not-italic font-extrabold font-sans leading-[2.0]"
            >
              Nhập Email{" "}
              <span className="text-red-700 text-xl not-italic font-normal font-sans">
                *
              </span>
            </label>

            <Input
              type="text"
              id="email"
              {...register("email")}
              borderColor={errors.email ? "border-red-500" : "border-gray-300"}
            />

            {errors?.email && (
              <div className="relative">
                <div className="flex justify-center items-center absolute">
                  <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                    {errors.email?.message}
                  </p>
                </div>
              </div>
            )}
          </div>
          <p className="text-gray-900 text-xl not-italic font-extrabold font-sans mb-4"></p>

          <div className="mt-9 flex justify-center mb-7">
            <button
              className={`shadow-md text-center text-white rounded-[16px] px-[32px] py-[16px] ${
                isSubmitting ? "bg-gray-500" : "bg-gradientCustom"
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Đang xử lý..." : "Lấy lại mật khẩu"}
            </button>
          </div>
          <p className="text-black text-center font-open-sans text-12 font-extrabold">
            <a href="/login">Quay về trang đăng nhập</a>
          </p>
        </form>
      </div>
    </>
  );
};
