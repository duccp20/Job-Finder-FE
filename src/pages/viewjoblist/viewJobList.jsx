import React from "react";
import { Toggle } from "../../components/Toggle";

const ViewJobList = (props) => {
  return (
    <div className="px-[60px] pb-[100px] pt-[50px]">
      <p className="flex cursor-pointer justify-end text-xl font-bold not-italic text-black">
        X
      </p>
      <h2 className=" mb-[23px] text-xl font-bold not-italic text-[#FE5656]">
        Tin tuyển dụng{" "}
        <span className="text-xl font-bold not-italic text-black">- #TD17</span>
      </h2>

      <div className="mb-[20px] flex gap-[21px]">
        <div className=" w-[70%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Công ty{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] bg-[#F3F3F3] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.company}  */}Công ty Cổ phần R2S
          </div>
        </div>
        <div className="w-[30%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Mã số thuế{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] bg-[#F3F3F3] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.tax}  */}978054868
          </div>
        </div>
      </div>
      <div className="mb-[20px]">
        <div className="w-full">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Tiêu đề công việc{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.title}  */}Thực tập sinh Business Analyst
          </div>
        </div>
      </div>

      <div className="mb-[20px] flex flex-wrap gap-[21px]">
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Vị trí làm việc{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            <span className=" mr-[10px] rounded bg-[#F1F1F1] p-[10px] text-[15px] font-[600] text-[#7D7D7D]">
              {/* {props.job}  */}Business Analyst
            </span>
          </div>
        </div>
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black ">
            Chuyên ngành
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            <span className="mr-[10px] rounded bg-[#F1F1F1] p-[10px] text-[15px] font-[600] text-[#7D7D7D] ">
              {/* {props.major}  */}Hệ thống quản lý thông tin
            </span>
          </div>
        </div>
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Hình thức làm việc{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            <span className="mr-[10px] rounded bg-[#F1F1F1] p-[10px] text-[15px] font-[600] text-[#7D7D7D]">
              {/* {props.form}  */}Full time
            </span>
            <span className="mr-[10px] rounded bg-[#F1F1F1] p-[10px] text-[15px] font-[600] text-[#7D7D7D]">
              {/* {props.form}  */}Part time
            </span>
          </div>
        </div>
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Số lượng tuyển{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.total}  */} 30
          </div>
        </div>
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Ngày đăng tuyển *{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.date}  */} 16/03/2023
          </div>
        </div>
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Hạn nộp hồ sơ{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.deadline}  */} 16/03/2023
          </div>
        </div>
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Trợ cấp tối thiểu{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.min-allowance}  */} 3 triệu
          </div>
        </div>

        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Số lượng tuyển{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.max-allowance}  */} 5 triệu
          </div>
        </div>
      </div>
      <div className="mb-[25px] flex items-center gap-[25px]">
        <span>Không có trợ cấp </span>
        <Toggle></Toggle>
      </div>
      <div className="mb-[20px] flex flex-wrap gap-[21px]">
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Quốc gia{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.country}  */}Việt Nam
          </div>
        </div>
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Tỉnh/ Thành phố{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.city}  */} TP. HCM
          </div>
        </div>
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Quận/ Huyện{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.district}  */} Quận Bình Thạnh
          </div>
        </div>
      </div>
      <div className="mb-[20px] flex flex-wrap gap-[21px]">
        <div className="w-full">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Địa điểm làm việc{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.location}  */}Lầu 8, tòa nhà Pearl Plaza, 561A Điện Biên
            Phủ, phường 25
          </div>
        </div>
        <div className="w-full">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Mô tả công việc{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.location}  */}* Tham gia hỗ trợ (được training BA) trong
            việc: - Thu nhập và phân tích các yêu cầu của khách hàng và đưa ra
            mô hình, giải pháp dựa trên yêu cầu đó. - Viết tài liệu đặc tả của
            dự án - Truyền đạt nội dung, hỗ trợ các thành viên team tech, quản
            lý dự án để làm rõ yêu cầu của khách hàng cần đáp ứng. - Tham gia
            test UAT để đảm bảo chất lượng sản phẩm đúng với yêu cầu của KH. -
            Tổ chức hướng dẫn, hỗ trợ cho người dùng sử dụng sản phẩm và xử lý
            sự cố khi vấn đề xảy ra. Phủ, phường 25
          </div>
        </div>
        <div className="w-full">
          <span className="text-[15px] font-bold not-italic text-black">
            Yêu cầu công việc{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.location}  */}* Tham gia hỗ trợ (được training BA) trong
            việc: - Thu nhập và phân tích các yêu cầu của khách hàng và đưa ra
            mô hình, giải pháp dựa trên yêu cầu đó. - Viết tài liệu đặc tả của
            dự án - Truyền đạt nội dung, hỗ trợ các thành viên team tech, quản
            lý dự án để làm rõ yêu cầu của khách hàng cần đáp ứng. - Tham gia
            test UAT để đảm bảo chất lượng sản phẩm đúng với yêu cầu của KH. -
            Tổ chức hướng dẫn, hỗ trợ cho người dùng sử dụng sản phẩm và xử lý
            sự cố khi vấn đề xảy ra. Phủ, phường 25
          </div>
        </div>
        <div className="w-full">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Chế độ phúc lợi{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            {/* {props.location}  */}* Tham gia hỗ trợ (được training BA) trong
            việc: - Thu nhập và phân tích các yêu cầu của khách hàng và đưa ra
            mô hình, giải pháp dựa trên yêu cầu đó. - Viết tài liệu đặc tả của
            dự án - Truyền đạt nội dung, hỗ trợ các thành viên team tech, quản
            lý dự án để làm rõ yêu cầu của khách hàng cần đáp ứng. - Tham gia
            test UAT để đảm bảo chất lượng sản phẩm đúng với yêu cầu của KH. -
            Tổ chức hướng dẫn, hỗ trợ cho người dùng sử dụng sản phẩm và xử lý
            sự cố khi vấn đề xảy ra. Phủ, phường 25
          </div>
        </div>
      </div>
      <hr className="mb-[30px] mt-[10px] bg-[#DEDEDE] " />

      <div className="mb-[20px] flex flex-wrap gap-[21px]">
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Người đăng{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] bg-[#F3F3F3] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            Nguyễn Hoàng Lộc
          </div>
        </div>
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            ID{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] bg-[#F3F3F3] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            #AD15
          </div>
        </div>
      </div>

      <div className="mb-[20px] flex flex-wrap gap-[21px]">
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            Người phụ trách{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            Nguyễn Hoàng Lộc
          </div>
        </div>
        <div className="w-[32.26%]">
          <span className="text-[15px] font-bold not-italic text-black after:text-[#FF0000] after:content-['*'] ">
            ID{" "}
          </span>
          <div className="mt-[5px] rounded border border-[#FE5656] px-[10px] py-[15px] text-[15px] font-[400] not-italic text-black">
            #AD15
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJobList;
