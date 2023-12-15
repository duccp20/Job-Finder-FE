import React, { useEffect } from "react";

const PopupHr = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className=" top-0 w-screen h-full overflow-hidden bg-black bg-opacity-30 flex items-center justify-center shadow-custom absolute z-[100000]">
      <div className=" w-[35%] h-auto px-[25px] py-[25px] bg-white rounded-[10px]  backdrop-blur-[6.800000190734863px] text-center justify-center items-center">
        <p className="cursor-pointer text-right text-black text-base not-italic font-semibold">
          X
        </p>
        <div>
          <p className="text-black text-center text-xl not-italic font-bold mb-[8px]">
            {props.action} Đóng tin tuyển dụng
          </p>
          <p className="text-base not-italic font-normal text-[#000000B2] mb-[8px]">
            Bạn có muốn đóng tin tuyển dụng
          </p>
          <p className="text-[#FE5656] text-base not-italic font-bold mb-[8px]">
            Thực tập sinh Business Analyst chuyên ngành Banking {props.job}
          </p>
        </div>

        <div className="mt-[16px] flex gap-[20px] mb-[9px] justify-center px-[100px]">
          <button
            className="text-center text-white rounded px-[15px] py-[12px] bg-gradientCustom text-[15px] font-[700] flex-1 "
            type="submit"
          >
            Đồng ý
          </button>
          <button
            className="text-center text-[#7D7D7D] rounded px-[15px] py-[12px] bg-white border-solid border border-[#7D7D7D] text-[15px] font-[700] flex-1 "
            type="submit"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupHr;
