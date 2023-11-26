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
      .required("Email không đúng định dạng"),
    passWord: yup
      .string()
      .required(
        "Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt"
      )
      .min(8, "Ít nhất 8 ký tự")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt"
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

  // Icon

  const IconError = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
      >
        <path
          d="M8.69838 1.33337C12.7018 1.33337 15.9471 4.31804 15.9471 8.00004C15.9471 11.682 12.7018 14.6667 8.69838 14.6667C4.69494 14.6667 1.44971 11.682 1.44971 8.00004C1.44971 4.31804 4.69494 1.33337 8.69838 1.33337ZM8.69838 10C8.50614 10 8.32176 10.0703 8.18583 10.1953C8.04989 10.3203 7.97352 10.4899 7.97352 10.6667C7.97352 10.8435 8.04989 11.0131 8.18583 11.1381C8.32176 11.2631 8.50614 11.3334 8.69838 11.3334C8.89063 11.3334 9.075 11.2631 9.21094 11.1381C9.34688 11.0131 9.42325 10.8435 9.42325 10.6667C9.42325 10.4899 9.34688 10.3203 9.21094 10.1953C9.075 10.0703 8.89063 10 8.69838 10ZM8.69838 4.00004C8.52084 4.00006 8.34948 4.06001 8.2168 4.16852C8.08413 4.27702 7.99936 4.42654 7.97859 4.58871L7.97352 4.66671V8.66671C7.97372 8.83663 8.04447 9.00006 8.1713 9.12362C8.29812 9.24718 8.47147 9.32153 8.6559 9.33149C8.84034 9.34145 9.02195 9.28626 9.16363 9.1772C9.30531 9.06814 9.39636 8.91344 9.41818 8.74471L9.42325 8.66671V4.66671C9.42325 4.4899 9.34688 4.32033 9.21094 4.1953C9.075 4.07028 8.89063 4.00004 8.69838 4.00004Z"
          fill="#FF0000"
        />
      </svg>
    );
  };

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
                  id="sub-name"
                  className="py-3 px-2 border-2 border-[#BEB9B9]  rounded-[4px] w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  {...register("subName")}
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
                    <span className="text-[12px] italic px-2 pt-2  font-thin absolute">
                      Nhập tên
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col w-[50%]">
                <label htmlFor="name" className="pb-1 font-bold">
                  Tên <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="py-3 px-2 border-2 border-[#BEB9B9] rounded-[4px] w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  {...register("name")}
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

              <input
                type="text"
                id="email"
                className={`py-3 px-2 border-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
                {...register("email")}
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
                  <span className="text-[12px] px-2 italic pt-1 font-thin absolute">
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
                  <input
                    type={showPassword ? "text" : "password"}
                    id="passWord"
                    className={`py-3 px-2 border-2 ${
                      errors.passWord ? "border-red-500" : "border-gray-300"
                    } rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
                    {...register("passWord")}
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
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    className={`py-3 px-2 border-2 ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
                    {...register("confirmPassword")}
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
                <span className="absolute text-[12px] px-2 italic pt-1 font-thin">
                  Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc
                  biệt
                </span>
              </div>
            )}

            <div className="flex flex-col w-[100%] mt-10">
              <label htmlFor="confirmPassword" className="pb-1 font-bold">
                Số điện thoại <span className="text-red-700">*</span>
              </label>

              <input
                type="tel"
                id="phoneNumber"
                className={`py-3 px-2 border-2 ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                } rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
                {...register("phoneNumber")}
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
                  <span className="absolute text-[12px] px-2 italic pt-1 font-thin">
                    Có thể bắt đầu với đầu số 03, 05, 07, 08, 09, 84, +84
                  </span>
                </div>
              )}
            </div>

            <p className="mt-10 text-[13px] font-normal">
              Bằng việc ấn vào nút “Đăng ký”, tôi đồng ý với
              <span className="text-red-600"> Thỏa thuận sử dụng</span>
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
