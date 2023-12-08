import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import IconError from "../../components/IconError";
import { useLocation } from "react-router-dom";
import { callResetPassword } from "../../service/api";
import Popup from "../../components/Popup";

const schema = yup
  .object({
    passWord: yup
      .string()
      .required(
        "Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt"
      )
      .min(8, "Ít nhất 8 ký tự")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]*$/,
        "Ít nhất 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt"
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
    <div className="h-screen relative">
      <Header></Header>
      {showPopup.status && (
        <Popup text={showPopup.text} redirect={showPopup.redirect}></Popup>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 h-auto py-11 px-9 my-0 mx-auto bg-white shadow-2xl shadow-black rounded-[46px]"
      >
        <h3 className="text-black text-3xl not-italic font-sans font-extrabold uppercase text-center mb-2">
          Quên mật khẩu
        </h3>

        <div className="relative h-auto">
          <label htmlFor="password" className="pb-1 font-bold ">
            Nhập mật khẩu mới{" "}
            <span className="text-red-700 text-xl not-italic font-normal font-sans">
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
                <div className="flex items-center absolute">
                  <span className="pt-1.5 ">
                    <IconError />
                  </span>

                  <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                    {errors.passWord?.message}
                  </p>
                </div>
              </div>
            )}
            <span
              className="absolute top-[50%] -translate-y-1/2 right-0 flex items-center cursor-pointer pr-2"
              onClick={togglePasswordVisibility}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                className="w-6 h-6"
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
            </span>
          </div>
        </div>
        {!errors?.passWord && !errors?.confirmPassword && (
          <div className="relative">
            <span className="absolute text-[12px] px-2 italic pt-2 font-thin">
              Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt
            </span>
          </div>
        )}
        <div className="flex flex-col relative mt-[30px]">
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
              className="absolute top-[50%] -translate-y-1/2 right-0 flex items-center cursor-pointer pr-2"
              onClick={toggleConfirmPasswordVisibility}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                className="w-6 h-6"
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
            </span>
          </div>
          {errors?.confirmPassword && (
            <div className="relative">
              <div className="flex items-center absolute">
                <span className="pt-1.5">
                  <IconError />
                </span>
                <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                  {errors.confirmPassword?.message}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center m-4">
          <button
            className={`shadow-md text-center text-white rounded-[16px] px-[32px] py-[16px] ${
              isSubmitting ? "bg-gray-500" : "bg-gradientCustom"
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Đang đổi mật khẩu..." : "Đổi mật khẩu"}
          </button>
        </div>
        <p className="text-black text-center font-open-sans text-12 font-extrabold">
          <a href="/login">Quay về trang đăng nhập</a>
        </p>
      </form>
    </div>
  );
};

export default NewPassword;