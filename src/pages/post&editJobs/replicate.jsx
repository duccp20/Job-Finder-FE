import React, { useEffect, useState } from "react";
import HeaderHR from "../../components/HeaderHR/headerHr";
import Input from "../../components/Input/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import IconError from "../../components/IconError";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import MultiSelectDropdown from "../../components/MultilSelectTag";
import ProvincesDropdown from "../../components/DropdownProvince";
import { doSetJobData } from "../../redux/job/jobSlice";
import {
  callCreateJob,
  callGetJobByID,
  callReplicateJob,
} from "../../service/job/api";
import Popup from "../../components/Popup";
import { useNavigate, useParams } from "react-router-dom";
import { convertDateFormatYYYYMMDD } from "../../utils/formatDate";

const positions = ["Vị trí A", "Vị trí B", "Vị trí C"];
const cities = ["Tỉnh A", "Tỉnh B", "Tỉnh C"];

const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
  ],
};

const Replicate = (props) => {
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [data, setData] = useState({});
  const [descriptionValue, setDescriptionValue] = useState("");
  const [requirementValue, setRequirementValue] = useState("");
  const [welfareValue, setWelfareValue] = useState("");
  const [postDate, setPostDate] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");

  const dataMajor = useSelector((state) => state.baseData.data.majors);
  const dataSchedule = useSelector((state) => state.baseData.data.schedules);
  const dataPosition = useSelector((state) => state.baseData.data.positions);
  const dataCandidate = useSelector((state) => state.candidate.data);

  const navigate = useNavigate();
  const convertDateFormatYYYYMMDD = (timestamp) => {
    var date = new Date(timestamp);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    // Thêm số 0 phía trước nếu ngày hoặc tháng nhỏ hơn 10
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  };

  const schema = yup
    .object({
      jobTitle: yup.string().required("Tiêu đề không được để trống"),
      selectPosition: yup.array().required("Vui lòng chọn vị trí"),
      selectType: yup.array().required("Vui lòng chọn hình thức làm việc"),
      numberPosition: yup
        .number()
        .typeError("Số lượng tuyển là một số")
        .required("Số lượng tuyển không được để trống"),
      // postDate: yup
      //   .date()
      //   .max(new Date(), "Ngày không thể vượt quá ngày hiện tại")
      //   .required("Ngày đăng tuyển không được để trống"),
      // deadlineDate: yup.date().required("Hạn nộp hồ sơ không được để trống"),
      // city: yup.string().required("Vui lòng chọn tỉnh thành"),
      address: yup.string().required("Địa chỉ không được để trống"),
      description: yup.string().required("Mô tả không được để trống"),
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

  const handleQuillChange = (name, value) => {
    setValue(name, value, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    console.log(data);

    const body = {
      name: data.jobTitle,
      positionDTOs: data.selectPosition,
      majorDTOs: data.selectField,
      scheduleDTOs: data.selectType,
      amount: data.numberPosition,
      salaryMin: data.maxSalary,
      salaryMax: data.minSalary,
      description: data.description,
      requirement: data.requirement,
      otherInfo: data.welfare,
      startDate: data.postDate,
      endDate: data.deadlineDate,
      location: data.address,
      province: "Ho Chi Minh",
    };
    console.log(body);

    setIsSubmitting(true);
    try {
      const res = await callReplicateJob(id, body);

      console.log("res in onSubmit", res);
      setIsSubmitting(false);

      if (res) {
        setShowPopup(true);
        // dispatch(doSetJobData(res.data));
      }
      if (res?.errors) {
        alert(res.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  console.log("showPopup", showPopup);
  console.log("isSubmitting", isSubmitting);

  useEffect(() => {
    if (data) {
      setValue("jobTitle", data.name);
      setValue("numberPosition", data.amount);
      setValue("selectField", data.majorDTOs);
      setValue("selectPosition", data.positionDTOs);
      setValue("selectType", data.scheduleDTOs);
      setValue("minSalary", data.salaryMin);
      setValue("maxSalary", data.salaryMax);

      setValue("address", data.location);

      setDescriptionValue(data.description || "");
      setRequirementValue(data.requirement || "");
      setWelfareValue(data.otherInfo || "");
      setPostDate(convertDateFormatYYYYMMDD(data.startDate));
      setDeadlineDate(convertDateFormatYYYYMMDD(data.endDate));

      setValue("postDate", convertDateFormatYYYYMMDD(data.startDate));
      setValue("deadlineDate", convertDateFormatYYYYMMDD(data.endDate));
      setValue("description", data.description);
      setValue("requirement", data.requirement);
      setValue("welfare", data.otherInfo);
    }
  }, [data]);

  useEffect(() => {
    const fetchJobById = async (id) => {
      const res = await callGetJobByID(id);
      console.log(res);
      setData(res);
    };

    fetchJobById(id);
  }, []);
  return (
    <div>
      {showPopup && <Popup text="Nhân bản thành công" redirect="/hr"></Popup>}
      <div className="mx-auto my-[30px] w-[90%] px-[20px] py-[20px] shadow-banner">
        <div className="flex items-center justify-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="23"
              viewBox="0 0 27 23"
              fill="none"
            >
              <path
                d="M22 0.5H2.44444C1.08778 0.5 0.0122222 1.58778 0.0122222 2.94444L0 17.6111C0 18.9678 1.08778 20.0556 2.44444 20.0556H14.6667V17.6111H2.44444V10.2778H24.4444V2.94444C24.4444 1.58778 23.3567 0.5 22 0.5ZM22 5.38889H2.44444V2.94444H22V5.38889ZM26.8889 16.3889V18.8333H23.2222V22.5H20.7778V18.8333H17.1111V16.3889H20.7778V12.7222H23.2222V16.3889H26.8889Z"
                fill="#FE5656"
              />
            </svg>
          </span>
          <p className="text-[20px] font-bold text-[#FE5656]">
            {/* {props.title} */}
            Nhân bản tuyển dụng mới
          </p>
        </div>
        <form
          className="px-[40px] py-[30px] text-[15px] font-[600]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-2 flex w-full flex-col">
            <label htmlFor="jobTitle" className="pb-2 ">
              Tiêu đề công việc <span className="text-red-600">*</span>
            </label>
            <Input
              type="text"
              id="jobTitle"
              value={data?.name}
              borderColor={
                errors.jobTitle ? "border-red-500" : "border-gray-300"
              }
              {...register("jobTitle")}
            />
            {errors?.jobTitle && (
              <div className="flex items-center ">
                <span className="pt-1.5 ">
                  <IconError />
                </span>

                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.jobTitle?.message}
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 flex w-full gap-12">
            <div className="flex w-[50%] flex-col">
              <label htmlFor="position" className="pb-2 ">
                Vị trí làm việc <span className="text-red-700">*</span>
              </label>
              <Controller
                name="selectPosition"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <MultiSelectDropdown
                    height="auto"
                    options={dataPosition}
                    value={field.value || []}
                    onChange={(selected) => field.onChange(selected || [])}
                    text={
                      data && data.positionDTOs && data.positionDTOs.length > 0
                        ? data.positionDTOs
                            .map((p, index) =>
                              index < data.positionDTOs.length - 1
                                ? p.name + " / "
                                : p.name,
                            )
                            .join("")
                        : "Chọn vị trí việc làm"
                    }
                  />
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
            <div className="flex w-[50%] flex-col">
              <label htmlFor="selectField" className="pb-2 ">
                Chuyên ngành
              </label>
              <Controller
                name="selectedField"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <MultiSelectDropdown
                    height="auto"
                    options={dataMajor}
                    value={field.value || []}
                    onChange={(selected) => field.onChange(selected || [])}
                    text={
                      data && data.majorDTOs && data.majorDTOs.length > 0
                        ? data.majorDTOs
                            .map((m, index) =>
                              index < data.majorDTOs.length - 1
                                ? m.name + " / "
                                : m.name,
                            )
                            .join("")
                        : "Chọn chuyên ngành"
                    }
                  />
                )}
              />
            </div>
          </div>
          <div className="mt-6 flex w-full gap-12">
            <div className="flex w-[50%] flex-col">
              <label htmlFor="selectType" className="pb-2 ">
                Hình thức làm việc <span className="text-red-700">*</span>
              </label>
              <Controller
                name="selectType"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <MultiSelectDropdown
                    height="auto"
                    options={dataSchedule}
                    value={field.value || []}
                    onChange={(selected) => field.onChange(selected || [])}
                    text={
                      data && data.scheduleDTOs && data.scheduleDTOs.length > 0
                        ? data.scheduleDTOs
                            .map((s, index) =>
                              index < data.scheduleDTOs.length - 1
                                ? s.name + " / "
                                : s.name,
                            )
                            .join("")
                        : "Chọn hình thức"
                    }
                  />
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
            <div className="flex w-[50%] flex-col">
              <label htmlFor="numberPosition" className="pb-2 ">
                Số lượng tuyển <span className="text-red-600">*</span>
              </label>
              <Input
                type="text"
                id="numberPosition"
                value={data && data.amount}
                borderColor={
                  errors.numberPosition ? "border-red-500" : "border-gray-300"
                }
                {...register("numberPosition")}
              />
              {errors?.numberPosition && (
                <div className="flex items-center ">
                  <span className="pt-1.5">
                    <IconError />
                  </span>

                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.numberPosition?.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex w-full gap-12">
            <div className="flex w-[50%] flex-col">
              <label htmlFor="postDate" className="pb-2 ">
                Ngày đăng tuyển <span className="text-red-700">*</span>
              </label>

              <Controller
                name="postDate"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    // value={postDate}
                    id="postDate"
                    borderColor={
                      errors.postDate ? "border-red-500" : "border-gray-300"
                    }
                  />
                )}
              />
              {errors?.postDate && (
                <div className="flex items-center ">
                  <span className="pt-1.5 ">
                    <IconError />
                  </span>

                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.postDate?.message}
                  </p>
                </div>
              )}
            </div>
            <div className="flex w-[50%] flex-col">
              <label htmlFor="deadlineDate" className="pb-2 ">
                Hạn nộp hồ sơ <span className="text-red-700">*</span>
              </label>
              <Controller
                name="deadlineDate"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    id="deadlineDate"
                    // value={deadlineDate}
                    borderColor={
                      errors.deadlineDate ? "border-red-500" : "border-gray-300"
                    }
                  />
                )}
              />
              {errors?.deadlineDate && (
                <div className="flex items-center ">
                  <span className="pt-1.5 ">
                    <IconError />
                  </span>

                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.deadlineDate?.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="relative mt-6 flex w-full gap-12">
            <div className="flex w-[50%] flex-col">
              <label htmlFor="minSalary" className="pb-2 ">
                Mức lương tối thiểu<span className="text-red-600">*</span>
              </label>
              <Input
                type="text"
                id="minSalary"
                name="minSalary"
                defaultValue={data && data.salaryMin}
                borderColor="border-gray-300"
                {...register("minSalary")}
              />
              {/* {errors?.minSalary && (
                <div className="flex items-center ">
                  <span className="pt-1.5">
                    <IconError />
                  </span>

                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.minSalary?.message}
                  </p>
                </div>
              )} */}
            </div>
            <div className="absolute left-[50%] top-[45%] translate-x-[-50%]  text-[30px]">
              -
            </div>
            <div className="flex w-[50%] flex-col">
              <label htmlFor="maxSalary" className="pb-2 ">
                Mức lương tối đa<span className="text-red-600">*</span>
              </label>
              <Input
                type="text"
                id="maxSalary"
                name="maxSalary"
                defaultValue={data && data.salaryMax}
                borderColor="border-gray-300"
                {...register("maxSalary")}
              />
              {/* {errors?.maxSalary && (
                <div className="flex items-center ">
                  <span className="pt-1.5">
                    <IconError />
                  </span>

                  <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                    {errors.maxSalary?.message}
                  </p>
                </div>
              )} */}
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col">
            <label htmlFor="city" className="pb-2 ">
              Tỉnh/ Thành phố <span className="text-red-700">*</span>
            </label>

            <ProvincesDropdown />
            {/* {...register("city")} */}

            {/* {errors?.city && (
              <div className="flex items-center ">
                <span className="pt-1.5 ">
                  <IconError />
                </span>

                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.city?.message}
                </p>
              </div>
            )} */}
          </div>
          <div className="mt-6 flex w-full flex-col">
            <label htmlFor="address" className="pb-2 ">
              Địa điểm làm việc <span className="text-red-700">*</span>
            </label>
            <Input
              type="text"
              id="address"
              defaultValue={data && data.location}
              borderColor={
                errors.address ? "border-red-500" : "border-gray-300"
              }
              {...register("address")}
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
          <div className="my-6 flex w-full flex-col">
            <label htmlFor="description" className="pb-2 ">
              Mô tả công việc <span className="text-red-700">*</span>
            </label>
            <div
              className={`h-[180px] border-2 leading-normal ${
                errors.description ? "border-red-500" : "border-gray-300"
              } w-full rounded-[4px]`}
            >
              <ReactQuill
                className="h-[78%]"
                theme="snow"
                id="description"
                name="description"
                onChange={(value) => {
                  setDescriptionValue(value);
                  handleQuillChange("description", value);
                }}
                value={descriptionValue}
                modules={modules}
                placeholder="Nhập thông tin cho vị trí công việc yêu cầu, trách nhiệm mà ứng viên có thể đảm nhận khi làm việc ở công ty"
              />
            </div>
            {errors?.description && (
              <div className="flex items-center ">
                <span className="pt-1.5 ">
                  <IconError />
                </span>

                <p className="px-2 pt-2 font-nunito text-[10px] font-[400] leading-normal text-[#F00]">
                  {errors.description?.message}
                </p>
              </div>
            )}
          </div>

          <div className="my-6 flex w-full flex-col">
            <label htmlFor="requirement" className="pb-2 ">
              Yêu cầu công việc
            </label>
            <div className="h-[180px] w-full rounded-[4px] border-2 border-gray-300 leading-normal">
              <ReactQuill
                className="h-[78%]"
                theme="snow"
                id="requirement"
                value={requirementValue}
                onChange={(value) => setValue("requirement", value)}
                modules={modules}
                placeholder="Nhập kỹ năng chuyên môn hoặc kỹ năng mềm cần thiết với công việc mà ứng viên cần quan tâm"
              />
            </div>
          </div>
          <div className="my-6 flex w-full flex-col">
            <label htmlFor="welfare" className="pb-2 ">
              Chế độ phúc lợi
            </label>
            <div className="h-[180px] w-full rounded-[4px] border-2 border-gray-300 leading-normal">
              <ReactQuill
                className="h-[78%]"
                theme="snow"
                id="welfare"
                value={welfareValue}
                onChange={(value) => setValue("welfare", value)}
                modules={modules}
                placeholder="Nhập những quyền lợi, lợi ích với công việc cho ứng viên với vị trí đăng tuyển"
              />
            </div>
          </div>
          <div className="mt-12 flex justify-end gap-4">
            <button
              className="rounded-[4px] bg-[#FE5656] px-[22px] py-[12px] text-center text-[15px] font-bold text-white hover:bg-white hover:text-[#FE5656] hover:outline hover:outline-[#FE5656]"
              type="submit"
            >
              Nhân bản
              {/* {props.name} */}
            </button>
            <button
              className="rounded-[4px] bg-gray-200 px-[36px] py-[12px] text-center text-[15px] font-bold text-[#7D7D7D] hover:bg-white hover:outline hover:outline-[#7D7D7D]"
              type=""
              onClick={() => {
                navigate("/hr");
              }}
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Replicate;
