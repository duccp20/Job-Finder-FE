import React, { useState } from "react";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import Spinner from "../../components/Spinner/spinnner";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import IconError from "../../components/IconError";
import { callChangePassword } from "../../service/user/api";
import Popup from "../../components/Popup";

const schema = yup
  .object({
    passWord: yup
      .string()
      .required("Hãy nhập mật khẩu hiện tại")
      .min(8, "Ít nhất 8 ký tự")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]*$/,
        "Ít nhất 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt",
      ),
    newPassword: yup
      .string()
      .required("Hãy nhập mật khẩu mới")
      .min(8, "Ít nhất 8 ký tự")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]*$/,
        "Ít nhất 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt",
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Mật khẩu không khớp")
      .required("Mật khẩu không khớp"),
  })
  .required();

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState({
    status: false,
    text: "",
    redirect: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { passWord, newPassword, confirmPassword } = data;
    console.log("data in password", data);
    setShowPopup({
      status: false,
      text: "",
      redirect: "",
    });
    setIsSubmitting(true);
    try {
      if (newPassword === confirmPassword) {
        const res = await callChangePassword(passWord, newPassword);
        console.log("res in password", res);
        setIsSubmitting(false);
        if (res && res.data) {
          setShowPopup({
            status: true,
            text: "Thay đổi mật khẩu thành công",
            redirect: "/",
          });
        } else {
          alert(res);
        }
      }
    } catch (error) {
      alert(error + "error in password");
    }
  };
  return (
    <div className="flex h-screen w-full items-center justify-center ">
      {showPopup.status && (
        <Popup text={showPopup.text} redirect={showPopup.redirect}></Popup>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[25%] rounded-3xl border p-8 shadow-lg"
      >
        <h1 className=" mb-1 py-2 text-center text-[30px] font-extrabold uppercase">
          Đổi mật khẩu
        </h1>
        <div className="relative flex flex-col gap-1 py-4">
          <label className="text-[16px] font-extrabold" htmlFor="password">
            Nhập mật khẩu hiện tại <span className="text-red-700">*</span>
          </label>
          <div className="relative">
            <Input
              autoComplete={`on`}
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("passWord")}
              bordercolor={
                errors.passWord ? "border-red-500" : "border-gray-300"
              }
            />
            <span
              className="absolute right-0 top-[50%] flex -translate-y-1/2 cursor-pointer items-center pr-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z"
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
                >
                  <path
                    d="M10.83 6.5L14 9.66V9.5C14 8.70435 13.6839 7.94129 13.1213 7.37868C12.5587 6.81607 11.7956 6.5 11 6.5H10.83ZM6.53 7.3L8.08 8.85C8.03 9.06 8 9.27 8 9.5C8 10.2956 8.31607 11.0587 8.87868 11.6213C9.44129 12.1839 10.2044 12.5 11 12.5C11.22 12.5 11.44 12.47 11.65 12.42L13.2 13.97C12.53 14.3 11.79 14.5 11 14.5C9.67392 14.5 8.40215 13.9732 7.46447 13.0355C6.52678 12.0979 6 10.8261 6 9.5C6 8.71 6.2 7.97 6.53 7.3ZM1 1.77L3.28 4.05L3.73 4.5C2.08 5.8 0.78 7.5 0 9.5C1.73 13.89 6 17 11 17C12.55 17 14.03 16.7 15.38 16.16L15.81 16.58L18.73 19.5L20 18.23L2.27 0.5M11 4.5C12.3261 4.5 13.5979 5.02678 14.5355 5.96447C15.4732 6.90215 16 8.17392 16 9.5C16 10.14 15.87 10.76 15.64 11.32L18.57 14.25C20.07 13 21.27 11.36 22 9.5C20.27 5.11 16 2 11 2C9.6 2 8.26 2.25 7 2.7L9.17 4.85C9.74 4.63 10.35 4.5 11 4.5Z"
                    fill="black"
                  />
                </svg>
              )}
            </span>
          </div>
          {errors?.passWord && (
            <div className="absolute -bottom-2 flex items-center">
              <span className="pt-1.5 ">
                <IconError />
              </span>

              <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                {errors.passWord?.message}
              </p>
            </div>
          )}
        </div>

        <div className="relative flex flex-col gap-1 py-4">
          <label className="text-[16px] font-extrabold" htmlFor="new-password">
            Nhập mật khẩu mới <span className="text-red-700">*</span>
          </label>
          <div className="relative">
            <Input
              autoComplete={`on`}
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              {...register("newPassword")}
              bordercolor={
                errors.newPassword ? "border-red-500" : "border-gray-300"
              }
            />
            <span
              className="absolute right-0 top-[50%] flex -translate-y-1/2 cursor-pointer items-center pr-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z"
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
                >
                  <path
                    d="M10.83 6.5L14 9.66V9.5C14 8.70435 13.6839 7.94129 13.1213 7.37868C12.5587 6.81607 11.7956 6.5 11 6.5H10.83ZM6.53 7.3L8.08 8.85C8.03 9.06 8 9.27 8 9.5C8 10.2956 8.31607 11.0587 8.87868 11.6213C9.44129 12.1839 10.2044 12.5 11 12.5C11.22 12.5 11.44 12.47 11.65 12.42L13.2 13.97C12.53 14.3 11.79 14.5 11 14.5C9.67392 14.5 8.40215 13.9732 7.46447 13.0355C6.52678 12.0979 6 10.8261 6 9.5C6 8.71 6.2 7.97 6.53 7.3ZM1 1.77L3.28 4.05L3.73 4.5C2.08 5.8 0.78 7.5 0 9.5C1.73 13.89 6 17 11 17C12.55 17 14.03 16.7 15.38 16.16L15.81 16.58L18.73 19.5L20 18.23L2.27 0.5M11 4.5C12.3261 4.5 13.5979 5.02678 14.5355 5.96447C15.4732 6.90215 16 8.17392 16 9.5C16 10.14 15.87 10.76 15.64 11.32L18.57 14.25C20.07 13 21.27 11.36 22 9.5C20.27 5.11 16 2 11 2C9.6 2 8.26 2.25 7 2.7L9.17 4.85C9.74 4.63 10.35 4.5 11 4.5Z"
                    fill="black"
                  />
                </svg>
              )}
            </span>
          </div>
          {errors?.newPassword && (
            <div className="absolute -bottom-2 flex items-center">
              <span className="pt-1.5 ">
                <IconError />
              </span>

              <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                {errors.newPassword?.message}
              </p>
            </div>
          )}
        </div>
        <div className="relative flex flex-col gap-1 py-4">
          <label
            className="text-[16px] font-extrabold"
            htmlFor="confirm-password"
          >
            Xác nhận mật khẩu mới <span className="text-red-700">*</span>
          </label>
          <div className="relative">
            <Input
              autoComplete={`on`}
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              {...register("confirmPassword")}
              bordercolor={
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }
            />
            <span
              className="absolute right-0 top-[50%] flex -translate-y-1/2 cursor-pointer items-center pr-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z"
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
                >
                  <path
                    d="M10.83 6.5L14 9.66V9.5C14 8.70435 13.6839 7.94129 13.1213 7.37868C12.5587 6.81607 11.7956 6.5 11 6.5H10.83ZM6.53 7.3L8.08 8.85C8.03 9.06 8 9.27 8 9.5C8 10.2956 8.31607 11.0587 8.87868 11.6213C9.44129 12.1839 10.2044 12.5 11 12.5C11.22 12.5 11.44 12.47 11.65 12.42L13.2 13.97C12.53 14.3 11.79 14.5 11 14.5C9.67392 14.5 8.40215 13.9732 7.46447 13.0355C6.52678 12.0979 6 10.8261 6 9.5C6 8.71 6.2 7.97 6.53 7.3ZM1 1.77L3.28 4.05L3.73 4.5C2.08 5.8 0.78 7.5 0 9.5C1.73 13.89 6 17 11 17C12.55 17 14.03 16.7 15.38 16.16L15.81 16.58L18.73 19.5L20 18.23L2.27 0.5M11 4.5C12.3261 4.5 13.5979 5.02678 14.5355 5.96447C15.4732 6.90215 16 8.17392 16 9.5C16 10.14 15.87 10.76 15.64 11.32L18.57 14.25C20.07 13 21.27 11.36 22 9.5C20.27 5.11 16 2 11 2C9.6 2 8.26 2.25 7 2.7L9.17 4.85C9.74 4.63 10.35 4.5 11 4.5Z"
                    fill="black"
                  />
                </svg>
              )}
            </span>
          </div>
          {errors?.confirmPassword && (
            <div className="absolute -bottom-2 flex items-center">
              <span className="pt-1.5 ">
                <IconError />
              </span>

              <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                {errors.confirmPassword?.message}
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className={`item-center flex gap-2 rounded-[16px] px-[32px] py-[16px] text-center text-white shadow-md ${
              isSubmitting ? "bg-gray-500" : "bg-gradientCustom"
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Spinner />
                <span>Đang xử lý...</span>
              </span>
            ) : (
              "Đổi mật khẩu"
            )}
          </button>
        </div>
        <p className="mt-6 text-center font-normal">
          <span className=" font-extrabold text-[#FE5656] sm:inline-block sm:pt-2">
            <a href="/login">Trở về đăng nhập</a>
          </span>
        </p>
      </form>
    </div>
  );
};

export default ChangePassword;
