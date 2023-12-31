import React, { useState } from "react";
import logo from "/images/logo.png";
import Input from "../../components/Input/input";
import ava from "/svg/avatar.svg";
import rec from "/images/rec.jpg";
import google from "/svg/gg.svg";
import facebook from "/svg/fb.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import IconError from "../../components/IconError";
import { callLogin } from "../../service/user/api";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  doLoginAction,
  doSetProfileData,
} from "../../redux/account/accountSlice";
import LoginAs from "../../components/LoginAs";
import { doFetchCandidate } from "../../redux/candidate/candidateSlice";
import { callFetchCandidateByUserId } from "../../service/candidate/api";
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
  const [showRegisterMethod, setShowRegisterMethod] = useState(false);
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
      console.log(res);
      dispatch(doLoginAction(res.data));

      const candidateRoleID = 2;
      const userID = res.data.id;
      if (res.data.roleDTO.roleId === candidateRoleID) {
        const resCandidate = await callFetchCandidateByUserId(userID);
        dispatch(doSetProfileData(resCandidate.data.userDTO));
        if (resCandidate && resCandidate?.data) {
          console.log("res in profile", resCandidate);
          dispatch(doFetchCandidate(resCandidate.data));
        }
        navigate("/");
      } else if (res.data.roleDTO.name === "Role_HR") {
        navigate("/hr");
      } else {
        navigate("/admin");
      }

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
    console.log(res);
    //th3: tai khoan chua active
    if (res.body.message === "Account Not Active") {
      setShowError({
        flag: true,
        type: "Tài khoản chưa được kích hoạt!",
      });
      return;
    }
    //th4: tai khoan da bi khoa
  };

  return (
    <>
      {showRegisterMethod && <LoginAs></LoginAs>}
      <div className="flex h-screen w-screen ">
        <form
          className="flex w-[55%] flex-col px-36 py-10 sm:py-10 md:px-3 lg:w-full tablet-range:pt-40 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" flex items-center justify-center p-10 md:pt-0 ">
            <span onClick={() => navigate("/")}>
              <img className="h-full w-full" src={logo} alt="" />
            </span>
          </div>
          <h1 className="text-center text-[36px] font-bold uppercase ">
            Đăng nhập
          </h1>

          <div className="flex flex-col gap-[25px] md:mt-5">
            {showError.flag && (
              <p className=" mt-10 bg-[#fff6f5] p-2 text-red-600">
                {showError.type}
              </p>
            )}
            <div className="md:px-10 ">
              <label
                htmlFor="email"
                className="text-[20px] font-bold leading-normal text-[#1C1C1C] "
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
            </div>
            <div className="md:px-10">
              <label
                htmlFor="pass"
                className="text-[20px] font-bold leading-normal text-[#1C1C1C] "
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

              {errors?.password && (
                <div className="relative">
                  <div className="absolute flex items-center">
                    <span className="pt-1.5 ">
                      <IconError />
                    </span>

                    <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                      {errors.password?.message}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <span className="text-right text-[#15px] text-[#3B6EF2] underline  md:pr-10">
              <a href="/forgot-password">Quên mật khẩu?</a>
            </span>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className={`rounded-[16px] px-[32px] py-[16px] text-center text-white shadow-md ${
                isSubmitting ? "bg-gray-500" : "bg-gradientCustom"
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Đang nhập..." : "Đăng nhập"}
            </button>
          </div>
          <div className="mb-6">
            <div className="my-6 flex items-center justify-center ">
              <div className=" h-[2px] w-40 bg-[#F0EDFF] sx:w-20"></div>
              <span className="p-2 font-bold text-[#D9D9D9] ">
                Đăng nhập bằng
              </span>
              <div className="h-[2px] w-40 bg-[#F0EDFF] sx:w-20"></div>
            </div>
            <div className="flex items-center justify-center gap-12">
              <div>
                <a href="">
                  <img src={google} alt="" className="h-[50px] w-[50px]" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src={facebook} alt="" className="h-[53px] w-[53px]" />
                </a>
              </div>
            </div>
          </div>

          <h6 className="text-center">
            Chưa có tài khoản?{" "}
            <span>
              <a
                onClick={() => setShowRegisterMethod(true)}
                className="text-[16px] font-bold text-[#FE5656]"
              >
                {" "}
                Đăng ký ngay
              </a>
            </span>
          </h6>
        </form>
        <div className="relative  h-full  w-[45%] md:hidden ">
          <img src={rec} alt="" className=" h-full w-full" />
          <img
            src={ava}
            alt=""
            className="absolute top-1/2 w-full -translate-y-1/2 p-32"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
