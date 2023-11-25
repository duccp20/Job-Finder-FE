import React from "react";
import Header from "../../components/Header";
import Input from "../../components/Input/input";

export const ForgetPass = () => {
  return (
    <div className="h-screen relative">
      <Header></Header>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 h-auto py-11 px-9 my-0 mx-auto bg-white shadow-2xl shadow-black rounded-[46px]">
        <h3 className="text-black text-3xl not-italic font-sans font-extrabold uppercase text-center mb-8">
          quên mật khẩu
        </h3>
        <div className="relative h-auto">
          <label
            htmlFor="email"
            className="text-gray-900 text-xl not-italic font-extrabold font-sans leading-[3.0]"
          >
            Nhập Email{" "}
            <span className="text-red-700 text-xl not-italic font-normal font-sans">
              *
            </span>
          </label>
          <Input id="email" className="mt-4 top-2"></Input>
        </div>
        <p className="text-gray-900 text-xl not-italic font-extrabold font-sans mb-4"></p>

        <div className="mt-9 flex justify-center mb-7">
          <button
            className="shadow-md text-sm not-italic font-bold text-centerfont-extrabold text-white rounded-[16px] px-[32px] py-[16px] bg-gradientCustom"
            type="button"
          >
            Lấy lại mật khẩu
          </button>
        </div>
        <p className="text-black text-center font-open-sans text-12 font-extrabold">
          Quay về trang đăng nhập
        </p>
      </div>
    </div>
  );
};
