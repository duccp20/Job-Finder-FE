import React, { useState } from "react";
import logo from "/images/logo-user.jpg";
import Input from "../../components/Input/input";
import ava from "/svg/avatar.svg";
import rec from "/images/rec.jpg";
import google from "/svg/gg.svg";
import facebook from "/svg/fb.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import IconError from "../../components/IconError";
import { callLogin } from "../../service/api";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { doLoginAction } from "../../redux/account/accountSlice";
const schema = yup
  .object({
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Email không đúng định dạng"),
    password: yup.string().required("Vui lòng nhập mật khẩu"),
  })
  .required();

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState({
    flag: false,
    type: "",
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
    const { email, password } = data;
    setShowError({
      flag: false,
      type: "",
    });
    setIsSubmitting(true);
    const res = await callLogin(email, password);

    setIsSubmitting(false);
    if (res.httpCode === 200 && res.message === "Đăng nhập thành công!") {
      localStorage.setItem("access_token", res.accessToken);
      dispatch(doLoginAction(res.data));
      navigate("/");
      return;
    }
    //th1: mat khau hoac email khong hop le
    if (res.message === "DATA INVALID") {
      setShowError({
        flag: true,
        type: "Email hoặc mật khẩu không đúng!",
      });
      return;
    }
    //th2: tai khoan khong ton tai
    if (res.message === "DATA NOT FOUND") {
      setShowError({
        flag: true,
        type: "Tài khoản không tồn tại!",
      });
      return;
    }
    //th3: tai khoan chua active
    //th4: tai khoan da bi khoa
  };

  return (
    <>
      <div className="w-screen h-screen flex">
        <form
          className="w-[55%] flex flex-col px-36 py-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-center items-center p-10">
            <img src={logo} alt="" />
          </div>
          <h1 className="text-center text-[36px] font-bold uppercase">
            Đăng nhập
          </h1>

          <div className="flex flex-col gap-[25px]">
            {showError.flag && (
              <p className=" text-red-600 bg-[#fff6f5] p-2 mt-10">
                {showError.type}
              </p>
            )}
            <div>
              <label
                htmlFor="email"
                className="font-bold text-[20px] text=[#1C1C1C] leading-normal"
              >
                Email
              </label>
              <Input
                type="text"
                id="email"
                {...register("email")}
                bordercolor={
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
            </div>
            <div>
              <label
                htmlFor="pass"
                className="font-bold text-[20px] text=[#1C1C1C] leading-normal"
              >
                Mật khẩu
              </label>
              <div className="relative">
                <Input
                  autoComplete={`on`}
                  type={showPassword ? "text" : "password"}
                  id="pass"
                  {...register("password")}
                  bordercolor={
                    errors.password ? "border-red-500" : "border-gray-300"
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

              {errors?.password && (
                <div className="relative">
                  <div className="flex items-center absolute">
                    <span className="pt-1.5 ">
                      <IconError />
                    </span>

                    <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                      {errors.password?.message}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <span className="text-right text-[#3B6EF2] text-[#15px] underline">
              <a href="/forgot-password">Quên mật khẩu?</a>
            </span>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className={`shadow-md text-center text-white rounded-[16px] px-[32px] py-[16px] ${
                isSubmitting ? "bg-gray-500" : "bg-gradientCustom"
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Đang nhập..." : "Đăng nhập"}
            </button>
          </div>
          <div className="mb-6">
            <div className="flex justify-center items-center my-6">
              <div className=" bg-[#F0EDFF] w-40 h-[2px]"></div>
              <span className="font-bold p-2 text-[#D9D9D9] ">
                Đăng nhập bằng
              </span>
              <div className="w-40 h-[2px] bg-[#F0EDFF]"></div>
            </div>
            <div className="flex items-center justify-center gap-12">
              <div>
                <a href="">
                  <img src={google} alt="" className="w-[50px] h-[50px]" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src={facebook} alt="" className="w-[53px] h-[53px]" />
                </a>
              </div>
            </div>
          </div>

          <h6 className="text-center">
            Chưa có tài khoản?{" "}
            <span>
              <a
                href="/register"
                className="text-[16px] font-bold text-[#FE5656]"
              >
                {" "}
                Đăng ký ngay
              </a>
            </span>
          </h6>
        </form>
        <div className="w-[45%] h-full relative">
          <img src={rec} alt="" className=" h-full w-full" />
          <img
            src={ava}
            alt=""
            className="absolute w-full top-1/2 -translate-y-1/2 p-32"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
