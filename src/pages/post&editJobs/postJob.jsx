import React, { useEffect, useState } from "react";
import HeaderHR from "../../components/HeaderHR/headerHr";
import Input from "../../components/Input/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Toggle } from "../../components/Toggle";
import IconError from "../../components/IconError";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const positions = ["Vị trí A", "Vị trí B", "Vị trí C"];
const cities = ["Tỉnh A", "Tỉnh B", "Tỉnh C"];

const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
  ],
};

const PostJob = () => {
  const [descriptionValue, setDescriptionValue] = useState("");
  const [requirementValue, setRequirementValue] = useState("");
  const [welfareValue, setWelfareValue] = useState("");

  const schema = yup
    .object({
      jobTitle: yup.string().required("Tiêu đề không được để trống"),
      selectPosition: yup.string().required("Vui lòng chọn vị trí"),
      selectType: yup.string().required("Vui lòng chọn hình thức làm việc"),
      numberPosition: yup
        .string()
        .required("Số lượng tuyển không được để trống"),
      postDate: yup.string().required("Ngày đăng tuyển không được để trống"),
      deadlineDate: yup.string().required("Hạn nộp hồ sơ không được để trống"),
      minAllowance: yup
        .string()
        .required("Trợ cấp tối thiểu không được để trống"),
      maxAllowance: yup.string().required("Trợ cấp tối đa không được để trống"),
      city: yup.string().required("Vui lòng chọn tỉnh thành"),
      address: yup.string().required("Địa chỉ không được để trống"),
      description: yup.string().required("Mô tả không được để trống"),
    })
    .required();
  const {
    register,
    handleSubmit,
    control,
    // setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <HeaderHR></HeaderHR>
      <div className="w-[90%] my-[30px] px-[20px] py-[20px] mx-auto shadow-banner">
        <div className="flex items-center gap-2 justify-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="23"
              viewBox="0 0 27 23"
              fill="none"
            >
              <path
                d="M22 0.5H2.44444C1.08778 0.5 0.0122222 1.58778 0.0122222 2.94444L0 17.6111C0 18.9678 1.08778 20.0556 2.44444 20.0556H14.6667V17.6111H2.44444V10.2778H24.4444V2.94444C24.4444 1.58778 23.3567 0.5 22 0.5ZM22 5.38889H2.44444V2.94444H22V5.38889ZM26.8889 16.3889V18.8333H23.2222V22.5H20.7778V18.8333H17.1111V16.3889H20.7778V12.7222H23.2222V16.3889H26.8889Z"
                fill="#FE5656"
              />
            </svg>
          </span>
          <p className="text-[20px] text-[#FE5656] font-bold">
            Đăng tin tuyển dụng mới
          </p>
        </div>
        <form
          className="py-[30px] px-[40px] font-[600] text-[15px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full mt-2">
            <label htmlFor="jobTitle" className="pb-2 ">
              Tiêu đề công việc <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              id="jobTitle"
              borderColor={
                errors.jobTitle ? "border-red-500" : "border-gray-300"
              }
              {...register("jobTitle")}
            />
            {errors?.jobTitle && (
              <div className="flex items-center ">
                <span className="pt-1.5 ">
                  <IconError />
                </span>

                <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                  {errors.jobTitle?.message}
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-12 w-full mt-6">
            <div className="flex flex-col w-[50%]">
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
                      errors.selectPosition
                        ? "border-red-500"
                        : "border-gray-300"
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
            <div className="flex flex-col w-[50%]">
              <label htmlFor="selectField" className="pb-2 ">
                Chuyên ngành
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
            </div>
          </div>
          <div className="flex gap-12 w-full mt-6">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="selectType" className="pb-2 ">
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
            <div className="flex flex-col w-[50%]">
              <label htmlFor="numberPosition" className="pb-2 ">
                Số lượng tuyển <span className="text-red-600">*</span>
              </label>
              <Input
                type="text"
                id="numberPosition"
                borderColor={
                  errors.numberPosition ? "border-red-500" : "border-gray-300"
                }
                {...register("numberPosition")}
              />
              {errors?.numberPosition && (
                <div className="flex items-center ">
                  <span className="pt-1.5">
                    <IconError />
                  </span>

                  <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                    {errors.numberPosition?.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-12 w-full mt-6">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="postDate" className="pb-2 ">
                Ngày đăng tuyển <span className="text-red-700">*</span>
              </label>
              <Controller
                name="postDate"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    id="postDate"
                    borderColor={
                      errors.postDate ? "border-red-500" : "border-gray-300"
                    }
                  />
                )}
              />
              {errors?.postDate && (
                <div className="flex items-center ">
                  <span className="pt-1.5 ">
                    <IconError />
                  </span>

                  <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                    {errors.postDate?.message}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="deadlineDate" className="pb-2 ">
                Hạn nộp hồ sơ <span className="text-red-700">*</span>
              </label>
              <Controller
                name="deadlineDate"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    id="deadlineDate"
                    borderColor={
                      errors.deadlineDate ? "border-red-500" : "border-gray-300"
                    }
                  />
                )}
              />
              {errors?.deadlineDate && (
                <div className="flex items-center ">
                  <span className="pt-1.5 ">
                    <IconError />
                  </span>

                  <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                    {errors.deadline?.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-12 w-full mt-6 relative">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="minAllowance" className="pb-2 ">
                Trợ cấp tối thiểu <span className="text-red-700">*</span>
              </label>
              <Input
                type="text"
                id="minAllowance"
                borderColor={
                  errors.minAllowance ? "border-red-500" : "border-gray-300"
                }
                {...register("minAllowance")}
              />

              {errors?.minAllowance && (
                <div className="flex items-center ">
                  <span className="pt-1.5 ">
                    <IconError />
                  </span>

                  <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                    {errors.minAllowance?.message}
                  </p>
                </div>
              )}
              {!errors?.minAllowance && (
                <div className="flex items-center ">
                  <span className="text-[12px] italic pt-2 font-thin">
                    Đơn vị tính VNĐ
                  </span>
                </div>
              )}
            </div>
            <span className="text-[30px] font-[500] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              -
            </span>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="maxAllowance" className="pb-2 ">
                Trợ cấp tối đa <span className="text-red-700">*</span>
              </label>
              <Input
                type="text"
                id="maxAllowance"
                borderColor={
                  errors.maxAllowance ? "border-red-500" : "border-gray-300"
                }
                {...register("maxAllowance")}
              />
              {errors?.maxAllowance && (
                <div className="flex items-center ">
                  <span className="pt-1.5 ">
                    <IconError />
                  </span>

                  <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                    {errors.maxAllowance?.message}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-3 w-full mx-2 mt-2 items-center">
            <p className="text-[15px] font-[400]">Không có trợ cấp</p>
            <Toggle></Toggle>
          </div>
          <div className="flex flex-col w-full mt-6">
            <label htmlFor="city" className="pb-2 ">
              Tỉnh/ Thành phố <span className="text-red-700">*</span>
            </label>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select
                  {...field}
                  className={`py-3 px-2 border-2 ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  } rounded-md w-full focus:outline-none`}
                >
                  <option value="" disabled hidden>
                    Chọn tỉnh thành
                  </option>

                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              )}
            />

            {errors?.city && (
              <div className="flex items-center ">
                <span className="pt-1.5 ">
                  <IconError />
                </span>

                <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                  {errors.city?.message}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col w-full mt-6">
            <label htmlFor="address" className="pb-2 ">
              Địa điểm làm việc <span className="text-red-700">*</span>
            </label>
            <Input
              type="text"
              id="address"
              borderColor={
                errors.address ? "border-red-500" : "border-gray-300"
              }
              {...register("address")}
            />
            {errors?.address && (
              <div className="flex items-center ">
                <span className="pt-1.5 ">
                  <IconError />
                </span>

                <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                  {errors.address?.message}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col w-full my-6">
            <label htmlFor="description" className="pb-2 ">
              Mô tả công việc <span className="text-red-700">*</span>
            </label>
            <div
              className={`h-[180px] leading-normal border-2 ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-[4px] w-full`}
            >
              <ReactQuill
                className="h-[78%] leading-normal rounded-[4px] w-full "
                theme="snow"
                type="text"
                id="description"
                value={descriptionValue}
                onChange={setDescriptionValue}
                modules={modules}
                {...register("description")}
              />
            </div>
            {errors?.description && (
              <div className="flex items-center ">
                <span className="pt-1.5 ">
                  <IconError />
                </span>

                <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                  {errors.description?.message}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col w-full my-6">
            <label htmlFor="requirement" className="pb-2 ">
              Yêu cầu công việc
            </label>
            <div className="h-[180px] leading-normal border-2 border-gray-300 rounded-[4px] w-full">
              <ReactQuill
                className="h-[78%]"
                theme="snow"
                id="requirement"
                {...register("requirement")}
                value={requirementValue}
                onChange={setRequirementValue}
                modules={modules}
              />
            </div>
          </div>
          <div className="flex flex-col w-full my-6">
            <label htmlFor="welfare" className="pb-2 ">
              Chế độ phúc lợi
            </label>
            <div className="h-[180px] leading-normal border-2 border-gray-300 rounded-[4px] w-full">
              <ReactQuill
                className="h-[78%]"
                theme="snow"
                id="welfare"
                {...register("welfare")}
                value={welfareValue}
                onChange={setWelfareValue}
                modules={modules}
              />
            </div>
          </div>
          <div className="mt-12 gap-4 flex justify-end">
            <button
              className="text-center text-[15px] font-bold text-white rounded-[4px] px-[22px] py-[12px] bg-[#FE5656] hover:outline hover:outline-[#FE5656] hover:bg-white hover:text-[#FE5656]"
              type="submit"
            >
              Đăng tuyển
            </button>
            <button
              className="text-center text-[15px] font-bold text-[#7D7D7D] rounded-[4px] px-[36px] py-[12px] bg-gray-200 hover:outline hover:outline-[#7D7D7D] hover:bg-white"
              type=""
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
