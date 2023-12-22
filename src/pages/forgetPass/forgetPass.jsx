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
        "Email không đúng định dạng",
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
      <div className="relative h-screen ">
        {status && <Popup text={text} redirect={"login"} />}
        <div className="sm:hidden">
          <Header></Header>
        </div>

        <form
          className="tablet-range:w-3/5 absolute left-1/2 top-1/2 mx-auto my-0 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 transform rounded-[46px] bg-white px-9 py-11 shadow-2xl  shadow-black sm:w-4/5 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="mb-4 text-center font-sans text-3xl font-extrabold uppercase not-italic text-black">
            Quên mật khẩu
          </h3>
          {showPopup.status && (
            <p
              className={`-top-[27px]  w-full rounded-lg bg-gradientCustom p-2 text-white ${
                showPopup ? "animate-fade-in-up" : ""
              }`}
            >
              {showPopup.message}
            </p>
          )}
          <div className="relative h-auto">
            <label
              htmlFor="email"
              className="font-sans text-xl font-extrabold not-italic leading-[2.0] text-gray-900"
            >
              Nhập Email{" "}
              <span className="font-sans text-xl font-normal not-italic text-red-700">
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
                <div className="absolute flex items-center justify-center">
                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.email?.message}
                  </p>
                </div>
              </div>
            )}
          </div>
          <p className="mb-4 font-sans text-xl font-extrabold not-italic text-gray-900"></p>

          <div className="mb-7 mt-9 flex justify-center">
            <button
              className={`rounded-[16px] px-[32px] py-[16px] text-center text-white shadow-md ${
                isSubmitting ? "bg-gray-500" : "bg-gradientCustom"
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Đang xử lý..." : "Lấy lại mật khẩu"}
            </button>
          </div>
          <p className="font-open-sans text-12 text-center font-extrabold text-black">
            <a href="/login">Quay về trang đăng nhập</a>
          </p>
        </form>
      </div>
    </>
  );
};
