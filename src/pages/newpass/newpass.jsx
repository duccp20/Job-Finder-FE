import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import IconError from "../../components/IconError";
import { useLocation } from "react-router-dom";

import Popup from "../../components/Popup";
import { callResetPassword } from "../../service/user/api";

const schema = yup
  .object({
    passWord: yup
      .string()
      .required(
        "Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt",
      )
      .min(8, "Ít nhất 8 ký tự")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]*$/,
        "Ít nhất 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt",
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("passWord"), null], "Mật khẩu không khớp")
      .required("Mật khẩu không khớp"),
  })
  .required();
const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState({
    status: false,
    text: "",
    redirect: "",
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setShowPopup(false);
    const response = await callResetPassword(token, data.passWord);
    setIsSubmitting(false);
    console.log(response);
    if (response.httpCode === 200) {
      setShowPopup({
        status: true,
        text: response.message,
        redirect: "/login",
      });
      return;
    }

    if (response?.errors && response.message === "UNEXPECTED ERROR OCCURRED") {
      setShowPopup({
        status: true,
        text: response.errors,
        redirect: "/forgot-password",
      });
    }
  };
  return (
    <div className="relative h-screen">
      <Header></Header>
      {showPopup.status && (
        <Popup text={showPopup.text} redirect={showPopup.redirect}></Popup>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute left-1/2 top-1/2 mx-auto my-0 h-auto w-2/5 -translate-x-1/2 -translate-y-1/2 transform rounded-[46px] bg-white px-9 py-11 shadow-2xl shadow-black"
      >
        <h3 className="mb-2 text-center font-sans text-3xl font-extrabold uppercase not-italic text-black">
          Quên mật khẩu
        </h3>

        <div className="relative h-auto">
          <label htmlFor="password" className="pb-1 font-bold ">
            Nhập mật khẩu mới{" "}
            <span className="font-sans text-xl font-normal not-italic text-red-700">
              *
            </span>
          </label>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="passWord"
              {...register("passWord")}
              borderColor={
                errors.passWord ? "border-red-500" : "border-gray-300"
              }
            />
            {errors?.passWord && (
              <div className="relative">
                <div className="absolute flex items-center">
                  <span className="pt-1.5 ">
                    <IconError />
                  </span>

                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.passWord?.message}
                  </p>
                </div>
              </div>
            )}
            <span
              className="absolute right-0 top-[50%] flex -translate-y-1/2 cursor-pointer items-center pr-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  // className="hidden"
                >
                  <path
                    d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  className="h-6 w-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                  >
                    <path
                      d="M10.83 6.5L14 9.66V9.5C14 8.70435 13.6839 7.94129 13.1213 7.37868C12.5587 6.81607 11.7956 6.5 11 6.5H10.83ZM6.53 7.3L8.08 8.85C8.03 9.06 8 9.27 8 9.5C8 10.2956 8.31607 11.0587 8.87868 11.6213C9.44129 12.1839 10.2044 12.5 11 12.5C11.22 12.5 11.44 12.47 11.65 12.42L13.2 13.97C12.53 14.3 11.79 14.5 11 14.5C9.67392 14.5 8.40215 13.9732 7.46447 13.0355C6.52678 12.0979 6 10.8261 6 9.5C6 8.71 6.2 7.97 6.53 7.3ZM1 1.77L3.28 4.05L3.73 4.5C2.08 5.8 0.78 7.5 0 9.5C1.73 13.89 6 17 11 17C12.55 17 14.03 16.7 15.38 16.16L15.81 16.58L18.73 19.5L20 18.23L2.27 0.5M11 4.5C12.3261 4.5 13.5979 5.02678 14.5355 5.96447C15.4732 6.90215 16 8.17392 16 9.5C16 10.14 15.87 10.76 15.64 11.32L18.57 14.25C20.07 13 21.27 11.36 22 9.5C20.27 5.11 16 2 11 2C9.6 2 8.26 2.25 7 2.7L9.17 4.85C9.74 4.63 10.35 4.5 11 4.5Z"
                      fill="black"
                    />
                  </svg>
                </svg>
              )}
            </span>
          </div>
        </div>
        {!errors?.passWord && !errors?.confirmPassword && (
          <div className="relative">
            <span className="absolute px-2 pt-2 text-[12px] font-thin italic">
              Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt
            </span>
          </div>
        )}
        <div className="relative mt-[30px] flex flex-col">
          <label htmlFor="confirmPassword" className="pb-1 font-bold">
            Xác nhận mật khẩu <span className="text-red-700">*</span>
          </label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              {...register("confirmPassword")}
              borderColor={
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }
            />

            <span
              className="absolute right-0 top-[50%] flex -translate-y-1/2 cursor-pointer items-center pr-2"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  // className="hidden"
                >
                  <path
                    d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  className="h-6 w-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                  >
                    <path
                      d="M10.83 6.5L14 9.66V9.5C14 8.70435 13.6839 7.94129 13.1213 7.37868C12.5587 6.81607 11.7956 6.5 11 6.5H10.83ZM6.53 7.3L8.08 8.85C8.03 9.06 8 9.27 8 9.5C8 10.2956 8.31607 11.0587 8.87868 11.6213C9.44129 12.1839 10.2044 12.5 11 12.5C11.22 12.5 11.44 12.47 11.65 12.42L13.2 13.97C12.53 14.3 11.79 14.5 11 14.5C9.67392 14.5 8.40215 13.9732 7.46447 13.0355C6.52678 12.0979 6 10.8261 6 9.5C6 8.71 6.2 7.97 6.53 7.3ZM1 1.77L3.28 4.05L3.73 4.5C2.08 5.8 0.78 7.5 0 9.5C1.73 13.89 6 17 11 17C12.55 17 14.03 16.7 15.38 16.16L15.81 16.58L18.73 19.5L20 18.23L2.27 0.5M11 4.5C12.3261 4.5 13.5979 5.02678 14.5355 5.96447C15.4732 6.90215 16 8.17392 16 9.5C16 10.14 15.87 10.76 15.64 11.32L18.57 14.25C20.07 13 21.27 11.36 22 9.5C20.27 5.11 16 2 11 2C9.6 2 8.26 2.25 7 2.7L9.17 4.85C9.74 4.63 10.35 4.5 11 4.5Z"
                      fill="black"
                    />
                  </svg>
                </svg>
              )}
            </span>
          </div>
          {errors?.confirmPassword && (
            <div className="relative">
              <div className="absolute flex items-center">
                <span className="pt-1.5">
                  <IconError />
                </span>
                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.confirmPassword?.message}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="m-4 flex justify-center">
          <button
            className={`rounded-[16px] px-[32px] py-[16px] text-center text-white shadow-md ${
              isSubmitting ? "bg-gray-500" : "bg-gradientCustom"
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Đang đổi mật khẩu..." : "Đổi mật khẩu"}
          </button>
        </div>
        <p className="font-open-sans text-12 text-center font-extrabold text-black">
          <a href="/login">Quay về trang đăng nhập</a>
        </p>
      </form>
    </div>
  );
};

export default NewPassword;
