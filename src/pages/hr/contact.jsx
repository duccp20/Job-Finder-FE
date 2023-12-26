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

const ContactInfor = () => {
  const cities = ["Tỉnh A", "Tỉnh B", "Tỉnh C"];
  const districts = {
    "Tỉnh A": ["Quận/Huyện A1", "Quận/Huyện A2"],
    "Tỉnh B": ["Quận/Huyện B1", "Quận/Huyện B2"],
    "Tỉnh C": ["Quận/Huyện C1", "Quận/Huyện C2"],
  };
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
      email: yup
        .string()
        .email("Email không đúng định dạng")
        .matches(
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
          "Email không đúng định dạng",
        )
        .required("Email không đúng định dạng"),
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
      position: yup.string().required("Chức vụ không được để trống"),
      city: yup.string().required("Vui lòng chọn tỉnh thành"),
      district: yup.string().required("Vui lòng chọn quận huyện"),
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
        <label htmlFor="birthday" className="pb-2 ">
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
                className="m-auto my-3 flex w-fit cursor-pointer items-center justify-center rounded-[5px] py-2"
              >
                {imagePreview && (
                  <div>
                    <img
                      src={imagePreview}
                      alt="Selected Image"
                      className="mx-auto aspect-square h-[200px] w-[200px] rounded-full bg-center bg-no-repeat object-cover"
                    />
                  </div>
                )}

                {!imagePreview && (
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Selected Image"
                      className="mx-auto aspect-square h-[200px] w-[200px] rounded-full bg-center bg-no-repeat object-cover"
                    />
                  </div>
                )}
                {/* Hiển thị tên file */}
              </label>
              {imageName && <p>Tên file: {imageName}</p>}
            </>
          )}
        />
        <div className="my-[30px] w-full border border-[#00000033] p-[20px]">
          <div className="flex items-center gap-10">
            <p className="text-[16px] font-[600] text-[#FE5656]">
              Nhận thông báo về email
            </p>
            <Toggle></Toggle>
          </div>
          <p className="mt-[15px] text-[12px] font-[400] italic text-[#7D7D7D]">
            Hãy bật thông báo để bạn không bỏ lỡ bất kỳ thông tin nào.
          </p>
        </div>
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
        </div>
        <div className="mt-6 flex w-full gap-12">
          <div className="flex w-[50%] flex-col">
            <label htmlFor="email" className="pb-2 ">
              Email <span className="text-red-700">*</span>
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
                  className={`border-2 px-2 py-3 ${
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
        </div>
        <div className="mt-6 flex w-full gap-12">
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
          {/* <div className="flex flex-col w-[50%]"> */}
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
        {/* <div className="flex flex-col w-[50%]">
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
          </div> */}
        {/* </div> */}
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
        <div className="mt-6 flex w-full flex-col">
          <label htmlFor="position" className="pb-2 ">
            Chức vụ tại công ty <span className="text-red-700">*</span>
          </label>
          <Input
            type="text"
            id="position"
            borderColor={errors.position ? "border-red-500" : "border-gray-300"}
            {...register("position")}
          />
          {errors?.position && (
            <div className="flex items-center ">
              <span className="pt-1.5 ">
                <IconError />
              </span>

              <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                {errors.position?.message}
              </p>
            </div>
          )}
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

export default ContactInfor;
