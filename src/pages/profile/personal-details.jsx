import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Toggle } from "../../components/Toggle";
import pen from "/public/svg/pen.svg";
import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/Input/input";
import IconError from "../../components/IconError";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// const cities = ["Tỉnh A", "Tỉnh B", "Tỉnh C"];
// const districts = {
//   "Tỉnh A": ["Quận/Huyện A1", "Quận/Huyện A2"],
//   "Tỉnh B": ["Quận/Huyện B1", "Quận/Huyện B2"],
//   "Tỉnh C": ["Quận/Huyện C1", "Quận/Huyện C2"],
// };
const PersonalDetails = () => {
  const navigate = useNavigate();
  const dataUser = useSelector((state) => state.account.user);
  const universityData = useSelector(
    (state) => state.candidate.data.university
  );
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const schema = yup
    .object({
      subName: yup
        .string()
        .matches(
          /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
          "Họ và tên lót không được phép là số hoặc ký tự đặc biệt"
        )
        .required(),
      name: yup
        .string()
        .matches(
          /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
          "Tên không được phép là số hoặc ký tự đặc biệt"
        )
        .required(),

      phoneNumber: yup
        .string()
        .matches(
          /^(03|05|07|08|09|84|\+84)[0-9]{8,9}$/,
          "Số điện thoại không đúng định dạng"
        )
        .required(),

      address: yup.string().required("Địa chỉ không được để trống"),
      // city: yup.string().required("Vui lòng chọn tỉnh thành"),
      // district: yup.string().required("Vui lòng chọn quận huyện"),
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

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setValue("school", universityData || "");
  }, [universityData, setValue]);
  function convertDate(inputDate) {
    const parts = inputDate.split("/");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return (
    <>
      <div className="h-auto w-[60%] rounded-[10px] shadow-banner flex flex-col">
        <div className=" rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[0px] rounded-br-[0px] bg-[#FE5656] w-full h-[55px] flex justify-between py-[14px] px-[44px] shadow-banner">
          <span className="text-xl not-italic font-bold text-white ">
            Thông tin cá nhân
            {universityData}
          </span>
          <a href="#" className="">
            <img src={pen} alt="" />
          </a>
        </div>
        <form
          className="py-[30px] px-[40px] font-[600] text-[15px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-5 w-full mt-4">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="subName" className="pb-2 ">
                Họ và tên lót <span className="text-red-700">*</span>
              </label>
              <Input
                type="text"
                id="subName"
                {...register("subName")}
                bordercolor={
                  errors.subName ? "border-red-500" : "border-gray-300"
                }
                defaultValue={
                  isAuthenticated && dataUser ? dataUser.lastName : ""
                }
              />
              {errors?.subName && (
                <div className="flex items-center">
                  <span className="pt-1.5">
                    <IconError />
                  </span>

                  <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                    {errors.subName?.message}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="name" className="pb-2 ">
                Tên <span className="text-red-700">*</span>
              </label>
              <Input
                type="text"
                id="name"
                bordercolor={errors.name ? "border-red-500" : "border-gray-300"}
                {...register("name")}
                defaultValue={
                  isAuthenticated && dataUser ? dataUser.firstName : ""
                }
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
          </div>
          <div className="flex gap-5 w-full mt-6">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="email" className="pb-2 ">
                Email <span className="text-red-700">*</span>
              </label>
              <Input
                disabled={true}
                type="email"
                id="email"
                bordercolor="border-gray-300"
                defaultValue={isAuthenticated && dataUser ? dataUser.email : ""}
              />
            </div>
            <div className="flex flex-col w-[50%]">
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
                    bordercolor={
                      errors.birthday ? "border-red-500" : "border-gray-300"
                    }
                    {...register("birthday")}
                    defaultValue={
                      isAuthenticated && dataUser && dataUser.birthDay
                        ? convertDate(dataUser.birthDay)
                        : ""
                    }
                  />
                )}
              />
            </div>
          </div>
          <div className="flex gap-5 w-full mt-6">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="phoneNumber" className="pb-2 ">
                Số điện thoại <span className="text-red-700">*</span>
              </label>
              <Input
                type="tel"
                id="phoneNumber"
                bordercolor={
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }
                {...register("phoneNumber")}
                defaultValue={isAuthenticated && dataUser ? dataUser.phone : ""}
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
            <div className="flex flex-col w-[50%]">
              <label htmlFor="gender" className="pb-2 ">
                Giới tính <span className="text-red-700">*</span>
              </label>
              <Controller
                name="gender"
                control={control}
                defaultValue={
                  isAuthenticated && dataUser && dataUser.gender ? "Nam" : "Nữ"
                }
                render={({ field }) => (
                  <select
                    {...field}
                    className={`py-3 px-2 border-2 ${
                      errors.gender ? "border-red-500" : "border-gray-300"
                    } rounded-md w-full focus:outline-none`}
                  >
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                )}
              />
            </div>
          </div>
          {/* <div className="flex gap-5 w-full mt-6">
            <div className="flex flex-col w-[50%]">
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
                    value={watch("city") || ""}
                    onChange={(e) =>
                      setValue("city", e.target.value, {
                        shouldValidate: true,
                      })
                    }
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
            <div className="flex flex-col w-[50%]">
              <label htmlFor="district" className="pb-2 ">
                Quận/ Huyện <span className="text-red-700">*</span>
              </label>
              <Controller
                name="district"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    value={watch("district") || ""}
                    onChange={(e) =>
                      setValue("district", e.target.value, {
                        shouldValidate: true,
                      })
                    }
                    className={`py-3 px-2 border-2 ${
                      errors.district ? "border-red-500" : "border-gray-300"
                    } rounded-md w-full focus:outline-none`}
                  >
                    <option value="" disabled hidden>
                      Chọn quận/huyện
                    </option>
                    {districts[watch("city")] &&
                      districts[watch("city")].map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                  </select>
                )}
              />
              {errors?.district && (
                <div className="flex items-center ">
                  <span className="pt-1.5">
                    <IconError />
                  </span>

                  <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                    {errors.district?.message}
                  </p>
                </div>
              )}
            </div>
          </div> */}
          <div className="flex flex-col w-full mt-6">
            <label htmlFor="address" className="pb-2 ">
              Địa chỉ <span className="text-red-700">*</span>
            </label>
            <Input
              type="text"
              id="address"
              bordercolor={
                errors.address ? "border-red-500" : "border-gray-300"
              }
              {...register("address")}
              defaultValue={isAuthenticated && dataUser ? dataUser.address : ""}
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
          <div className="flex flex-col w-full mt-6">
            <label htmlFor="school" className="pb-2 ">
              Trường học
            </label>
            <Input
              type="text"
              id="school"
              bordercolor="border-gray-300"
              {...register("school")}
              defaultValue={universityData || ""}
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
              type="text"
              onClick={() => {
                navigate("/profile");
              }}
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalDetails;
