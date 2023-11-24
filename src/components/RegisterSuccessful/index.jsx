import React, { useState, useEffect } from "react";

const RegisterSuccessful = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    visible && (
      <div className="w-screen h-screen bg-black bg-opacity-30 flex items-center justify-center shadow-custom z-[1] absolute">
        <div className="w-[35%] h-[35%] bg-white rounded-[46px] shadow-blur backdrop-blur-[6.800000190734863px]">
          <h1 className="text-[20px] font-extrabold uppercase text-center mt-[60px] text-xl	">
            ĐĂNG KÝ THÀNH CÔNG!
          </h1>
          <div className="mt-[25px] flex justify-center">
            <button
              className="shadow-md text-center text-white rounded-[16px] px-[32px] py-[16px] bg-gradientCustom font-bold"
              type="button"
            >
              Tiếp tục
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default RegisterSuccessful;
