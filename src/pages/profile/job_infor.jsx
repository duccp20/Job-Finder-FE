import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Toggle } from "../../components/Toggle";
import pen from "/public/svg/pen.svg";
import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/Input/input";

const positions = ["Vị trí A", "Vị trí B", "Vị trí C"];

const JobInfor = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <HeaderHome />
      <div className="flex h-screen w-full px-[100px] mt-[60px] gap-[24px] items-start">
        <div className="border border-[#FE5656] rounded-[10px] w-[40%] h-auto py-[50px] px-[45px] shadow-banner">
          <img
            className="aspect-square mx-auto rounded-full object-cover bg-center bg-no-repeat w-[200px] h-[200px]"
            src="https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3 className="text-red-500 text-center text-[25px] not-italic font-[800] mt-[35px] mb-[45px]">
            Tran Dang
          </h3>
          <hr className="mb-[35px] border-[1px]" />
          <div className="flex items-center">
            <p className="text-red-500 text-[16px] not-italic font-semibold leading-relaxed pr-4">
              Cho phép nhà tuyển dụng tìm kiếm hồ sơ trực tuyến của bạn
            </p>
            <Toggle></Toggle>
          </div>
          <p className="text-[#7D7D7D] text-xs italic font-normal pt-3">
            Cho phép nhà tuyển dụng chủ động tìm kiếm hồ sơ của bạn để có thêm
            nhiều cơ hội việc làm tốt từ IT Jobs.
          </p>
        </div>
        <div className="h-auto w-[60%] rounded-[10px] shadow-banner flex flex-col">
          <div className=" rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[0px] rounded-br-[0px] bg-[#FE5656] w-full h-[55px] flex justify-between py-[14px] px-[44px] shadow-banner">
            <span className="text-xl not-italic font-bold text-white ">
              Thông tin việc muốn ứng tuyển
            </span>
            <a href="#" className="">
              <img src={pen} alt="" />
            </a>
          </div>

          <form
            className="py-[30px] px-[40px] font-[600] text-[15px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col w-full mt-4">
              <label htmlFor="job" className="pb-2 ">
                Công việc mong muốn <span className="text-red-700">*</span>
              </label>
              <Input
                type="text"
                id="job"
                borderColor="border-gray-300"
                {...register("job")}
              />
            </div>
            <div className="flex flex-col w-full mt-6">
              <label htmlFor="position" className="pb-2 ">
                Vị trí làm việc <span className="text-red-700">*</span>
              </label>
              <Controller
                name="selectPosition"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className={
                      "py-3 px-2 border-2 border-gray-300 rounded-md w-full focus:outline-none"
                    }
                  >
                    <option value="" disabled hidden>
                      Chọn vị trí
                    </option>
                    {positions.map((position) => (
                      <option key={position} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="flex flex-col w-full mt-6">
              <label htmlFor="field" className="pb-2 ">
                Chuyên ngành <span className="text-red-700">*</span>
              </label>
              <Controller
                name="selectField"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className={
                      "py-3 px-2 border-2 border-gray-300 rounded-md w-full focus:outline-none"
                    }
                  >
                    <option value="" disabled hidden>
                      Chọn chuyên ngành
                    </option>
                    {positions.map((position) => (
                      <option key={position} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="flex flex-col w-full mt-6">
              <label htmlFor="type" className="pb-2 ">
                Hình thức làm việc <span className="text-red-700">*</span>
              </label>
              <Controller
                name="selectType"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className={
                      "py-3 px-2 border-2 border-gray-300 rounded-md w-full focus:outline-none"
                    }
                  >
                    <option value="" disabled hidden>
                      Chọn hình thức
                    </option>
                    {positions.map((position) => (
                      <option key={position} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="flex flex-col w-full mt-6">
              <label htmlFor="location" className="pb-2 ">
                Địa điểm làm việc <span className="text-red-700">*</span>
              </label>
              <Controller
                name="selectLocation"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className={
                      "py-3 px-2 border-2 border-gray-300 rounded-md w-full focus:outline-none"
                    }
                  >
                    <option value="" disabled hidden>
                      Chọn địa điểm
                    </option>
                    {positions.map((position) => (
                      <option key={position} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="flex flex-col w-full mt-6 ">
              <label htmlFor="cv" className="pb-2 ">
                CV đính kèm <span className="text-red-700">*</span>
              </label>
              <Controller
                name="cv"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input
                      type="file"
                      id="cv"
                      {...field}
                      style={{ display: "none" }}
                    />
                    <label
                      htmlFor="cv"
                      className="cursor-pointer border-2 border-gray-300 w-full py-2 rounded-[5px] flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_246_1577)">
                          <path
                            d="M21.89 4H7.83001C7.33488 4.01311 6.86493 4.22107 6.52227 4.57871C6.17961 4.93635 5.99193 5.41477 6.00001 5.91V30.09C5.99193 30.5852 6.17961 31.0636 6.52227 31.4213C6.86493 31.7789 7.33488 31.9869 7.83001 32H28.17C28.6651 31.9869 29.1351 31.7789 29.4777 31.4213C29.8204 31.0636 30.0081 30.5852 30 30.09V11.92L21.89 4ZM21 13V5.84L28.3 13H21Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_246_1577">
                            <rect width="36" height="36" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </label>
                  </>
                )}
              />
            </div>
            <div className="flex flex-col w-full mt-6">
              <label htmlFor="coverLetter" className="pb-2 ">
                Thư xin việc <span className="text-red-700">*</span>
              </label>
              <textarea
                type="text"
                id="coverLetter"
                {...register("coverLetter")}
                className="h-[180px] leading-normal py-3 px-4 border-2 border-gray-300 rounded-[4px] w-full focus:outline-none"
                placeholder="Viết giới thiệu ngắn gọn về bản thân (điểm mạnh và điểm yếu) và nêu rõ mong muốn, lý do làm việc tại công ty này."
              />
            </div>
            <div className="mt-6 gap-4 flex justify-end">
              <button
                className="text-center text-[15px] font-bold text-white rounded-[4px] px-[22px] py-[12px] bg-[#FE5656]"
                type="submit"
              >
                Cập nhật
              </button>
              <button
                className="text-center text-[15px] font-bold text-[#7D7D7D] rounded-[4px] px-[36px] py-[12px] bg-gray-200 "
                type=""
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobInfor;
