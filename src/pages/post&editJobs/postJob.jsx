import React, { useState } from "react";
import HeaderHR from "../../components/HeaderHR/headerHr";
import Input from "../../components/Input/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

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

const PostJob = (props) => {
  const [descriptionValue, setDescriptionValue] = useState("");
  const [requirementValue, setRequirementValue] = useState("");
  const [welfareValue, setWelfareValue] = useState("");

  const schema = yup
    .object({
      jobTitle: yup.string().required("Tiêu đề không được để trống"),
      selectPosition: yup.string().required("Vui lòng chọn vị trí"),
      selectType: yup.string().required("Vui lòng chọn hình thức làm việc"),
      numberPosition: yup
        .number()
        .typeError("Số lượng tuyển là một số")
        .required("Số lượng tuyển không được để trống"),
      postDate: yup
        .date()
        .max(new Date(), "Ngày không thể vượt quá ngày hiện tại")
        .required("Ngày đăng tuyển không được để trống"),
      deadlineDate: yup.date().required("Hạn nộp hồ sơ không được để trống"),
      city: yup.string().required("Vui lòng chọn tỉnh thành"),
      address: yup.string().required("Địa chỉ không được để trống"),
      description: yup.string().required("Mô tả không được để trống"),
      // requirement: yup
      //   .string()
      //   .required("Yêu cầu công việc không được để trống"),
      // welfare: yup.string().required("Chế độ phúc lợi không được để trống"),
    })
    .required();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleQuillChange = (name, value) => {
    setValue(name, value, { shouldValidate: true });
  };
  const onSubmit = (data) => console.log("data", data);

  return (
    <div>
      <div className="mx-auto my-[30px] w-[90%] px-[20px] py-[20px] shadow-banner">
        <div className="flex items-center justify-center gap-2">
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
          <p className="text-[20px] font-bold text-[#FE5656]">
            {/* {props.title} */}
            Đăng tin tuyển dụng mới
          </p>
        </div>
        <form
          className="px-[40px] py-[30px] text-[15px] font-[600]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-2 flex w-full flex-col">
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

                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.jobTitle?.message}
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 flex w-full gap-12">
            <div className="flex w-[50%] flex-col">
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
                    className={`border-2 px-2 py-3 ${
                      errors.selectPosition
                        ? "border-red-500"
                        : "border-gray-300"
                    } w-full rounded-md focus:outline-none`}
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

                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.selectPosition?.message}
                  </p>
                </div>
              )}
            </div>
            <div className="flex w-[50%] flex-col">
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
                    className={`border-2 px-2 py-3 ${
                      errors.selectField ? "border-red-500" : "border-gray-300"
                    } w-full rounded-md focus:outline-none`}
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
          <div className="mt-6 flex w-full gap-12">
            <div className="flex w-[50%] flex-col">
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
                    className={`border-2 px-2 py-3 ${
                      errors.selectType ? "border-red-500" : "border-gray-300"
                    } w-full rounded-md focus:outline-none`}
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

                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.selectType?.message}
                  </p>
                </div>
              )}
            </div>
            <div className="flex w-[50%] flex-col">
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

                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.numberPosition?.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex w-full gap-12">
            <div className="flex w-[50%] flex-col">
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

                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.postDate?.message}
                  </p>
                </div>
              )}
            </div>
            <div className="flex w-[50%] flex-col">
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

                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.deadlineDate?.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col">
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
                  className={`border-2 px-2 py-3 ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  } w-full rounded-md focus:outline-none`}
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

                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.city?.message}
                </p>
              </div>
            )}
          </div>
          <div className="mt-6 flex w-full flex-col">
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

                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.address?.message}
                </p>
              </div>
            )}
          </div>
          <div className="my-6 flex w-full flex-col">
            <label htmlFor="description" className="pb-2 ">
              Mô tả công việc <span className="text-red-700">*</span>
            </label>
            <div
              className={`h-[180px] border-2 leading-normal ${
                errors.description ? "border-red-500" : "border-gray-300"
              } w-full rounded-[4px]`}
            >
              <ReactQuill
                className="h-[78%]"
                theme="snow"
                id="description"
                name="description"
                onChange={(value) => setValue("description", value)}
                modules={modules}
              />
              {/* <ReactQuill
                className="h-[78%]"
                theme="snow"
                modules={modules}
                onChange={(value) => setValue("description", value)}
                placeholder="Nhập thông tin cho vị trí công việc yêu cầu, trách nhiệm mà ứng viên có thể đảm nhận khi làm việc ở công ty"
              /> */}
            </div>
            {errors?.description && (
              <div className="flex items-center ">
                <span className="pt-1.5 ">
                  <IconError />
                </span>

                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.description?.message}
                </p>
              </div>
            )}
          </div>

          <div className="my-6 flex w-full flex-col">
            <label htmlFor="requirement" className="pb-2 ">
              Yêu cầu công việc
            </label>
            <div className="h-[180px] w-full rounded-[4px] border-2 border-gray-300 leading-normal">
              <ReactQuill
                className="h-[78%]"
                theme="snow"
                id="requirement"
                onChange={(value) => setValue("requirement", value)}
                modules={modules}
                placeholder="Nhập kỹ năng chuyên môn hoặc kỹ năng mềm cần thiết với công việc mà ứng viên cần quan tâm"
              />
            </div>
          </div>
          <div className="my-6 flex w-full flex-col">
            <label htmlFor="welfare" className="pb-2 ">
              Chế độ phúc lợi
            </label>
            <div className="h-[180px] w-full rounded-[4px] border-2 border-gray-300 leading-normal">
              <ReactQuill
                className="h-[78%]"
                theme="snow"
                id="welfare"
                onChange={(value) => setValue("welfare", value)}
                modules={modules}
                placeholder="Nhập những quyền lợi, lợi ích với công việc cho ứng viên với vị trí đăng tuyển"
              />
            </div>
          </div>
          <div className="mt-12 flex justify-end gap-4">
            <button
              className="rounded-[4px] bg-[#FE5656] px-[22px] py-[12px] text-center text-[15px] font-bold text-white hover:bg-white hover:text-[#FE5656] hover:outline hover:outline-[#FE5656]"
              type="submit"
            >
              Đăng tuyển
              {/* {props.name} */}
            </button>
            <button
              className="rounded-[4px] bg-gray-200 px-[36px] py-[12px] text-center text-[15px] font-bold text-[#7D7D7D] hover:bg-white hover:outline hover:outline-[#7D7D7D]"
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
