import React, { useEffect } from "react";

const Notification = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className=" fixed left-0 top-0 z-[100000] flex h-full w-full items-center justify-center overflow-hidden bg-black bg-opacity-30 shadow-custom">
      <div className=" h-auto w-[35%] items-center justify-center rounded-[10px] bg-white  px-[25px] py-[25px] text-center backdrop-blur-[6.800000190734863px]">
        <p className="cursor-pointer text-right text-base font-semibold not-italic text-black">
          X
        </p>
        <div>
          <p className="mb-[8px] text-center text-xl font-bold not-italic text-black">
            {props.action}
            {/* Đóng tin tuyển dụng */}
          </p>
          <p className="mb-[8px] text-base font-normal not-italic text-[#000000B2]">
            {/* Bạn có muốn đóng tin tuyển dụng */}
            {props.title}
          </p>
          <p className="mb-[8px] text-base font-bold not-italic text-[#FE5656]">
            {props.des}
          </p>
        </div>

        <div className="mb-[9px] mt-[16px] flex justify-center gap-[20px] px-[100px]">
          <button
            onClick={props.onConfirm}
            className="flex-1 rounded bg-gradientCustom px-[15px] py-[12px] text-center text-[15px] font-[700] text-white "
            type="submit"
          >
            Đồng ý
          </button>
          <button
            onClick={props.onCancel}
            className="flex-1 rounded border border-solid border-[#7D7D7D] bg-white px-[15px] py-[12px] text-center text-[15px] font-[700] text-[#7D7D7D] "
            type="submit"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
