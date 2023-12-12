import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Toggle } from "../../components/Toggle";
import pen from "/public/svg/pen.svg";
import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/Input/input";
import IconError from "../../components/IconError";
import { callEditProfile } from "../../service/candidate/api";
import { useDispatch, useSelector } from "react-redux";

const positions = ["Vị trí A", "Vị trí B", "Vị trí C"];

const JobDetails = () => {
  const userProfileDTO = useSelector((state) => state.account.user);
  const dispatch = useDispatch();
  const schema = yup
    .object({
      job: yup.string().required("Công việc không được để trống"),
      selectPosition: yup.string().required("Vui lòng chọn vị trí công việc"),
      selectField: yup.string().required("Vui lòng chọn chuyên ngành"),
      selectType: yup.string().required("Vui lòng chọn hình thức làm việc"),
      selectLocation: yup.string().required("Vui lòng chọn địa điểm làm việc"),
      cv: yup.string().required("Vui lòng cập nhật cv"),
    })
    .required();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {};

  return (
    <div className=" w-[60%] rounded-[10px] h-auto shadow-banner flex flex-col">
      <div className=" rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[0px] rounded-br-[0px] bg-[#FE5656] w-full h-[55px] flex justify-between py-[14px] px-[44px] shadow-banner">
        <span className="text-xl not-italic font-bold text-white ">
          Thông tin việc muốn ứng tuyển
        </span>
        <a href="#" className="">
          <img src={pen} alt="" />
        </a>
      </div>

      <form
        className=" px-[40px] font-[600]  py-[30px] text-[15px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full mt-4">
          <label htmlFor="job" className="pb-2 ">
            Công việc mong muốn <span className="text-red-700">*</span>
          </label>
          <Input
            type="text"
            id="job"
            borderColor={errors.job ? "border-red-500" : "border-gray-300"}
            {...register("job")}
          />
          {errors?.job && (
            <div className="flex items-center ">
              <span className="pt-1.5">
                <IconError />
              </span>

              <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                {errors.job?.message}
              </p>
            </div>
          )}
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
                className={`py-3 px-2 border-2 ${
                  errors.selectPosition ? "border-red-500" : "border-gray-300"
                } rounded-md w-full focus:outline-none`}
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
          {errors?.selectPosition && (
            <div className="flex items-center ">
              <span className="pt-1.5">
                <IconError />
              </span>

              <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                {errors.selectPosition?.message}
              </p>
            </div>
          )}
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
                className={`py-3 px-2 border-2 ${
                  errors.selectField ? "border-red-500" : "border-gray-300"
                } rounded-md w-full focus:outline-none`}
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
          {errors?.selectField && (
            <div className="flex items-center ">
              <span className="pt-1.5">
                <IconError />
              </span>

              <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                {errors.selectField?.message}
              </p>
            </div>
          )}
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
                className={`py-3 px-2 border-2 ${
                  errors.selectType ? "border-red-500" : "border-gray-300"
                } rounded-md w-full focus:outline-none`}
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
          {errors?.selectType && (
            <div className="flex items-center ">
              <span className="pt-1.5">
                <IconError />
              </span>

              <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                {errors.selectType?.message}
              </p>
            </div>
          )}
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
                className={`py-3 px-2 border-2 ${
                  errors.selectLocation ? "border-red-500" : "border-gray-300"
                } rounded-md w-full focus:outline-none`}
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
          {errors?.selectLocation && (
            <div className="flex items-center ">
              <span className="pt-1.5">
                <IconError />
              </span>

              <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                {errors.selectLocation?.message}
              </p>
            </div>
          )}
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
                  className={`cursor-pointer border-2 ${
                    errors.cv ? "border-red-500" : "border-gray-300"
                  } w-full py-2 rounded-[5px] flex items-center justify-center`}
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
          {errors?.cv && (
            <div className="flex items-center ">
              <span className="pt-1.5">
                <IconError />
              </span>

              <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                {errors.cv?.message}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full mt-6">
          <label htmlFor="coverLetter" className="pb-2 ">
            Thư xin việc
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
  );
};

export default JobDetails;
