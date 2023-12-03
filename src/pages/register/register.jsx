import React, { useState } from "react";
import Header from "../../components/Header";
import rec from "/images/rec.jpg";
import Input from "../../components/Input/input";
import publish from "/images/publish.jpg";
import ava from "/svg/avatar.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { callActiveMail, callRegister } from "../../service/api";
import Popup from "../../components/Popup";
import { useNavigate } from "react-router-dom";
import IconError from "../../components/IconError";

// Step 2: Define your validation schema using Yup
const schema = yup
  .object({
    subName: yup
      .string()
      .matches(
        /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
        "Họ và tên lót không được phép là số hoặc ký tự đặc biệt"
      )
      .required(),
    name: yup
      .string()
      .matches(
        /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
        "Tên không được phép là số hoặc ký tự đặc biệt"
      )
      .required(),

    email: yup
      .string()
      .email("Email không đúng định dạng")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        "Email không đúng định dạng"
      )
      .required("Email không đúng định dạng"),
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
    phoneNumber: yup
      .string()
      .matches(
        /^(03|05|07|08|09|84|\+84)[0-9]{8,9}$/,
        "Số điện thoại không đúng định dạng"
      )
      .required(),
  })
  .required();

export const RegisterCandidate = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  // Step 3: Use the useForm hook with yupResolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Step 4: Form submission handler

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      setShowPopup(false);
      const res = await callRegister(
        data.subName,
        data.name,
        data.email,
        data.passWord,
        data.phoneNumber,
        "1"
      );

      if (res.httpCode === 201 && res.message === "Register Successfully") {
        const res = await callActiveMail(data.email);

        if (res.httpCode === 200 && res.message === "SEND MAIL") {
          console.log(res, "in call register mail");
          window.location.href = "/verify-email";
        } else {
          console.log(res);
          alert("Không thể gửi mail vui lòng thử lại sau");
        }
      }

      if (res.message === "DATA EXISTING" && res?.errors) {
        setShowPopup(true);
      }
    } catch (error) {
      console.log(error);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="h-full">
        <>
          <Header></Header>
        </>
        <div className=" my-[110px] flex justify-center">
          <div className="flex justify-center rounded-xl w-[75%] shadow-lg border-2">
            <div className="w-[40%] h-full relative">
              <img src={rec} alt="" className="rounded-l-lg h-full" />
              <img
                src={ava}
                alt=""
                className=" absolute w-full top-1/2 -translate-y-1/2 p-10"
              />
            </div>
            <form
              className="w-[60%] rounded-r-lg p-[53px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="text-[28px] text-[#FE5656] font-extrabold uppercase text-center my-8">
                Đăng ký tài khoản ứng viên
              </h1>
              <div className="flex gap-4 text-center text-white">
                <div className="w-[50%] leading-[42px] flex justify-center items-center">
                  <button className="w-full bg-[#ec3727] rounded-[4px] uppercase text-[13px]">
                    <i className="fa-brands fa-google tracking-[5px] text-[16px]"></i>
                    Tiếp tục với Google
                  </button>
                </div>
                <div className="w-[50%]  rounded-lg  leading-[42px] ">
                  <button className="bg-[#375899] w-full text-[13px] rounded-[4px] uppercase flex justify-center items-center ">
                    <i className="fa-brands fa-facebook-f tracking-[5px] text-[16px]"></i>{" "}
                    Tiếp tục với Facebook
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center mt-6">
                <div className=" bg-[#CFD0D4] w-40 h-[2px]"></div>
                <span className="font-bold p-2 text-[#CFD0D4] ">Hoặc</span>
                <div className="w-40 h-[2px] bg-[#CFD0D4]"></div>
              </div>

              {showPopup && (
                <p className=" text-red-600 bg-[#fff6f5] p-2">
                  Tài khoản đã tồn tại!
                </p>
              )}
              <div className="flex gap-4 w-full mt-6">
                <div className="flex flex-col w-[50%]">
                  <label htmlFor="sub-name" className="pb-1 font-bold">
                    Họ và tên lót <span className="text-red-600">*</span>
                  </label>
                  <Input
                    type="text"
                    id="sub-name"
                    {...register("subName")}
                    bordercolor={
                      errors.subName ? "border-red-500" : "border-gray-300"
                    }
                  />
                  {errors?.subName && (
                    <div className="relative">
                      <div className="flex justify-center items-center absolute">
                        <span>
                          <IconError />
                        </span>

                        <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                          {errors.subName?.message}
                        </p>
                      </div>
                    </div>
                  )}
                  {!errors?.subName && (
                    <div className="relative">
                      <span className="text-[12px] italic px-2 pt-2 font-thin absolute">
                        Nhập họ và tên lót
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col w-[50%]">
                  <label htmlFor="name" className="pb-1 font-bold">
                    Tên <span className="text-red-700">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    {...register("name")}
                    borderColor={
                      errors.name ? "border-red-500" : "border-gray-300"
                    }
                  />

                  {errors?.name && (
                    <div className="relative">
                      <div className="flex items-center justify-center absolute">
                        <span>
                          <IconError />
                        </span>

                        <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                          {errors.name?.message}
                        </p>
                      </div>
                    </div>
                  )}
                  {!errors?.name && (
                    <div className="relative">
                      <span className="text-[12px] italic px-2 pt-2  font-thin absolute">
                        Nhập tên
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col mt-10">
                <label htmlFor="email" className="pb-1 font-bold">
                  Email <span className="text-red-600">*</span>
                </label>
                <Input
                  type="text"
                  id="email"
                  {...register("email")}
                  borderColor={
                    errors.email ? "border-red-500" : "border-gray-300"
                  }
                />

                {errors?.email && (
                  <div className="relative">
                    <div className="flex items-center absolute">
                      <span className="pt-1.5 ">
                        <IconError />
                      </span>

                      <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                        {errors.email?.message}
                      </p>
                    </div>
                  </div>
                )}
                {!errors?.email && (
                  <div className="relative">
                    <span className="text-[12px] px-2 italic pt-2 font-thin absolute">
                      Sử dụng email có thật để xác thực
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-4 w-full mt-10">
                <div className="flex flex-col w-[50%]">
                  <label htmlFor="passWord" className="pb-1 font-bold">
                    Mật khẩu <span className="text-red-600">*</span>
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
                </div>

                <div className="flex flex-col w-[50%] relative">
                  <label htmlFor="confirmPassword" className="pb-1 font-bold">
                    Xác nhận mật khẩu <span className="text-red-700">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      {...register("confirmPassword")}
                      borderColor={
                        errors.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
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
              </div>

              {!errors?.passWord && !errors?.confirmPassword && (
                <div className="relative">
                  <span className="absolute text-[12px] px-2 italic pt-2 font-thin">
                    Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc
                    biệt
                  </span>
                </div>
              )}

              <div className="flex flex-col w-[100%] mt-10">
                <label htmlFor="confirmPassword" className="pb-1 font-bold">
                  Số điện thoại <span className="text-red-700">*</span>
                </label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  borderColor={
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  }
                />
                {errors?.phoneNumber && (
                  <div className="relative">
                    <div className="flex items-center absolute">
                      <span className="pt-1.5 ">
                        <IconError />
                      </span>

                      <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                        {errors.phoneNumber?.message}
                      </p>
                    </div>
                  </div>
                )}
                {!errors?.phoneNumber && (
                  <div className="relative">
                    <span className="absolute text-[12px] px-2 italic pt-2 font-thin">
                      Có thể bắt đầu với đầu số 03, 05, 07, 08, 09, 84, +84
                    </span>
                  </div>
                )}
              </div>

              <p className="mt-10 text-[13px] font-normal">
                Bằng việc ấn vào nút “Đăng ký”, tôi đồng ý với
                <span className="text-red-600"> Thỏa thuận sử dụng </span>
                và <span className="text-red-600"> Quy định bảo mật</span> của
                Jobsit.vn
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  className={`shadow-md text-center text-white rounded-[16px] px-[32px] py-[16px] ${
                    isSubmitting ? "bg-gray-500" : "bg-gradientCustom"
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
                </button>
              </div>
              <p className="text-center font-normal mt-6">
                Bạn đã có tài khoản?{" "}
                <span className="text-[#FE5656] font-extrabold">
                  <a href="#">Trở về đăng nhập</a>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
