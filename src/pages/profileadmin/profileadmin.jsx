import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Toggle } from "../../components/Toggle";
import pen from "/public/svg/pen.svg";
import Input from "../../components/Input/input";
import IconError from "../../components/IconError";
import HeaderHR from "../../components/HeaderHR/headerHr";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideBar from "../../components/Admin/sideBar/sidebar";
import { useRef } from "react";

const ProfileAdmin = () => {
  const schema = yup
    .object({
      subName: yup
        .string()
        .matches(
          /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
          "Họ và tên lót không được phép là số hoặc ký tự đặc biệt",
        )
        .required(),
      name: yup
        .string()
        .matches(
          /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
          "Tên không được phép là số hoặc ký tự đặc biệt",
        )
        .required(),

      birthday: yup
        .date()
        .max(new Date(), "Ngày không thể vượt quá ngày hiện tại")
        .required("Vui lòng chọn ngày"),
      phoneNumber: yup
        .string()
        .matches(
          /^(03|05|07|08|09|84|\+84)[0-9]{8,9}$/,
          "Số điện thoại không đúng định dạng",
        )
        .required(),
      gender: yup.string().required("Vui lòng chọn giới tính"),
    })
    .required();

  const [imagePreview, setImagePreview] = useState("");
  const [imageName, setImageName] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imgDataUrl = e.target.result;
        setImagePreview(imgDataUrl);

        setImageName(file.name);
      };

      reader.readAsDataURL(file);
    }
  };

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

  const onSubmit = (data) => console.log(data);
  return (
    // <div>
    <div className="bg-[#F6F6F6]">
      <HeaderAdmin></HeaderAdmin>
      <div className=" flex flex-row gap-[20px] pt-[90px]">
        <SideBar></SideBar>
        <div className="flex h-[100vh] w-[80%] flex-col gap-[20px] ">
          <div className=" bg-white px-[10px] py-[10px] font-bold text-[#fe5656] ">
            Thay đổi thông tin
          </div>
          <div className=" h-auto bg-white  py-6 pl-5">
            <form
              // className="px-[40px] py-[30px] text-[15px] font-[600]"
              className="  w-[65%] bg-white pl-5 text-[15px] font-[700]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="" className="pb-2 ">
                Ảnh đại diện <span className="text-red-700">*</span>
              </label>
              <Controller
                name="image"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input
                      type="file"
                      accept="image/*"
                      id="img"
                      onChange={handleImageChange}
                      // {...field}
                      style={{ display: "none" }}
                    />
                    <label
                      htmlFor="img"
                      className="my-3 flex  h-[10%] w-[20%]  cursor-pointer  justify-start rounded-[5px] py-2"
                    >
                      {imagePreview && (
                        <div className="group relative inline-block">
                          <div className=" absolute  bottom-0 hidden  group-hover:block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="auto"
                              height="auto"
                              viewBox="0 0 100 100"
                              fill="none"
                            >
                              <circle
                                cx="50"
                                cy="50"
                                r="50"
                                fill="#D9D9D9"
                                fill-opacity="0.5"
                              />
                              <mask
                                id="mask0_1975_2076"
                                className="mask-type:alpha"
                                maskUnits="userSpaceOnUse"
                                x="38"
                                y="38"
                                width="50"
                                height="50"
                              >
                                <rect
                                  x="38"
                                  y="38"
                                  width="50"
                                  height="50"
                                  fill="#D9D9D9"
                                />
                              </mask>
                              <g mask="url(#mask0_1975_2076)">
                                <path
                                  d="M50 55.5C51.25 55.5 52.3125 55.0625 53.1875 54.1875C54.0625 53.3125 54.5 52.25 54.5 51C54.5 49.75 54.0625 48.6875 53.1875 47.8125C52.3125 46.9375 51.25 46.5 50 46.5C48.75 46.5 47.6875 46.9375 46.8125 47.8125C45.9375 48.6875 45.5 49.75 45.5 51C45.5 52.25 45.9375 53.3125 46.8125 54.1875C47.6875 55.0625 48.75 55.5 50 55.5ZM50 53.5C49.3 53.5 48.7083 53.2583 48.225 52.775C47.7417 52.2917 47.5 51.7 47.5 51C47.5 50.3 47.7417 49.7083 48.225 49.225C48.7083 48.7417 49.3 48.5 50 48.5C50.7 48.5 51.2917 48.7417 51.775 49.225C52.2583 49.7083 52.5 50.3 52.5 51C52.5 51.7 52.2583 52.2917 51.775 52.775C51.2917 53.2583 50.7 53.5 50 53.5ZM42 59C41.45 59 40.9792 58.8042 40.5875 58.4125C40.1958 58.0208 40 57.55 40 57V45C40 44.45 40.1958 43.9792 40.5875 43.5875C40.9792 43.1958 41.45 43 42 43H45.15L47 41H53L54.85 43H58C58.55 43 59.0208 43.1958 59.4125 43.5875C59.8042 43.9792 60 44.45 60 45V57C60 57.55 59.8042 58.0208 59.4125 58.4125C59.0208 58.8042 58.55 59 58 59H42ZM42 57H58V45H53.95L52.125 43H47.875L46.05 45H42V57Z"
                                  fill="white"
                                />
                              </g>
                            </svg>
                          </div>
                          <img
                            src={imagePreview}
                            alt="Selected Image"
                            className="mx-auto aspect-square h-[100px] w-[100px] rounded-full bg-center bg-no-repeat object-cover "
                          />
                        </div>
                      )}

                      {!imagePreview && (
                        <div className="group relative inline-block">
                          <div className=" absolute  bottom-0    hidden  group-hover:block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="auto"
                              height="auto"
                              viewBox="0 0 100 100"
                              fill="none"
                            >
                              <circle
                                cx="50"
                                cy="50"
                                r="50"
                                fill="#D9D9D9"
                                fill-opacity="0.5"
                              />
                              <mask
                                id="mask0_1975_2076"
                                className="mask-type:alpha"
                                maskUnits="userSpaceOnUse"
                                x="38"
                                y="38"
                                width="50"
                                height="50"
                              >
                                <rect
                                  x="38"
                                  y="38"
                                  width="50"
                                  height="50"
                                  fill="#D9D9D9"
                                />
                              </mask>
                              <g mask="url(#mask0_1975_2076)">
                                <path
                                  d="M50 55.5C51.25 55.5 52.3125 55.0625 53.1875 54.1875C54.0625 53.3125 54.5 52.25 54.5 51C54.5 49.75 54.0625 48.6875 53.1875 47.8125C52.3125 46.9375 51.25 46.5 50 46.5C48.75 46.5 47.6875 46.9375 46.8125 47.8125C45.9375 48.6875 45.5 49.75 45.5 51C45.5 52.25 45.9375 53.3125 46.8125 54.1875C47.6875 55.0625 48.75 55.5 50 55.5ZM50 53.5C49.3 53.5 48.7083 53.2583 48.225 52.775C47.7417 52.2917 47.5 51.7 47.5 51C47.5 50.3 47.7417 49.7083 48.225 49.225C48.7083 48.7417 49.3 48.5 50 48.5C50.7 48.5 51.2917 48.7417 51.775 49.225C52.2583 49.7083 52.5 50.3 52.5 51C52.5 51.7 52.2583 52.2917 51.775 52.775C51.2917 53.2583 50.7 53.5 50 53.5ZM42 59C41.45 59 40.9792 58.8042 40.5875 58.4125C40.1958 58.0208 40 57.55 40 57V45C40 44.45 40.1958 43.9792 40.5875 43.5875C40.9792 43.1958 41.45 43 42 43H45.15L47 41H53L54.85 43H58C58.55 43 59.0208 43.1958 59.4125 43.5875C59.8042 43.9792 60 44.45 60 45V57C60 57.55 59.8042 58.0208 59.4125 58.4125C59.0208 58.8042 58.55 59 58 59H42ZM42 57H58V45H53.95L52.125 43H47.875L46.05 45H42V57Z"
                                  fill="white"
                                />
                              </g>
                            </svg>
                          </div>
                          <img
                            src="https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Selected Image"
                            className="mx-auto aspect-square  w-[200px] rounded-full bg-center bg-no-repeat object-cover "
                          />
                        </div>
                      )}
                      {/* Hiển thị tên file */}
                    </label>
                    {imageName && <p>Tên file: {imageName}</p>}
                  </>
                )}
              />
              <div className="mt-4 flex w-full gap-12">
                <div className="flex w-[50%] flex-col">
                  <label htmlFor="email" className="pb-2 ">
                    Email <span className="text-red-700">*</span>
                  </label>

                  <Input
                    type="email"
                    id="email"
                    borderColor="border-gray-300"
                    value="hmuhmu@gmail.com"
                    disabled
                    // {...register("email")}
                    bgColor="bg-[#DEDEDE]"
                  />
                </div>
                <div className="flex w-[50%] flex-col">
                  <label htmlFor="phoneNumber" className="pb-2 ">
                    Số điện thoại <span className="text-red-700">*</span>
                  </label>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    borderColor={
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    }
                    {...register("phoneNumber")}
                  />
                  {errors?.phoneNumber && (
                    <div className="flex items-center ">
                      <span className="pt-1.5 ">
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.phoneNumber?.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>{" "}
              <div className="mt-4 flex w-full gap-12">
                <div className="flex w-[50%] flex-col">
                  <label htmlFor="subName" className="pb-2 ">
                    Họ và tên lót <span className="text-red-700">*</span>
                  </label>
                  <Input
                    type="text"
                    id="subName"
                    {...register("subName")}
                    borderColor={
                      errors.subName ? "border-red-500" : "border-gray-300"
                    }
                  />
                  {errors?.subName && (
                    <div className="flex items-center">
                      <span className="pt-1.5">
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.subName?.message}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex w-[50%] flex-col">
                  <label htmlFor="name" className="pb-2 ">
                    Tên <span className="text-red-700">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    borderColor={
                      errors.name ? "border-red-500" : "border-gray-300"
                    }
                    {...register("name")}
                  />
                  {errors?.name && (
                    <div className="flex items-center ">
                      <span className="pt-1.5">
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.name?.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 flex w-full gap-12">
                <div className="flex w-[50%] flex-col">
                  <label htmlFor="gender" className="pb-2 ">
                    Giới tính <span className="text-red-700">*</span>
                  </label>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <select
                        {...field}
                        className={`border-2 px-2 py-3 font-[400] ${
                          errors.gender ? "border-red-500" : "border-gray-300"
                        } w-full rounded-md focus:outline-none`}
                      >
                        <option value="" disabled hidden>
                          Chọn giới tính
                        </option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                      </select>
                    )}
                  />
                  {errors?.gender && (
                    <div className="flex items-center ">
                      <span className="pt-1.5 ">
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.gender?.message}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex w-[50%] flex-col">
                  <label htmlFor="birthday" className="pb-2 ">
                    Ngày sinh <span className="text-red-700">*</span>
                  </label>
                  <Controller
                    name="birthday"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="date"
                        id="birthday"
                        borderColor={
                          errors.birthday ? "border-red-500" : "border-gray-300"
                        }
                      />
                    )}
                  />
                  {errors?.birthday && (
                    <div className="flex items-center ">
                      <span className="pt-1.5 ">
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.birthday?.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-6 flex w-full flex-col">
                <label htmlFor="address" className="pb-2 ">
                  Địa chỉ nơi ở
                </label>
                <Input
                  type="text"
                  id="address"
                  borderColor="border-gray-300"
                  {...register("address")}
                />
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <button
                  className="rounded-[4px] bg-[#FE5656] px-[22px] py-[12px] text-center text-[15px] font-bold text-white hover:bg-white hover:text-[#FE5656] hover:outline hover:outline-[#FE5656]"
                  type="submit"
                >
                  Cập nhật
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
      </div>
    </div>
    // </div>
  );
};

export default ProfileAdmin;
