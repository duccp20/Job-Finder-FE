import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import Spinner from "../Spinner/spinnner";
const Popup = (props) => {
  // const [showButton, setShowButton] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = async (
    text,
    redirect,
    flag = false,
    login = false,
  ) => {
    if (flag) {
      setIsSubmitting(true);
      await props.sendMail();
      setIsSubmitting(false);
      return;
    }

    if (login) {
      window.location.href = "/";
      return;
    }

    if (redirect) {
      navigate(redirect);
      //navigate("/hr")
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[9999] flex h-full w-screen items-center justify-center overflow-hidden bg-black bg-opacity-30 shadow-custom">
      <div className="h-auto w-[35%] rounded-[46px] bg-white px-[10px] py-[25px] shadow-blur backdrop-blur-[6.800000190734863px]">
        <h1 className="mt-[30px] text-center text-[30px] font-[800] uppercase leading-normal	">
          {props.text}
        </h1>
        <div className="my-[30px] flex justify-center">
          {isSubmitting ? (
            <>
              <button
                className=" flex gap-2 rounded-[16px] bg-gray-500 px-[32px] py-[16px] text-center text-[20px] font-[800] text-white "
                type="button"
                disabled
              >
                <Spinner></Spinner>
                <span>Đang gửi</span>
              </button>
            </>
          ) : (
            <button
              className="rounded-[16px] bg-gradientCustom px-[32px] py-[16px] text-center text-[20px] font-[800] text-white shadow-button"
              type="button"
              onClick={() =>
                handleNavigate(
                  props.text,
                  props.redirect,
                  props.flag,
                  props.login,
                )
              }
            >
              {/* flag = true => gửi email */}
              {props.flag ? "Gửi email" : "Tiếp tục"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
