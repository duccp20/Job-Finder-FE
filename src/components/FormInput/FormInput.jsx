import React from "react";
import Header from "../Header";
import Input from "../Input/input";
import { useForm } from "react-hook-form";

const FormInput = (props) => {
  const { handleSubmit } = useForm();
  return (
    <div className="h-screen relative">
      <Header></Header>
      <form
        onSubmit={handleSubmit}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 h-auto py-11 px-9 my-0 mx-auto bg-white shadow-2xl shadow-black rounded-[46px]"
      >
        <h3 className="text-black text-3xl not-italic font-sans font-extrabold uppercase text-center mb-8">
          {props.title}
        </h3>
        <div className="relative h-auto">
          <label
            htmlFor={props.id}
            className="text-gray-900 text-xl not-italic font-extrabold font-sans leading-[2.0]"
          >
            {props.label}
            <span className="text-red-700 text-xl not-italic font-normal font-sans">
              *
            </span>
          </label>

          <Input id={props.id}></Input>
          <div className="absolute right-0 left-auto">
            <a
              href="#"
              className="text-[#3B6EF2] text-sm font-poppins not-italic font-normal underline leading-loose"
            >
              {props.again}
            </a>
          </div>
        </div>
        <p className="text-gray-900 text-xl not-italic font-extrabold font-sans mb-4"></p>

        <div className="mt-9 flex justify-center mb-7">
          <button
            className="shadow-md text-sm not-italic font-bold text-centerfont-extrabold text-white rounded-[16px] px-[32px] py-[16px] bg-gradientCustom"
            type="submit"
          >
            {props.buttonName}
          </button>
        </div>
        <p className="text-black text-center font-open-sans text-12 font-extrabold">
          <a href="#">Quay về trang đăng nhập</a>
        </p>
      </form>
    </div>
  );
};

export default FormInput;
