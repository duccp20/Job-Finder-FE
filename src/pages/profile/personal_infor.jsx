import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Toggle } from "../../components/Toggle";
import pen from "/public/svg/pen.svg";
import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/Input/input";

const cities = ["Tỉnh A", "Tỉnh B", "Tỉnh C"];
const districts = {
  "Tỉnh A": ["Quận/Huyện A1", "Quận/Huyện A2"],
  "Tỉnh B": ["Quận/Huyện B1", "Quận/Huyện B2"],
  "Tỉnh C": ["Quận/Huyện C1", "Quận/Huyện C2"],
};
const PersonalInfor = () => {
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

  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imgDataUrl = e.target.result;
        setImagePreview(imgDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <HeaderHome />
      <div className="flex h-screen w-full px-[100px] mt-[60px] gap-[24px] items-start">
        <div className="border border-[#FE5656] rounded-[10px] w-[40%] h-auto py-[50px] px-[45px] shadow-banner">
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
                        className="aspect-square mx-auto rounded-full object-cover bg-center bg-no-repeat w-[200px] h-[200px]"
                      />
                    </div>
                  )}

                  {!imagePreview && (
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Selected Image"
                        className="aspect-square mx-auto rounded-full object-cover bg-center bg-no-repeat w-[200px] h-[200px]"
                      />
                    </div>
                  )}
                </label>
              </>
            )}
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
              Thông tin cá nhân
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
                  borderColor="border-gray-300"
                  {...register("subName")}
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label htmlFor="name" className="pb-2 ">
                  Tên <span className="text-red-700">*</span>
                </label>
                <Input
                  type="text"
                  id="name"
                  borderColor="border-gray-300"
                  {...register("name")}
                />
              </div>
            </div>
            <div className="flex gap-5 w-full mt-6">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="email" className="pb-2 ">
                  Email <span className="text-red-700">*</span>
                </label>
                <Input
                  type="email"
                  id="email"
                  borderColor="border-gray-300"
                  {...register("email")}
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label htmlFor="birthday" className="pb-2 ">
                  Ngày sinh <span className="text-red-700">*</span>
                </label>
                <Input
                  type="date"
                  id="birthday"
                  borderColor="border-gray-300"
                  {...register("birthday")}
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
                  borderColor="border-gray-300"
                  {...register("phoneNumber")}
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label htmlFor="gender" className="pb-2 ">
                  Giới tính <span className="text-red-700">*</span>
                </label>
                <Controller
                  name="selectGender"
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
                        Chọn giới tính
                      </option>
                      <option value="male">Nam</option>
                      <option value="female">Nữ</option>
                    </select>
                  )}
                />
              </div>
            </div>
            <div className="flex gap-5 w-full mt-6">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="city" className="pb-2 ">
                  Tỉnh/ Thành phố <span className="text-red-700">*</span>
                </label>
                <select
                  {...register("city")}
                  value={watch("city") || ""}
                  onChange={(e) =>
                    setValue("city", e.target.value, { shouldValidate: true })
                  }
                  className={
                    "py-3 px-2 border-2 border-gray-300 rounded-md w-full focus:outline-none"
                  }
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
                      className={
                        "py-3 px-2 border-2 border-gray-300 rounded-md w-full focus:outline-none"
                      }
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
              </div>
            </div>
            <div className="flex flex-col w-full mt-6">
              <label htmlFor="address" className="pb-2 ">
                Địa chỉ <span className="text-red-700">*</span>
              </label>
              <Input
                type="text"
                id="address"
                borderColor="border-gray-300"
                {...register("address")}
              />
            </div>
            <div className="flex flex-col w-full mt-6">
              <label htmlFor="school" className="pb-2 ">
                Trường học
              </label>
              <Input
                type="text"
                id="school"
                borderColor="border-gray-300"
                {...register("school")}
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

export default PersonalInfor;
