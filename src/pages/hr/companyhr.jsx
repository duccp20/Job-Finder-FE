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
          "Tên không được phép là số hoặc ký tự đặc biệt"
        )
        .required(),
      taxNumber: yup
        .string()
        .matches(
          /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
          "Họ và tên lót không được phép là số hoặc ký tự đặc biệt"
        )
        .required(),
      email: yup
        .string()
        .email("Email không đúng định dạng")
        .matches(
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
          "Email không đúng định dạng"
        )
        .required("Email không đúng định dạng"),
      phoneNumber: yup
        .string()
        .matches(
          /^(03|05|07|08|09|84|\+84)[0-9]{8,9}$/,
          "Số điện thoại không đúng định dạng"
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
        className="py-[30px] px-[40px] font-[600] text-[15px]"
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
                className="cursor-pointer w-full py-2 my-3 rounded-[5px] flex items-center justify-center"
              >
                {imagePreview && (
                  <div>
                    <img
                      src={imagePreview}
                      alt="Selected Image"
                      className="rounded-[8px] border border-[#7D7D7D] object-cover h-[200px] w-[200px] mx-auto"
                    />
                  </div>
                )}

                {!imagePreview && (
                  <div>
                    <img
                      src="https://source.unsplash.com/random"
                      alt=""
                      className="rounded-[8px] border border-[#7D7D7D] object-cover h-[200px] w-[200px] mx-auto"
                    />
                  </div>
                )}
              </label>
              {imageName && <p>Tên file: {imageName}</p>}
            </>
          )}
        />
        <div className="flex gap-12 w-full mt-7">
          <div className="flex flex-col w-[50%]">
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

                <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                  {errors.name?.message}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col w-[50%]">
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

                <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                  {errors.taxNumber?.message}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-12 w-full mt-6">
          <div className="flex flex-col w-[50%]">
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

                <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                  {errors.email?.message}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col w-[50%]">
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

                <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                  {errors.phoneNumber?.message}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-12 w-full mt-6">
          <div className="flex flex-col w-[50%]">
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
          <div className="flex flex-col w-[50%]">
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
          </div>
        </div>
        <div className="flex flex-col w-full mt-6">
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
        <div className="flex flex-col w-full mt-6">
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
        <div className="flex flex-col w-full mt-6">
          <label htmlFor="introduction" className="pb-2 ">
            Giới thiệu về công ty
          </label>
          <textarea
            type="text"
            id="introduction"
            {...register("introduction")}
            className="h-[180px] leading-normal py-3 px-4 border-2 border-gray-300 rounded-[4px] w-full focus:outline-none"
          />
        </div>
        <div className="mt-6 gap-4 flex justify-center">
          <button
            className="text-center text-[15px] font-bold text-white rounded-[4px] px-[22px] py-[12px] bg-[#FE5656] hover:outline hover:outline-[#FE5656] hover:bg-white hover:text-[#FE5656]"
            type="submit"
          >
            Cập nhật
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
  );
};

export default CompanyInfor;
