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
import Button from "../../components/Button/button";
import PDF from "../pdf/pdf";

const positions = ["Vị trí A", "Vị trí B", "Vị trí C"];

const JobDetails = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCV, setShowCV] = useState(false);
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

  const [cvPreview, setCVPreview] = useState("");
  const [cvFileName, setCVFileName] = useState("");
  const handleUploadCv = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCVFileName(file.name);
      const reader = new FileReader();

      reader.onload = function (e) {
        const cvUrl = e.target.result;
        setCVPreview(cvUrl);
      };

      reader.readAsDataURL(file);
    }
  };

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

  const handleShowCV = (e) => {
    e.preventDefault(); //chặn mở upload file popup
    e.stopPropagation(); //chặn bubbling lên thằng cha
    setShowCV(true);
  };

  const handleCloseCV = () => {
    setShowCV(false);
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
      {showCV && <PDF file={cvPreview} onClose={handleCloseCV}></PDF>}
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
                  onChange={(e) => handleUploadCv(e)}
                />
                <label
                  htmlFor="cv"
                  className="flex w-full cursor-pointer items-center justify-center rounded-[5px] border-2 border-gray-300 py-2"
                >
                  {cvFileName ? (
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="16"
                        viewBox="0 0 11 16"
                        fill="none"
                      >
                        <path
                          d="M9.16281 3.63242V11.987C9.16281 12.7577 8.75634 13.4968 8.03282 14.0418C7.3093 14.5868 6.328 14.8929 5.30478 14.8929C4.28157 14.8929 3.30027 14.5868 2.57675 14.0418C1.85323 13.4968 1.44676 12.7577 1.44676 11.987V2.90594C1.44676 2.42425 1.7008 1.96229 2.153 1.62168C2.6052 1.28108 3.21852 1.08973 3.85802 1.08973C4.49753 1.08973 5.11085 1.28108 5.56305 1.62168C6.01525 1.96229 6.26929 2.42425 6.26929 2.90594V10.534C6.26929 10.7267 6.16767 10.9115 5.98679 11.0477C5.80591 11.184 5.56059 11.2605 5.30478 11.2605C5.04898 11.2605 4.80366 11.184 4.62278 11.0477C4.4419 10.9115 4.34028 10.7267 4.34028 10.534V3.63242H2.89352V10.534C2.89352 11.0157 3.14756 11.4777 3.59976 11.8183C4.05196 12.1589 4.66528 12.3502 5.30478 12.3502C5.94429 12.3502 6.55761 12.1589 7.00981 11.8183C7.46201 11.4777 7.71605 11.0157 7.71605 10.534V2.90594C7.71605 2.13523 7.30958 1.3961 6.58606 0.851129C5.86254 0.30616 4.88124 0 3.85802 0C2.83481 0 1.85351 0.30616 1.12999 0.851129C0.406469 1.3961 0 2.13523 0 2.90594V11.987C0 13.0467 0.558895 14.063 1.55373 14.8124C2.54857 15.5617 3.89787 15.9827 5.30478 15.9827C6.7117 15.9827 8.06099 15.5617 9.05583 14.8124C10.0507 14.063 10.6096 13.0467 10.6096 11.987V3.63242H9.16281Z"
                          fill="#0FA958"
                        />
                      </svg>
                      <span>{cvFileName}</span>
                      <span
                        onClick={(e) => handleShowCV(e)}
                        className="font-weight-400 cursor-pointer font-light italic text-[#7D7D7D]"
                      >
                        (Click để xem)
                      </span>
                    </div>
                  ) : (
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
                  )}
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
          <Button
            isSubmitting={isSubmitting}
            textSubmitting={"Đang cập nhật"}
            textNoSubmitting={"Cập nhật"}
          />
          <button
            className="rounded-[4px] bg-gray-200 px-[36px] py-[12px] text-center text-[15px] font-bold text-[#7D7D7D] "
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
  );
};

export default JobDetails;
