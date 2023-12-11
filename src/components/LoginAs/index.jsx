import React from "react";

const LoginAs = () => {
  return (
    <div className="w-screen h-full overflow-hidden bg-black bg-opacity-30 flex items-center justify-center shadow-custom absolute z-[999999]">
      <div className="w-[35%] h-auto px-[10px] py-[25px] bg-gradientCustom rounded-[46px] shadow-blur backdrop-blur-[6.800000190734863px]">
        <h1 className="text-[30px] font-[800] uppercase text-center mt-[30px] leading-normal	">
          {props.text}
        </h1>
        <div className="my-[30px] flex justify-center">
          {showButton && (
            <button
              className="shadow-button text-center text-white rounded-[16px] px-[32px] py-[16px] bg-gradientCustom text-[20px] font-[800]"
              type="button"
              onClick={() => handleNavigate(props.text, props.redirect)}
            >
              Tiếp tục
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginAs;
