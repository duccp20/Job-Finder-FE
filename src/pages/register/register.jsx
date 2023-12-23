import React, { useState } from "react";
import Header from "../../components/Header";
import rec from "/images/rec.jpg";
import Input from "../../components/Input/input";
import publish from "/images/publish.jpg";
import ava from "/svg/avatar.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { callActiveMail, callRegister } from "../../service/user/api";
import Popup from "../../components/Popup";
import { useNavigate } from "react-router-dom";
import IconError from "../../components/IconError";

// Step 2: Define your validation schema using Yup
const schema = yup
  .object({
    subName: yup
      .string()
      .required("Hãy nhập họ và tên lót ")
      .matches(
        /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
        "Họ và tên lót không được phép là số hoặc ký tự đặc biệt",
      ),
    name: yup
      .string()
      .required("Hãy nhập tên")
      .matches(
        /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
        "Tên không được phép là số hoặc ký tự đặc biệt",
      ),
    email: yup
      .string()
      .required("Hãy nhập email")
      .email("Email không đúng định dạng"),
    // .matches(
    //   /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    //   "Email không đúng định dạng",
    // )
    passWord: yup
      .string()
      .required("Hãy nhập mật khẩu")
      .min(8, "Ít nhất 8 ký tự")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]*$/,
        "Ít nhất 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt",
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("passWord"), null], "Mật khẩu không khớp")
      .required("Mật khẩu không khớp"),
    phoneNumber: yup
      .string()
      .required("Hãy nhập số điện thoại")
      .matches(
        /^(03|05|07|08|09|84|\+84)[0-9]{8,9}$/,
        "Số điện thoại không đúng định dạng",
      ),
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
        data.name,
        data.subName,
        data.email,
        data.passWord,
        data.phoneNumber,
        "2", // roleID : 2 is Candidate
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
      <div className=" h-full">
        <div className="lg:hidden">
          <Header></Header>
        </div>
        <div className=" my-[110px] flex justify-center  sm:my-0">
          <div className="flex h-full w-[75%] justify-center rounded-xl border-2 shadow-lg sm:w-full ">
            <div className=" relative w-[40%] md:hidden">
              {/* cam lè */}
              <img src={rec} alt="" className="h-full rounded-l-lg  " />
              {/* hình tuyển dụng  */}
              <img
                src={ava}
                alt=""
                className=" absolute top-1/2 w-full -translate-y-1/2 p-10 md:hidden"
              />
            </div>
            <form
              className="w-[60%] rounded-r-lg p-[53px]   sm:pt-2 md:w-full "
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="my-8 text-center text-[28px] font-extrabold uppercase text-[#FE5656]">
                Đăng ký tài khoản ứng viên
              </h1>
              <div className="flex  items-center justify-center gap-4 text-center text-white sm:flex-col">
                <div className="flex w-[50%] leading-[42px]  sm:w-full">
                  <button className="w-full rounded-[4px] bg-[#ec3727] text-[13px] uppercase">
                    <i className="fa-brands fa-google text-[16px] tracking-[5px]"></i>
                    Tiếp tục với Google
                  </button>
                </div>
                <div className="w-[50%] rounded-lg leading-[42px]  sm:w-full ">
                  <button className=" w-full  rounded-[4px] bg-[#375899] text-[13px] uppercase ">
                    <i className="fa-brands fa-facebook-f text-[16px] tracking-[5px]"></i>{" "}
                    Tiếp tục với Facebook
                  </button>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <div className=" h-[2px] w-40 bg-[#CFD0D4]"></div>
                <span className="p-2 font-bold text-[#CFD0D4] ">Hoặc</span>
                <div className="h-[2px] w-40 bg-[#CFD0D4]"></div>
              </div>

              {showPopup && (
                <p className=" bg-[#fff6f5] p-2 text-red-600">
                  Tài khoản đã tồn tại!
                </p>
              )}
              <div className="mt-6 flex w-full gap-4 sm:flex-col">
                <div className=" flex w-[50%] flex-col sm:w-full">
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
                      <div className="absolute flex items-center justify-center">
                        <span>
                          <IconError />
                        </span>

                        <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                          {errors.subName?.message}
                        </p>
                      </div>
                    </div>
                  )}
                  {!errors?.subName && (
                    <div className="relative">
                      <span className="absolute px-2 pt-2 text-[12px] font-thin italic">
                        Nhập họ và tên lót
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex w-[50%]  flex-col sm:w-full sm:pt-5">
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
                      <div className="absolute flex items-center justify-center">
                        <span>
                          <IconError />
                        </span>

                        <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                          {errors.name?.message}
                        </p>
                      </div>
                    </div>
                  )}
                  {!errors?.name && (
                    <div className="relative">
                      <span className="absolute px-2 pt-2 text-[12px]  font-thin italic">
                        Nhập tên
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-10 flex flex-col">
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
                    <div className="absolute flex items-center">
                      <span className="pt-1.5 ">
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.email?.message}
                      </p>
                    </div>
                  </div>
                )}
                {!errors?.email && (
                  <div className="relative">
                    <span className="absolute px-2 pt-2 text-[12px] font-thin italic">
                      Sử dụng email có thật để xác thực
                    </span>
                  </div>
                )}
              </div>

              <div className=" mt-10 flex w-full gap-4 sm:flex-col">
                <div className="flex w-[50%] flex-col  sm:w-full">
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
                      className="absolute right-0 top-[50%] flex -translate-y-1/2 cursor-pointer items-center pr-2"
                      onClick={togglePasswordVisibility}
                    >
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
                    </span>
                  </div>

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
                </div>

                <div className=" relative flex w-[50%] flex-col sm:w-full">
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
                      className="absolute right-0 top-[50%] flex -translate-y-1/2 cursor-pointer items-center pr-2"
                      onClick={toggleConfirmPasswordVisibility}
                    >
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
              </div>

              {!errors?.passWord && !errors?.confirmPassword && (
                <div className="relative">
                  <span className="absolute px-2 pt-2 text-[12px] font-thin italic leading-normal">
                    Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc
                    biệt
                  </span>
                </div>
              )}

              <div className="mt-10 flex w-[100%] flex-col sm:mt-12">
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
                    <div className="absolute flex items-center">
                      <span className="pt-1.5 ">
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.phoneNumber?.message}
                      </p>
                    </div>
                  </div>
                )}
                {!errors?.phoneNumber && (
                  <div className="relative">
                    <span className="absolute px-2 pt-2 text-[12px] font-thin italic leading-normal">
                      Có thể bắt đầu với đầu số 03, 05, 07, 08, 09, 84, +84
                    </span>
                  </div>
                )}
              </div>

              <p className="mt-10  text-[13px] font-normal leading-normal sm:mt-12">
                Bằng việc ấn vào nút “Đăng ký”, tôi đồng ý với
                <span className="text-red-600"> Thỏa thuận sử dụng </span>
                và <span className="text-red-600"> Quy định bảo mật</span> của
                Jobsit.vn
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  className={`rounded-[16px] px-[32px] py-[16px] text-center text-white shadow-md ${
                    isSubmitting ? "bg-gray-500" : "bg-gradientCustom"
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
                </button>
              </div>
              <p className="mt-6 text-center font-normal">
                Bạn đã có tài khoản?{" "}
                <span className=" font-extrabold text-[#FE5656] sm:inline-block sm:pt-2">
                  <a href="/login">Trở về đăng nhập</a>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
