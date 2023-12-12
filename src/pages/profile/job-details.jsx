import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const positions = ["Vị trí A", "Vị trí B", "Vị trí C"];

const JobDetails = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const dataUser = useSelector((state) => state.account.user);
  const dispatch = useDispatch();
  const dataCandidate = useSelector((state) => state.candidate.data);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
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

  const onSubmit = async (data) => {
    console.log(data);
    console.log(dataUser);
    const userProfileDTO = {
      userId: dataUser.id,
      firstName: data.name,
      lastName: data.subName,
      phone: data.phoneNumber,
      birthDay: convertDate(data.birthday),
      gender: data.gender,
      address: data.address,
      avatar: dataUser.avatar,
    };

    const candidateDTO = {
      ...dataCandidate,
      university: data.university,
    };
    setIsSubmitting(true);
    const candidateProfileDTO = JSON.stringify({
      userProfileDTO,
      candidateDTO,
    });
    const res = await callEditProfile(dataUser.id, candidateProfileDTO);
    console.log(res);
    setIsSubmitting(false);
    if (res && res?.data) {
      dispatch(doSetProfileData(res.data.showUserDTO));
      dispatch(doSetCandidateData(res.data.candidateDTO));
      setShowPopup(true);
    }

    if (res?.errors) {
      alert(res.message);
    }
  };

  return (
    <div className=" flex h-auto w-[60%] flex-col rounded-[10px] shadow-banner">
      <div className=" flex h-[55px] w-full justify-between rounded-bl-[0px] rounded-br-[0px] rounded-tl-[10px] rounded-tr-[10px] bg-[#FE5656] px-[44px] py-[14px] shadow-banner">
        <span className="text-xl font-bold not-italic text-white ">
          Thông tin việc muốn ứng tuyển
        </span>
        <a href="#" className="">
          <img src={pen} alt="" />
        </a>
      </div>

      <form
        className=" px-[40px] py-[30px]  text-[15px] font-[600]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-4 flex w-full flex-col">
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

              <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                {errors.job?.message}
              </p>
            </div>
          )}
        </div>
        <div className="mt-6 flex w-full flex-col">
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
                  errors.selectPosition ? "border-red-500" : "border-gray-300"
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
        <div className="mt-6 flex w-full flex-col">
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
          {errors?.selectField && (
            <div className="flex items-center ">
              <span className="pt-1.5">
                <IconError />
              </span>

              <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                {errors.selectField?.message}
              </p>
            </div>
          )}
        </div>
        <div className="mt-6 flex w-full flex-col">
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
        <div className="mt-6 flex w-full flex-col">
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
                className={`border-2 px-2 py-3 ${
                  errors.selectLocation ? "border-red-500" : "border-gray-300"
                } w-full rounded-md focus:outline-none`}
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

              <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                {errors.selectLocation?.message}
              </p>
            </div>
          )}
        </div>
        <div className="mt-6 flex w-full flex-col ">
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
                  } flex w-full items-center justify-center rounded-[5px] py-2`}
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

              <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                {errors.cv?.message}
              </p>
            </div>
          )}
        </div>
        <div className="mt-6 flex w-full flex-col">
          <label htmlFor="coverLetter" className="pb-2 ">
            Thư xin việc
          </label>
          <textarea
            type="text"
            id="coverLetter"
            {...register("coverLetter")}
            className="h-[180px] w-full rounded-[4px] border-2 border-gray-300 px-4 py-3 leading-normal focus:outline-none"
            placeholder="Viết giới thiệu ngắn gọn về bản thân (điểm mạnh và điểm yếu) và nêu rõ mong muốn, lý do làm việc tại công ty này."
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            className="rounded-[4px] bg-[#FE5656] px-[22px] py-[12px] text-center text-[15px] font-bold text-white"
            type="submit"
          >
            Cập nhật
          </button>
          <button
            className="rounded-[4px] bg-gray-200 px-[36px] py-[12px] text-center text-[15px] font-bold text-[#7D7D7D] "
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
