import React, { useState } from "react";
import HeaderHome from "../../components/HeaderHome";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Toggle } from "../../components/Toggle";
import pen from "/public/svg/pen.svg";
import Input from "../../components/Input/input";
import IconError from "../../components/IconError";
import HeaderHR from "../../components/HeaderHR/headerHr";

const CompanyInfor = () => {
  const cities = ["Tỉnh A", "Tỉnh B", "Tỉnh C"];
  const schema = yup
    .object({
      name: yup
        .string()
        .matches(
          /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
          "Tên không được phép là số hoặc ký tự đặc biệt",
        )
        .required(),
      taxNumber: yup
        .string()
        .matches(
          /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
          "Họ và tên lót không được phép là số hoặc ký tự đặc biệt",
        )
        .required(),
      email: yup
        .string()
        .email("Email không đúng định dạng")
        .matches(
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
          "Email không đúng định dạng",
        )
        .required("Email không đúng định dạng"),
      phoneNumber: yup
        .string()
        .matches(
          /^(03|05|07|08|09|84|\+84)[0-9]{8,9}$/,
          "Số điện thoại không đúng định dạng",
        )
        .required(),
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
    <div>
      <form
        className="px-[40px] py-[30px] text-[15px] font-[600]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="birthday" className="pb-1 ">
          Ảnh logo công ty <span className="text-red-700">*</span>
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
                className="m-auto my-3 flex w-fit cursor-pointer items-center justify-center rounded-[5px] py-2"
              >
                {imagePreview && (
                  <div>
                    <img
                      src={imagePreview}
                      alt="Selected Image"
                      className="mx-auto h-[200px] w-[200px] rounded-[8px] border border-[#7D7D7D] object-cover"
                    />
                  </div>
                )}

                {!imagePreview && (
                  <div>
                    <img
                      src="https://source.unsplash.com/random"
                      alt=""
                      className="mx-auto h-[200px] w-[200px] rounded-[8px] border border-[#7D7D7D] object-cover"
                    />
                  </div>
                )}
              </label>
              {imageName && <p>Tên file: {imageName}</p>}
            </>
          )}
        />
        <div className="mt-7 flex w-full gap-12">
          <div className="flex w-[50%] flex-col">
            <label htmlFor="name" className="pb-2 ">
              Tên công ty <span className="text-red-700">*</span>
            </label>
            <Input
              type="text"
              id="name"
              borderColor={errors.name ? "border-red-500" : "border-gray-300"}
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
          <div className="flex w-[50%] flex-col">
            <label htmlFor="taxNumber" className="pb-2 ">
              Mã số thuế <span className="text-red-700">*</span>
            </label>
            <Input
              type="text"
              id="taxNumber"
              borderColor={
                errors.taxNumber ? "border-red-500" : "border-gray-300"
              }
              {...register("taxNumber")}
            />
            {errors?.taxNumber && (
              <div className="flex items-center">
                <span className="pt-1.5">
                  <IconError />
                </span>

                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.taxNumber?.message}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 flex w-full gap-12">
          <div className="flex w-[50%] flex-col">
            <label htmlFor="email" className="pb-2 ">
              Email công ty<span className="text-red-700">*</span>
            </label>
            <Input
              type="email"
              id="email"
              borderColor={errors.email ? "border-red-500" : "border-gray-300"}
              {...register("email")}
            />
            {errors?.email && (
              <div className="flex items-center ">
                <span className="pt-1.5 ">
                  <IconError />
                </span>

                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.email?.message}
                </p>
              </div>
            )}
          </div>
          <div className="flex w-[50%] flex-col">
            <label htmlFor="phoneNumber" className="pb-2 ">
              Số điện thoại công ty <span className="text-red-700">*</span>
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
        </div>
        <div className="mt-6 flex w-full gap-12">
          <div className="flex w-[50%] flex-col">
            <label htmlFor="personel" className="pb-2 ">
              Quy mô nhân sự
            </label>
            <Input
              type="text"
              id="personel"
              borderColor="border-gray-300"
              {...register("personel")}
            />
          </div>
          <div className="flex w-[50%] flex-col">
            <label htmlFor="city" className="pb-2 ">
              Tỉnh/ Thành phố
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
          </div>
        </div>
        <div className="mt-6 flex w-full flex-col">
          <label htmlFor="website" className="pb-2 ">
            Website công ty
          </label>
          <Input
            type="text"
            id="website"
            borderColor="border-gray-300"
            {...register("website")}
          />
        </div>
        <div className="mt-6 flex w-full flex-col">
          <label htmlFor="address" className="pb-2 ">
            Địa điểm làm việc
          </label>
          <Input
            type="text"
            id="address"
            borderColor="border-gray-300"
            {...register("address")}
          />
        </div>
        <div className="mt-6 flex w-full flex-col">
          <label htmlFor="introduction" className="pb-2 ">
            Giới thiệu về công ty
          </label>
          <textarea
            type="text"
            id="introduction"
            {...register("introduction")}
            className="h-[180px] w-full rounded-[4px] border-2 border-gray-300 px-4 py-3 leading-normal focus:outline-none"
          />
        </div>
        <div className="mt-6 flex justify-center gap-4">
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
  );
};

export default CompanyInfor;
