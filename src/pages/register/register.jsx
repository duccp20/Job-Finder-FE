import React, { useState } from "react";
import Header from "../../components/Header";
import rec from "/images/rec.jpg";
import Input from "../../components/Input/input";
import publish from "/images/publish.jpg";
import ava from "/svg/avatar.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Step 2: Define your validation schema using Yup
const schema = yup
  .object({
    subName: yup.string().required("Bắt buộc nhập họ và tên"),
    age: yup.number().positive().integer().required(),
  })
  .required();

export const RegisterCandidate = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-full">
      <>
        <Header></Header>
      </>
      <div className=" my-[45px] flex justify-center">
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
                  <i class="fa-brands fa-facebook-f tracking-[5px] text-[16px]"></i>
                  Tiếp tục với Facebook
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center mt-6">
              <div class=" bg-[#CFD0D4] w-40 h-[2px]"></div>
              <span className="font-bold p-2 text-[#CFD0D4] ">Hoặc</span>
              <div class="w-40 h-[2px] bg-[#CFD0D4]"></div>
            </div>

            <div className="flex gap-4 w-full mt-6">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="sub-name" className="pb-1 font-bold">
                  Họ và tên lót <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="sub-name"
                  className="py-3 px-2 border-2 border-[#BEB9B9]  rounded-[4px] w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  {...register("subName")}
                />
                <p>{errors.firstName?.message}</p>
                <span className="text-[12px] px-2 italic pt-1 font-thin">
                  Nhập họ và tên lót
                </span>
              </div>
              <div className="flex flex-col w-[50%]">
                <label htmlFor="name" className="pb-1 font-bold">
                  Tên <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  className="py-3 px-2 border-2 border-[#BEB9B9] rounded-[4px] w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  id="name"
                />
                <span className="text-[12px] px-2 italic pt-1 font-thin">
                  Nhập tên
                </span>
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <label htmlFor="email" className="pb-1 font-bold">
                Email <span className="text-red-600">*</span>
              </label>
              <Input type="email" id="email" />
              <span className="text-[12px] px-2 italic pt-1 font-thin">
                Sử dụng email có thật để xác thực
              </span>
            </div>

            <div className="flex gap-4 w-full mt-6">
              <div className="flex flex-col w-[50%] relative">
                <label htmlFor="passWord" className="pb-1 font-bold">
                  Mật khẩu <span className="text-red-600">*</span>
                </label>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="passWord"
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer top-[20px]"
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

              <div className="flex flex-col w-[50%] relative">
                <label htmlFor="confirmPassword" className="pb-1 font-bold">
                  Xác nhận mật khẩu <span className="text-red-700">*</span>
                </label>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                />

                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer top-[20px]"
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
            </div>
            <span className="text-[12px] italic pt-1 font-thin px-2">
              Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt
            </span>

            <div className="flex flex-col w-[100%] mt-6">
              <label htmlFor="confirmPassword" className="pb-1 font-bold">
                Số điện thoại <span className="text-red-700">*</span>
              </label>
              <Input />
            </div>
            <span className="text-[12px] italic pt-1 font-thin px-2">
              Có thể bắt đầu với đầu số 03, 05, 07, 08, 09, 84, +84
            </span>
            <p className="mt-6 text-[13px] font-normal">
              Bằng việc ấn vào nút “Đăng ký”, tôi đồng ý với
              <span className="text-red-600"> Thỏa thuận sử dụng </span>
              và <span className="text-red-600"> Quy định bảo mật</span> của
              Jobsit.vn
            </p>
            <div className="mt-6 flex justify-center">
              <button
                className="shadow-md text-center text-white rounded-[16px] px-[32px] py-[16px] bg-gradientCustom"
                type="submit"
              >
                Đăng ký
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
  );
};
