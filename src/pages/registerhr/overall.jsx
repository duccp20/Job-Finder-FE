import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import rec from "/images/rec.jpg";
import Input from "../../components/Input/input";
import publish from "/images/publish.jpg";
import ava from "/svg/Group.svg";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  callActiveMail,
  callRegister,
  callRegisterHR,
} from "../../service/user/api";
import Popup from "../../components/Popup";
import { Outlet, useNavigate } from "react-router-dom";
import IconError from "../../components/IconError";
import { useDispatch, useSelector } from "react-redux";
import { callGetAllCompanyActive } from "../../service/company/api";
import { doFetchCompany } from "../../redux/company/companySlice";

export const RegisterHR = () => {
  const [validationSchema, setValidationSchema] = useState(
    yup
      .object({
        subName: yup
          .string()
          .matches(
            /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
            "Họ và tên lót không được phép là số hoặc ký tự đặc biệt",
          )
          .required("Hãy nhập họ và tên lót"),
        name: yup
          .string()
          .matches(
            /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
            "Tên không được phép là số hoặc ký tự đặc biệt",
          )
          .required("Hãy nhập tên của bạn"),

        email: yup
          .string()
          .email("Email không đúng định dạng")
          .matches(
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            "Email không đúng định dạng",
          )
          .required("Hãy nhập email của bạn"),
        passWord: yup
          .string()
          .required("Hãy nhập mật khẩu")
          .min(8, "Ít nhất 8 ký tự")
          .matches(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]*$/,
            "Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt",
          ),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("passWord"), null], "Mật khẩu không khớp")
          .required("Hãy xác nhận lại mật khẩu"),
        phoneNumber: yup
          .string()
          .matches(
            /^(03|05|07|08|09|84|\+84)[0-9]{8,9}$/,
            "Số điện thoại không đúng định dạng",
          )
          .required("Hãy nhập số điện thoại"),
        gender: yup
          .string()
          .required("Hãy chọn giới tính")
          .oneOf(["male", "female"], "Hãy chọn giới tính"),
        position: yup
          .string()
          .required("Hãy nhập chức vụ của bạn tại công ty")
          .matches(
            /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
            "Tên chức vụ không được phép là số hoặc ký tự đặc biệt",
          ),
        companyName: yup
          .string()
          .matches(
            /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
            "Tên công ty không được phép là số hoặc ký tự đặc biệt",
          )
          .required("Hãy nhập tên công ty"),
        taxCode: yup
          .string()
          .matches(
            /^[0-9]+/,
            "Mã số thuế không được phép là chữ và ký tự đặc biệt",
          )
          .length(10, "Mã số thuế phải có đúng 10 chữ số")
          .required("Hãy nhập mã số thuế"),
        companyEmail: yup
          .string()
          .email("Email không đúng định dạng")
          .matches(
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            "Email không đúng định dạng",
          )
          .required("Hãy nhập email của công ty"),
        telComp: yup
          .string()
          .matches(
            /^(03|05|07|08|09|84|\+84)[0-9]{8,9}$/,
            "Số điện thoại không đúng định dạng",
          )
          .required("Hãy nhập số điện thoại"),
        address: yup.string(),
      })

      .required(),
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [listCompany, setListCompany] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const dataUser = useSelector((state) => state.account.user);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Step 4: Form submission handler

  const onSubmit = async (data) => {
    console.log("123");
    console.log(data);
    setIsSubmitting(true);
    try {
      setShowPopup(false);
      const userCreationDTO = {
        email: data.email,
        password: data.passWord,
        lastName: data.subName,
        firstName: data.name,
        gender: data.gender === "male" ? 1 : 0,
        phone: data.phoneNumber,
      };
      const hrOtherInfoDTO = {
        position: data.position,
        companyDTO: {
          name: data.companyName,
          email: data.companyEmail,
          phone: data.telComp,
          tax: data.taxCode,
          location: data.address,
        },
      };

      const hrCreationDTO = {
        userCreationDTO,
        hrOtherInfoDTO,
      };
      const res = await callRegisterHR(hrCreationDTO);

      if (res && res.httpCode === 201) {
        const res = await callActiveMail(data.email);

        if (res.httpCode === 200 && res.message === "SEND MAIL") {
          console.log(res, "in call register mail");
          window.location.href = "/verify-email";
        } else {
          console.log(res);
          alert("Không thể gửi mail vui lòng thử lại sau");
        }
      }

      if (res && res?.errors) {
        setShowPopup(true);
      }
    } catch (error) {
      console.log(error);
    }
    setIsSubmitting(false);
  };

  useEffect(() => {
    setValidationSchema(
      yup.object().shape({
        subName: yup
          .string()
          .matches(
            /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
            "Họ và tên lót không được phép là số hoặc ký tự đặc biệt",
          )
          .required("Hãy nhập họ và tên lót"),
        name: yup
          .string()
          .matches(
            /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
            "Tên không được phép là số hoặc ký tự đặc biệt",
          )
          .required("Hãy nhập tên của bạn"),

        email: yup
          .string()
          .email("Email không đúng định dạng")
          .matches(
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            "Email không đúng định dạng",
          )
          .required("Hãy nhập email của bạn"),
        passWord: yup
          .string()
          .required("Hãy nhập mật khẩu")
          .min(8, "Ít nhất 8 ký tự")
          .matches(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]*$/,
            "Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt",
          ),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("passWord"), null], "Mật khẩu không khớp")
          .required("Hãy xác nhận lại mật khẩu"),
        phoneNumber: yup
          .string()
          .matches(
            /^(03|05|07|08|09|84|\+84)[0-9]{8,9}$/,
            "Số điện thoại không đúng định dạng",
          )
          .required("Hãy nhập số điện thoại"),
        gender: yup
          .string()
          .required("Hãy chọn giới tính")
          .oneOf(["male", "female"]),
        position: yup
          .string()
          .required("Hãy nhập chức vụ của bạn tại công ty")
          .matches(
            /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
            "Tên chức vụ không được phép là số hoặc ký tự đặc biệt",
          ),
        companyName: yup
          .string()
          .matches(
            /^[A-Za-zÀ-Ỹà-ỹ\s]+$/,
            "Tên công ty không được phép là số hoặc ký tự đặc biệt",
          )
          .required("Hãy nhập tên công ty"),
        taxCode: yup
          .string()
          .matches(
            /^[0-9]+/,
            "Mã số thuế không được phép là chữ và ký tự đặc biệt",
          )
          .length(10, "Mã số thuế phải có đúng 10 chữ số")
          .required("Hãy nhập mã số thuế"),
        // Điều chỉnh các trường dựa trên giá trị của showDropdown
        companyEmail:
          showDropdown === false
            ? yup.string() // không áp dụng xác thực khi showDropdown là true
            : yup
                .string()
                .email("Email không đúng định dạng")
                .required("Hãy nhập email của công ty"),
        telComp:
          showDropdown === false
            ? yup.string()
            : yup
                .string()
                .matches(
                  /^(03|05|07|08|09|84|\+84)[0-9]{8,9}$/,
                  "Số điện thoại không đúng định dạng",
                )
                .required("Hãy nhập số điện thoại"),
        address:
          showDropdown === false
            ? yup.string()
            : yup.string().required("Hãy nhập địa chỉ"),
        // ...
      }),
    );
  }, [showDropdown]);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const res = await callGetAllCompanyActive();
        if (res && res.data) {
          setListCompany(res.data);
          dispatch(doFetchCompany(res.data));
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchCompanies();
  }, []);

  return (
    <div className="h-full">
      <>
        <Header></Header>
      </>
      <div className=" my-[110px] flex justify-center">
        <div className="flex w-[75%] justify-center rounded-xl border-2 shadow-lg">
          <div className="relative h-full w-[40%]">
            <img src={rec} alt="" className="h-full rounded-l-lg" />
            <img
              src={ava}
              alt=""
              className=" absolute top-1/2 w-full -translate-y-1/2 p-10"
            />
          </div>
          <form
            className="w-[75%] rounded-r-lg p-[53px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="my-8 text-center text-[28px] font-extrabold uppercase text-[#000000]">
              Đăng ký tài khoản nhà tuyển dụng
            </h1>

            {showPopup && (
              <p className=" bg-[#fff6f5] p-2 text-red-600">
                Tài khoản đã tồn tại!
              </p>
            )}

            <h3 className="text-[15px] font-bold  text-[#FE5656]">
              Thông tin tài khoản
            </h3>
            <div className="mt-5 flex flex-col">
              <label htmlFor="email" className="pb-1 font-bold">
                Email <span className="text-red-600">*</span>
              </label>
              <Input
                type="text"
                id="email"
                {...register("email")}
                borderColor={
                  errors.email ? "border-red-500" : "border-gray-300"
                }
              />

              {errors?.email && (
                <div className="relative">
                  <div className="absolute flex items-center">
                    <span className="pt-1.5 ">
                      <IconError />
                    </span>

                    <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                      {errors.email?.message}
                    </p>
                  </div>
                </div>
              )}
              {!errors?.email && (
                <div className="relative">
                  <span className="absolute px-2 pt-2 text-[12px] font-thin italic">
                    Sử dụng email có thật để xác thực
                  </span>
                </div>
              )}
            </div>

            <div className="mt-10 flex w-full gap-4">
              <div className="flex w-[50%] flex-col">
                <label htmlFor="passWord" className="pb-1 font-bold">
                  Mật khẩu <span className="text-red-600">*</span>
                </label>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="passWord"
                    {...register("passWord")}
                    borderColor={
                      errors.passWord ? "border-red-500" : "border-gray-300"
                    }
                  />
                  <span
                    className="absolute right-0 top-[50%] flex -translate-y-1/2 cursor-pointer items-center pr-2"
                    onClick={togglePasswordVisibility}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      className="h-6 w-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                      >
                        <path
                          d="M10.83 6.5L14 9.66V9.5C14 8.70435 13.6839 7.94129 13.1213 7.37868C12.5587 6.81607 11.7956 6.5 11 6.5H10.83ZM6.53 7.3L8.08 8.85C8.03 9.06 8 9.27 8 9.5C8 10.2956 8.31607 11.0587 8.87868 11.6213C9.44129 12.1839 10.2044 12.5 11 12.5C11.22 12.5 11.44 12.47 11.65 12.42L13.2 13.97C12.53 14.3 11.79 14.5 11 14.5C9.67392 14.5 8.40215 13.9732 7.46447 13.0355C6.52678 12.0979 6 10.8261 6 9.5C6 8.71 6.2 7.97 6.53 7.3ZM1 1.77L3.28 4.05L3.73 4.5C2.08 5.8 0.78 7.5 0 9.5C1.73 13.89 6 17 11 17C12.55 17 14.03 16.7 15.38 16.16L15.81 16.58L18.73 19.5L20 18.23L2.27 0.5M11 4.5C12.3261 4.5 13.5979 5.02678 14.5355 5.96447C15.4732 6.90215 16 8.17392 16 9.5C16 10.14 15.87 10.76 15.64 11.32L18.57 14.25C20.07 13 21.27 11.36 22 9.5C20.27 5.11 16 2 11 2C9.6 2 8.26 2.25 7 2.7L9.17 4.85C9.74 4.63 10.35 4.5 11 4.5Z"
                          fill="black"
                        />
                      </svg>
                    </svg>
                  </span>
                </div>

                {errors?.passWord && (
                  <div className="relative">
                    <div className="absolute flex items-center">
                      <span className="pt-1.5 ">
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.passWord?.message}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative flex w-[50%] flex-col">
                <label htmlFor="confirmPassword" className="pb-1 font-bold">
                  Xác nhận mật khẩu <span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    {...register("confirmPassword")}
                    borderColor={
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }
                  />

                  <span
                    className="absolute right-0 top-[50%] flex -translate-y-1/2 cursor-pointer items-center pr-2"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      className="h-6 w-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                      >
                        <path
                          d="M10.83 6.5L14 9.66V9.5C14 8.70435 13.6839 7.94129 13.1213 7.37868C12.5587 6.81607 11.7956 6.5 11 6.5H10.83ZM6.53 7.3L8.08 8.85C8.03 9.06 8 9.27 8 9.5C8 10.2956 8.31607 11.0587 8.87868 11.6213C9.44129 12.1839 10.2044 12.5 11 12.5C11.22 12.5 11.44 12.47 11.65 12.42L13.2 13.97C12.53 14.3 11.79 14.5 11 14.5C9.67392 14.5 8.40215 13.9732 7.46447 13.0355C6.52678 12.0979 6 10.8261 6 9.5C6 8.71 6.2 7.97 6.53 7.3ZM1 1.77L3.28 4.05L3.73 4.5C2.08 5.8 0.78 7.5 0 9.5C1.73 13.89 6 17 11 17C12.55 17 14.03 16.7 15.38 16.16L15.81 16.58L18.73 19.5L20 18.23L2.27 0.5M11 4.5C12.3261 4.5 13.5979 5.02678 14.5355 5.96447C15.4732 6.90215 16 8.17392 16 9.5C16 10.14 15.87 10.76 15.64 11.32L18.57 14.25C20.07 13 21.27 11.36 22 9.5C20.27 5.11 16 2 11 2C9.6 2 8.26 2.25 7 2.7L9.17 4.85C9.74 4.63 10.35 4.5 11 4.5Z"
                          fill="black"
                        />
                      </svg>
                    </svg>
                  </span>
                </div>
                {errors?.confirmPassword && (
                  <div className="relative">
                    <div className="absolute flex items-center">
                      <span className="pt-1.5">
                        <IconError />
                      </span>
                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.confirmPassword?.message}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {!errors?.passWord && !errors?.confirmPassword && (
              <div className="relative">
                <span className="absolute px-2 pt-2 text-[12px] font-thin italic">
                  Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc
                  biệt
                </span>
              </div>
            )}
            <h3 className="pt-12 text-[15px]  font-bold text-[#FE5656]">
              Thông tin liên hệ
            </h3>
            <div className=" mt-5 flex w-full gap-4">
              <div className="flex w-[50%] flex-col">
                <label htmlFor="sub-name" className="pb-1 font-bold">
                  Họ và tên lót <span className="text-red-600">*</span>
                </label>
                <Input
                  type="text"
                  id="sub-name"
                  {...register("subName")}
                  borderColor={
                    errors.subName ? "border-red-500" : "border-gray-300"
                  }
                />
                {errors?.subName && (
                  <div className="relative">
                    <div className="absolute flex items-center justify-center">
                      <span>
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.subName?.message}
                      </p>
                    </div>
                  </div>
                )}
                {!errors?.subName && (
                  <div className="relative">
                    <span className="absolute px-2 pt-2 text-[12px] font-thin italic">
                      Nhập họ và tên lót
                    </span>
                  </div>
                )}
              </div>
              <div className="flex w-[50%] flex-col">
                <label htmlFor="name" className="pb-1 font-bold">
                  Tên <span className="text-red-700">*</span>
                </label>
                <Input
                  type="text"
                  id="name"
                  {...register("name")}
                  borderColor={
                    errors.name ? "border-red-500" : "border-gray-300"
                  }
                />

                {errors?.name && (
                  <div className="relative">
                    <div className="absolute flex items-center justify-center">
                      <span>
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.name?.message}
                      </p>
                    </div>
                  </div>
                )}
                {!errors?.name && (
                  <div className="relative">
                    <span className="absolute px-2 pt-2 text-[12px]  font-thin italic">
                      Nhập tên
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-10 flex w-full gap-4">
              <div className=" flex w-[50%] flex-col">
                <label htmlFor="confirmPassword" className="pb-1 font-bold">
                  Số điện thoại <span className="text-red-700">*</span>
                </label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  borderColor={
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  }
                />
                {errors?.phoneNumber && (
                  <div className="relative">
                    <div className="absolute flex items-center">
                      <span className="pt-1.5 ">
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.phoneNumber?.message}
                      </p>
                    </div>
                  </div>
                )}
                {!errors?.phoneNumber && (
                  <div className="relative">
                    <span className="absolute px-2 pt-2 text-[12px] font-thin italic">
                      Có thể bắt đầu với đầu số 03, 05, 07, 08, 09, 84, +84
                    </span>
                  </div>
                )}
              </div>
              <div className="flex w-[50%] flex-col">
                <label htmlFor="gender" className="pb-1 font-bold">
                  Giới tính <span className="text-red-700">*</span>
                </label>

                <Controller
                  name="gender"
                  control={control}
                  defaultValue={
                    isAuthenticated && dataUser ? dataUser.gender : ""
                  }
                  render={({ field: { onChange, value, ref } }) => (
                    <select
                      ref={ref}
                      onChange={(e) => onChange(e.target.value)}
                      value={value}
                      className={`w-full rounded-md border-2 font-normal text-black/50 ${
                        errors?.gender ? "border-red-500" : "border-gray-300"
                      } px-2 py-3 focus:outline-none`}
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
                  <div className="relative">
                    <div className="absolute flex items-center justify-center">
                      <span>
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00] ">
                        {errors.gender?.message}
                      </p>
                    </div>
                  </div>
                )}
                {!errors?.gender && (
                  <div className="relative">
                    <span className="absolute px-2 pt-2 text-[12px]  font-thin italic">
                      Nhập giới tính
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-10 flex w-full gap-4">
              <div className=" flex w-[100%] flex-col">
                <label htmlFor="postition" className="pb-1 font-bold">
                  Chức vụ <span className="text-red-700">*</span>
                </label>
                <Input
                  type="position"
                  id="position"
                  {...register("position")}
                  borderColor={
                    errors.position ? "border-red-500" : "border-gray-300"
                  }
                />
                {errors?.position && (
                  <div className="relative">
                    <div className="absolute flex items-center">
                      <span className="pt-1.5 ">
                        <IconError />
                      </span>

                      <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                        {errors.position?.message}
                      </p>
                    </div>
                  </div>
                )}
                {!errors?.position && (
                  <div className="relative">
                    <span className="absolute px-2 pt-2 text-[12px] font-thin italic">
                      Nhập chức vụ của bạn tại công ty
                    </span>
                  </div>
                )}
              </div>
            </div>
            <h3 className="pt-12 text-[15px]  font-bold text-[#FE5656]">
              Thông tin công ty
            </h3>
            <p className="mt-6 text-start text-[13px] font-normal">
              Chưa có công ty của bạn?{" "}
              <span
                className=" cursor-pointer text-[#FE5656]"
                onClick={handleButtonClick}
              >
                Đăng ký ngay
              </span>
            </p>
            <div className=" mt-5 flex w-full gap-4">
              <div className="flex w-[65%] flex-col">
                <label htmlFor="companyName" className="pb-1 font-bold">
                  Tên công ty
                  <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  {showDropdown ? (
                    <Input
                      type="text"
                      id="companyName"
                      {...register("companyName")}
                      borderColor={
                        errors.companyName
                          ? "border-red-500"
                          : "border-gray-300"
                      }
                    />
                  ) : (
                    /* Thêm dropdown component ở đây */
                    <Controller
                      name="companyName"
                      control={control}
                      render={({ field: { onChange, value, ref } }) => (
                        <select
                          ref={ref}
                          onChange={(e) => {
                            const selectedCompanyName = e.target.value;
                            onChange(selectedCompanyName);
                            const company = listCompany.find(
                              (c) => c.name === selectedCompanyName,
                            );
                            setSelectedCompany(company ? company.tax : "");
                            setValue("taxCode", company ? company.tax : ""); // setValue is from useForm
                          }}
                          value={value}
                          className={`w-full rounded-md border-2 ${
                            errors?.companyName
                              ? "border-red-500"
                              : "border-gray-300"
                          } px-2 py-3 font-normal text-black/50 focus:outline-none`}
                        >
                          <option value="">Chọn công ty</option>
                          {listCompany.map((company) => (
                            <option key={company.id} value={company.name}>
                              {company.name}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  )}
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

              <div className=" flex w-[35%] flex-col">
                <label htmlFor="taxCode" className="pb-1 font-bold">
                  Mã số thuế <span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    id="taxCode"
                    {...register("taxCode")}
                    readOnly={!showDropdown}
                    borderColor={
                      errors.taxCode ? "border-red-500" : "border-gray-300"
                    }
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
            {showDropdown && (
              <div>
                <div className=" mt-10 flex w-full gap-4">
                  <div className="flex w-[65%] flex-col">
                    <label htmlFor="companyEmail" className="pb-1 font-bold">
                      Email công ty <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        type="text"
                        id="companyEmail"
                        {...register("companyEmail")}
                        borderColor={
                          errors.companyEmail
                            ? "border-red-500"
                            : "border-gray-300"
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
                          Nhập địa chỉ email của công ty
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="  flex w-[35%] flex-col">
                    <label htmlFor="telComp" className="pb-1 font-bold">
                      Số điện thoại công ty{" "}
                      <span className="text-red-700">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        type="text"
                        id="telComp"
                        {...register("telComp")}
                        borderColor={
                          errors.telComp ? "border-red-500" : "border-gray-300"
                        }
                      />
                    </div>
                    {errors?.telComp && (
                      <div className="relative">
                        <div className="absolute flex items-center justify-center">
                          <span>
                            <IconError />
                          </span>
                          <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                            {errors.telComp?.message}
                          </p>
                        </div>
                      </div>
                    )}
                    {!errors?.telComp && (
                      <div className="relative">
                        <span className="absolute px-2 pt-2 text-[12px]  font-thin italic">
                          Nhập số điện thoại của công ty
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-10 flex w-full gap-4">
                  <div className=" flex w-[100%] flex-col">
                    <label htmlFor="address" className="pb-1 font-bold">
                      Địa điểm làm việc <span className="text-red-700">*</span>
                    </label>
                    <Input
                      type="address"
                      id="address"
                      {...register("address")}
                      borderColor={
                        errors.address ? "border-red-500" : "border-gray-300"
                      }
                    />
                    {errors?.address && (
                      <div className="relative">
                        <div className="absolute flex items-center">
                          <span className="pt-1.5 ">
                            <IconError />
                          </span>

                          <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                            {errors.address?.message}
                          </p>
                        </div>
                      </div>
                    )}
                    {!errors?.address && (
                      <div className="relative">
                        <span className="absolute px-2 pt-2 text-[12px] font-thin italic">
                          Nhập địa điểm làm việc của công ty
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div>
              <p className="mt-10 text-[13px] font-normal">
                Bằng việc ấn vào nút “Đăng ký”, tôi đồng ý với
                <span className="text-red-600"> Thỏa thuận sử dụng </span>
                và <span className="text-red-600"> Quy định bảo mật</span> của
                Jobsit.vn
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  className={`rounded-[16px] px-[120px] py-[16px] text-center font-bold text-white shadow-md ${
                    isSubmitting ? "bg-gray-500" : "bg-gradientCustom"
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
                </button>
              </div>
              <p className="mt-6 text-center font-normal">
                Bạn đã có tài khoản?{" "}
                <span className="font-extrabold text-[#FE5656]">
                  <a href="/login">Trở về đăng nhập</a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
