import { Input } from "postcss";
import React from "react";
import IconError from "../../components/IconError";

const Dropdown = () => {
  return (
    <div>
      <div className=" mt-5 flex w-full gap-4">
        <div className="flex w-[70%] flex-col">
          <label htmlFor="companyName" className="pb-1 font-bold">
            Tên công ty <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <Input
              type="text"
              id="companyName"
              {...register("companyName")}
              borderColor={
                errors.companyName ? "border-red-500" : "border-gray-300"
              }
            />
          </div>
          {errors?.companyName && (
            <div className="relative">
              <div className="absolute flex items-center justify-center">
                <span>
                  <IconError />
                </span>

                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.companyName?.message}
                </p>
              </div>
            </div>
          )}
          {!errors?.companyName && (
            <div className="relative">
              <span className="absolute px-2 pt-2 text-[12px] font-thin italic">
                Nhập tên công ty theo giấy phép đăng ký kinh doanh
              </span>
            </div>
          )}
        </div>

        <div className=" flex w-[30%] flex-col">
          <label htmlFor="taxCode" className="pb-1 font-bold">
            Mã số thuế <span className="text-red-700">*</span>
          </label>
          <div className="relative">
            <Input
              type="text"
              id="taxCode"
              {...register("taxCode")}
              borderColor={errors.name ? "border-red-500" : "border-gray-300"}
            />
          </div>
          {errors?.taxCode && (
            <div className="relative">
              <div className="absolute flex items-center justify-center">
                <span>
                  <IconError />
                </span>
                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.taxCode?.message}
                </p>
              </div>
            </div>
          )}
          {!errors?.taxCode && (
            <div className="relative">
              <span className="absolute px-2 pt-2 text-[12px]  font-thin italic">
                Nhập mã số thuế
              </span>
            </div>
          )}
        </div>
      </div>
      <div className=" mt-10 flex w-full gap-4">
        <div className="flex w-[70%] flex-col">
          <label htmlFor="companyEmail" className="pb-1 font-bold">
            Email công ty <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <Input
              type="text"
              id="companyEmail"
              {...register("companyEmail")}
              borderColor={
                errors.companyEmail ? "border-red-500" : "border-gray-300"
              }
            />
          </div>
          {errors?.companyEmail && (
            <div className="relative">
              <div className="absolute flex items-center justify-center">
                <span>
                  <IconError />
                </span>

                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.companyEmail?.message}
                </p>
              </div>
            </div>
          )}
          {!errors?.companyEmail && (
            <div className="relative">
              <span className="absolute px-2 pt-2 text-[12px] font-thin italic">
                Nhập địa điểm làm việc của công ty
              </span>
            </div>
          )}
        </div>

        <div className="  flex w-[30%] flex-col">
          <label htmlFor="taxCode" className="pb-1 font-bold">
            Số điện thoại công ty <span className="text-red-700">*</span>
          </label>
          <div className="relative">
            <Input
              type="text"
              id="taxCode"
              {...register("taxCode")}
              borderColor={errors.name ? "border-red-500" : "border-gray-300"}
            />
          </div>
          {errors?.taxCode && (
            <div className="relative">
              <div className="absolute flex items-center justify-center">
                <span>
                  <IconError />
                </span>
                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.taxCode?.message}
                </p>
              </div>
            </div>
          )}
          {!errors?.taxCode && (
            <div className="relative">
              <span className="absolute px-2 pt-2 text-[12px]  font-thin italic">
                Nhập số điện thoại của công ty
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
