import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Toggle } from "../../components/Toggle";
import pen from "/public/svg/pen.svg";
import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/Input/input";
import IconError from "../../components/IconError";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callEditProfile } from "../../service/candidate/api";
import { doSetProfileData } from "../../redux/account/accountSlice";
import { doSetCandidateData } from "../../redux/candidate/candidateSlice";
import Spinner from "../../components/Spinner/spinnner";
import Popup from "../../components/Popup";
import Button from "../../components/Button/button";

const PersonalDetails = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const dataUser = useSelector((state) => state.account.user);
  const dispatch = useDispatch();
  const candidateID = useSelector((state) => state.candidate.id);
  console.log("candidateID", candidateID);
  const dataCandidate = useSelector((state) => state.candidate.data);
  console.log("dataCandidate", dataCandidate);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
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

      phoneNumber: yup
        .string()
        .matches(
          /^(03|05|07|08|09|84|\+84)[0-9]{8,9}$/,
          "Số điện thoại không đúng định dạng",
        )
        .required(),

      address: yup.string().required("Địa chỉ không được để trống"),
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

  const onSubmit = async (data) => {
    console.log("data id:", dataUser.id);
    console.log("data mail", dataUser.email);
    console.log(data);
    console.log(dataUser);
    const formattedBirthday = formatDateToISO(data.birthday);
    const userProfileDTO = {
      email: dataUser.email,
      firstName: data.name,
      lastName: data.subName,
      phone: data.phoneNumber,
      birthDay: formattedBirthday,
      gender: data.gender,
      location: data.address,
      avatar: dataUser.avatar,
    };

    const candidateOtherInfoDTO = {
      ...dataCandidate,
      university: data.university,
    };
    setIsSubmitting(true);
    const candidateProfileDTO = {
      userProfileDTO,
      candidateOtherInfoDTO,
    };
    const res = await callEditProfile(candidateID, candidateProfileDTO, null);

    setIsSubmitting(false);
    if (res && res?.data) {
      console.log(res.data);
      dispatch(doSetProfileData(res.data.userDTO));
      console.log("res candidate", res.data);
      dispatch(doSetCandidateData(res.data));
      console.log("candidate data after update", dataCandidate);
      setShowPopup(true);
    }

    if (res?.errors) {
      alert(res.message);
    }
  };

  useEffect(() => {
    setValue("university", dataCandidate?.university || "");
  }, [dataCandidate?.university, setValue]);

  // ...

  useEffect(() => {
    if (isAuthenticated && dataUser && dataUser.birthDay) {
      setValue("birthday", formatDateToDDMMYYYY(dataUser.birthDay));
    }
  }, [isAuthenticated, dataUser, setValue]);

  function formatDateToDDMMYYYY(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }

  function formatDateToISO(dateStr) {
    if (!dateStr) return "";
    const [day, month, year] = dateStr.split("-");
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      {showPopup && (
        <Popup text="Cập nhật thành công" redirect="profile"></Popup>
      )}
      <div className="flex h-full w-[60%] flex-col rounded-[10px] shadow-banner">
        <div className=" flex h-[55px] w-full justify-between rounded-bl-[0px] rounded-br-[0px] rounded-tl-[10px] rounded-tr-[10px] bg-[#FE5656] px-[44px] py-[14px] shadow-banner">
          <span className="text-xl font-bold not-italic text-white ">
            Thông tin cá nhân
          </span>
          <a href="#" className="">
            <img src={pen} alt="" />
          </a>
        </div>
        <form
          className="px-[40px] py-[30px] text-[15px] font-[600]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-4 flex w-full gap-5">
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
                defaultValue={
                  isAuthenticated && dataUser ? dataUser.lastName : ""
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
                defaultValue={
                  isAuthenticated && dataUser ? dataUser.firstName : ""
                }
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
          <div className="mt-6 flex w-full gap-5">
            <div className="flex w-[50%] flex-col ">
              <label htmlFor="email" className="pb-2 ">
                Email <span className="text-red-700">*</span>
              </label>
              <Input
                disabled={true}
                type="email"
                id="email"
                // className="bg-slate-600"
                borderColor="border-gray-300"
                defaultValue={isAuthenticated && dataUser ? dataUser.email : ""}
              />
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
                    onChange={(e) => {
                      formatDate(e.target.value);
                    }}
                    {...register("birthday")}
                  />
                )}
              />
            </div>
          </div>
          <div className="mt-6 flex w-full gap-5">
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
                defaultValue={isAuthenticated && dataUser ? dataUser.phone : ""}
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
              <label htmlFor="gender" className="pb-2 ">
                Giới tính <span className="text-red-700">*</span>
              </label>
              <Controller
                name="gender"
                control={control}
                defaultValue={
                  isAuthenticated && dataUser ? dataUser.gender : false
                }
                render={({ field: { onChange, value, ref } }) => (
                  <select
                    ref={ref}
                    onChange={(e) => onChange(e.target.value === "male")}
                    value={value ? "male" : "female"}
                    className="w-full rounded-md border-2 
                      border-gray-300
                     px-2 py-3 focus:outline-none"
                  >
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                )}
              />
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col">
            <label htmlFor="address" className="pb-2 ">
              Địa chỉ <span className="text-red-700">*</span>
            </label>
            <Input
              type="text"
              id="address"
              borderColor={
                errors.address ? "border-red-500" : "border-gray-300"
              }
              {...register("address")}
              defaultValue={
                isAuthenticated && dataUser ? dataUser.location : ""
              }
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
          <div className="mt-6 flex w-full flex-col">
            <label htmlFor="university" className="pb-2 ">
              Trường học
            </label>
            <Input
              type="text"
              id="university"
              borderColor="border-gray-300"
              {...register("university")}
              defaultValue={dataCandidate.university || ""}
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
    </>
  );
};

export default PersonalDetails;
