import React, { useEffect, useState } from "react";
import RecruitmentItem from "../../components/Recruitment/item";
import { useDispatch, useSelector } from "react-redux";
import { convertDateFormatDDMMYYYY } from "../../utils/formatDate";
import Popup from "../../components/Popup";
import PopupHr from "../../components/PopupHr";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  callCreateJobCare,
  callDeleteJobCareByJobID,
} from "../../service/jobcare/api";
import { callCheckCandidateHaveAppliedJob } from "../../service/applyJob/api";
import Uploader from "../../components/Uploader";

const RecruitmentDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const saved = new URLSearchParams(location.search).get("saved");
  const savedValue = saved === "true";
  const jobData = useSelector((state) => state.job.data);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const [isShowModalLogin, setIsShowModalLogin] = useState(false);
  const [isShowModalJobCare, setIsShowModalJobCare] = useState(false);
  const [isShowUpload, setIsShowUpload] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isCareJob, setIsCareJob] = useState(savedValue);
  const [checkApplied, setCheckApplied] = useState(false);

  const handleApply = () => {
    if (isAuthenticated) {
      setIsShowUpload(true);
    } else {
      setIsShowModalLogin(true);
    }
  };

  const handleJobCare = async (id) => {
    if (isAuthenticated) {
      let response;
      if (isCareJob) {
        // Gọi API xóa công việc khỏi danh sách yêu thích
        response = await callDeleteJobCareByJobID(id);
      } else {
        // Gọi API thêm công việc vào danh sách yêu thích
        response = await callCreateJobCare(id);
      }
      // Kiểm tra kết quả từ API và cập nhật trạng thái
      if (response && response.httpCode === 200) {
        setIsCareJob(!isCareJob);
      }
    } else {
      setIsShowModalLogin(true);
    }
  };

  const handleConfirm = (action) => {
    if (action === "apply") {
      setIsShowModalLogin(false);
      navigate("/login");
    } else {
      setIsShowModalJobCare(false);
      navigate("/login");
    }
  };
  useEffect(() => {
    console.log(isCareJob);
  }, [isCareJob]);
  const handleCancel = (action) => {
    if (action === "apply") {
      setIsShowModalLogin(false);
    } else {
      setIsShowModalJobCare(false);
    }
  };

  const handleCloseUpload = () => {
    setIsShowUpload(false);
  };

  const handleSuccess = () => {
    setShowSuccessPopup(true);
  };

  useEffect(() => {
    const fetchCheckApplied = async () => {
      const result = await callCheckCandidateHaveAppliedJob(jobData.id);
      setCheckApplied(result.data);
    };

    fetchCheckApplied();
  }, []);
  return (
    <>
      {isShowUpload && (
        <Uploader
          onClose={handleCloseUpload}
          onApplySuccess={handleSuccess}
          id={id}
        />
      )}
      {showSuccessPopup && (
        <Popup text="Cập nhật thành công" redirect="/apply" />
      )}
      {isShowModalLogin && (
        <PopupHr
          content="Bạn phải đăng nhập để ứng tuyển"
          type="require-login"
          onConfirm={handleConfirm("apply")}
          onCancel={handleCancel("apply")}
        ></PopupHr>
      )}
      {isShowModalJobCare && (
        <PopupHr
          content="Bạn phải đăng nhập để lưu"
          type="require-login"
          onConfirm={handleConfirm("jobCare")}
          onCancel={handleCancel("jobCare")}
        ></PopupHr>
      )}
      {/* <PopupHr></PopupHr> */}
      <div className="flex md:flex-col-reverse">
        <div className=" flex flex-col sm:mx-[20px] sm:gap-[5px] sm:text-[8px] tablet-up:ml-[40px] tablet-up:mr-[10px] tablet-up:gap-[10px] tablet-up:text-inherit desktop-up:mt-[30px]  desktop-up:w-[60%]">
          <p className="font-[700] sm:my-[5px] tablet-up:my-[10px]">
            Mô tả công việc
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: jobData.description }}
            className="jobDescription mx-[10px] list-disc px-[10px] leading-normal sm:mb-[10px] tablet-up:mb-[20px]"
          />
          <p className="font-[700] sm:my-[5px] tablet-up:my-[10px]">
            Yêu cầu công việc
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: jobData.requirement }}
            className="jobDescription mx-[10px] list-disc px-[10px] leading-normal sm:mb-[10px] tablet-up:mb-[20px]"
          ></div>
          <p className="font-[700] sm:my-[5px] tablet-up:my-[10px]">
            Chế độ phúc lợi
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: jobData.otherInfo }}
            className="jobDescription mx-[10px] list-disc px-[10px] leading-normal sm:mb-[10px] tablet-up:mb-[20px]"
          ></div>
        </div>
        <div className="mx-auto h-full border border-[#FE5656] bg-[#FE56561A] sm:my-[20px] sm:pb-[20px] md:flex md:w-[90%] tablet-up:my-[30px] tablet-up:pb-[40px] desktop-up:mr-[30px] desktop-up:w-[40%]">
          <div className="md:w-[45%] ">
            <RecruitmentItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                >
                  <path
                    d="M19.6875 25.875C21.1959 25.875 22.6426 25.2758 23.7092 24.2092C24.7758 23.1426 25.375 21.6959 25.375 20.1875V6.1875C25.375 4.67908 24.7758 3.23244 23.7092 2.16583C22.6426 1.09922 21.1959 0.5 19.6875 0.5H5.6875C4.17908 0.5 2.73244 1.09922 1.66583 2.16583C0.599217 3.23244 0 4.67908 0 6.1875V20.1875C0 21.6959 0.599217 23.1426 1.66583 24.2092C2.73244 25.2758 4.17908 25.875 5.6875 25.875H19.6875ZM9.625 27.625H12.25V29.8125C12.25 31.503 13.622 32.875 15.3125 32.875H29.3125C30.1247 32.875 30.9037 32.5523 31.478 31.978C32.0523 31.4037 32.375 30.6247 32.375 29.8125V15.8125C32.375 15.0003 32.0523 14.2213 31.478 13.647C30.9037 13.0727 30.1247 12.75 29.3125 12.75H27.125V10.125H29.3125C30.0594 10.125 30.799 10.2721 31.489 10.5579C32.1791 10.8438 32.806 11.2627 33.3342 11.7908C33.8623 12.319 34.2812 12.9459 34.5671 13.636C34.8529 14.326 35 15.0656 35 15.8125V29.8125C35 30.5594 34.8529 31.299 34.5671 31.989C34.2812 32.6791 33.8623 33.306 33.3342 33.8342C32.806 34.3623 32.1791 34.7812 31.489 35.0671C30.799 35.3529 30.0594 35.5 29.3125 35.5H15.3125C14.5656 35.5 13.826 35.3529 13.136 35.0671C12.4459 34.7812 11.819 34.3623 11.2908 33.8342C10.7627 33.306 10.3438 32.6791 10.0579 31.989C9.77211 31.299 9.625 30.5594 9.625 29.8125V27.625Z"
                    fill="#FE5656"
                  />
                </svg>
              }
              title="Vị trí làm việc"
              detail={
                (jobData.positionDTOs.length > 0 &&
                  jobData.positionDTOs.map((p) => p.name).join(" / ")) ||
                "Không xác định"
              }
            ></RecruitmentItem>

            <RecruitmentItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M20 21C20 21.5527 19.5527 22 19 22H13C12.45 22 12 21.55 12 21V18H0V27C0 28.6 1.40062 30 3 30H29C30.5994 30 32 28.5994 32 27V18H20V21ZM29 6H24V3C24 1.40062 22.6 0 21 0H11C9.4 0 8 1.40062 8 3V6H3C1.40062 6 0 7.4 0 9V16H32V9C32 7.4 30.6 6 29 6ZM21 6H11V3H21V6Z"
                    fill="#FE5656"
                  />
                </svg>
              }
              title="Hình thức làm việc"
              detail={
                (jobData.scheduleDTOs.length > 0 &&
                  jobData.scheduleDTOs.map((sc) => sc.name).join(" / ")) ||
                "Không xác định"
              }
            ></RecruitmentItem>

            <RecruitmentItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="42"
                  viewBox="0 0 35 42"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.3105 22.9775C26.3085 24.605 27.7085 26.81 27.7085 29.75V35H33.5418V29.75C33.5418 25.935 28.3355 23.6775 24.3105 22.9775Z"
                    fill="#FE5656"
                  />
                  <path
                    d="M13.1248 21C16.3465 21 18.9582 17.866 18.9582 14C18.9582 10.134 16.3465 7 13.1248 7C9.90318 7 7.2915 10.134 7.2915 14C7.2915 17.866 9.90318 21 13.1248 21Z"
                    fill="#FE5656"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.8752 21C25.0981 21 27.7085 17.8675 27.7085 14C27.7085 10.1325 25.0981 7 21.8752 7C21.1897 7 20.5481 7.175 19.9356 7.42C21.1905 9.28238 21.8751 11.605 21.8751 14C21.8751 16.395 21.1905 18.7176 19.9356 20.58C20.5481 20.825 21.1897 21 21.8752 21ZM13.1252 22.75C9.23141 22.75 1.4585 25.095 1.4585 29.75V35H24.7918V29.75C24.7918 25.095 17.0189 22.75 13.1252 22.75Z"
                    fill="#FE5656"
                  />
                </svg>
              }
              title="Số lượng cần tuyển"
              detail={jobData.amount}
            ></RecruitmentItem>
          </div>

          <div className="md:w-[55%]">
            <RecruitmentItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M20 21C20 21.5527 19.5527 22 19 22H13C12.45 22 12 21.55 12 21V18H0V27C0 28.6 1.40062 30 3 30H29C30.5994 30 32 28.5994 32 27V18H20V21ZM29 6H24V3C24 1.40062 22.6 0 21 0H11C9.4 0 8 1.40062 8 3V6H3C1.40062 6 0 7.4 0 9V16H32V9C32 7.4 30.6 6 29 6ZM21 6H11V3H21V6Z"
                    fill="#FE5656"
                  />
                </svg>
              }
              title="Trợ cấp"
              detail={
                jobData.salaryMin.toLocaleString("vi-VN") +
                " - " +
                jobData.salaryMax.toLocaleString("vi-VN") +
                " vnđ"
              }
            ></RecruitmentItem>

            <RecruitmentItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="38"
                  viewBox="0 0 37 38"
                  fill="none"
                >
                  <path
                    d="M29.3333 5.9H27.5V4.2C27.5 3.265 26.675 2.5 25.6667 2.5C24.6583 2.5 23.8333 3.265 23.8333 4.2V5.9H9.16667V4.2C9.16667 3.265 8.34167 2.5 7.33333 2.5C6.325 2.5 5.5 3.265 5.5 4.2V5.9H3.66667C1.63167 5.9 0.0183333 7.43 0.0183333 9.3L0 33.1C0 34.0017 0.386308 34.8665 1.07394 35.5042C1.76157 36.1418 2.69421 36.5 3.66667 36.5H29.3333C31.35 36.5 33 34.97 33 33.1V9.3C33 7.43 31.35 5.9 29.3333 5.9ZM29.3333 31.4C29.3333 32.335 28.5083 33.1 27.5 33.1H5.5C4.49167 33.1 3.66667 32.335 3.66667 31.4V14.4H29.3333V31.4ZM7.33333 17.8H11V21.2H7.33333V17.8ZM14.6667 17.8H18.3333V21.2H14.6667V17.8ZM22 17.8H25.6667V21.2H22V17.8Z"
                    fill="#FE5656"
                  />
                </svg>
              }
              title="Ngày đăng tuyển"
              detail={convertDateFormatDDMMYYYY(jobData.startDate)}
            ></RecruitmentItem>

            <RecruitmentItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="34"
                  viewBox="0 0 35 34"
                  fill="none"
                >
                  <path
                    d="M31.5 15.6245V6.18182C31.5 5.36206 31.1313 4.57587 30.4749 3.99622C29.8185 3.41656 28.9283 3.09091 28 3.09091H20.685C19.95 1.29818 18.025 0 15.75 0C13.475 0 11.55 1.29818 10.815 3.09091H3.5C1.575 3.09091 0 4.48182 0 6.18182V27.8182C0 28.6379 0.368749 29.4241 1.02513 30.0038C1.6815 30.5834 2.57174 30.9091 3.5 30.9091H14.1925C16.3975 32.8255 19.4075 34 22.75 34C29.5225 34 35 29.1627 35 23.1818C35 20.23 33.67 17.5718 31.5 15.6245ZM15.75 3.09091C16.7125 3.09091 17.5 3.78636 17.5 4.63636C17.5 5.48636 16.7125 6.18182 15.75 6.18182C14.7875 6.18182 14 5.48636 14 4.63636C14 3.78636 14.7875 3.09091 15.75 3.09091ZM3.5 27.8182V6.18182H7V9.27273H24.5V6.18182H28V13.4145C26.4075 12.75 24.64 12.3636 22.75 12.3636H7V15.4545H14.175C13.125 16.3355 12.32 17.3864 11.69 18.5455H7V21.6364H10.64C10.5525 22.1464 10.5 22.6564 10.5 23.1818C10.5 24.8509 10.9375 26.4118 11.69 27.8182H3.5ZM22.75 30.9091C17.92 30.9091 14 27.4473 14 23.1818C14 18.9164 17.92 15.4545 22.75 15.4545C27.58 15.4545 31.5 18.9164 31.5 23.1818C31.5 27.4473 27.58 30.9091 22.75 30.9091ZM23.625 23.5682L28.63 26.18L27.3175 28.0655L21 24.7273V17H23.625V23.5682Z"
                    fill="#FE5656"
                  />
                </svg>
              }
              title="Hạn nộp hồ sơ"
              detail={convertDateFormatDDMMYYYY(jobData.endDate)}
            ></RecruitmentItem>
          </div>
        </div>
      </div>

      <div className="sm:mx-[20px] sm:mt-[15px] sm:text-[8px] tablet-up:mx-[40px] tablet-up:mt-[25px]">
        <p className="font-[700] tablet-up:my-[15px]">Địa điểm làm việc</p>
        <div className="flex items-center sm:mb-[10px] sm:gap-1 tablet-up:mb-[30px] tablet-up:gap-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="26"
              viewBox="0 0 21 26"
              fill="none"
              className="sm:w-2"
            >
              <path
                d="M9.20391 25.4158C6.34922 22.1472 0 14.2251 0 9.7753C0 4.37648 4.70094 0 10.5 0C16.2969 0 21 4.37648 21 9.7753C21 14.2251 14.6016 22.1472 11.7961 25.4158C11.1234 26.1947 9.87656 26.1947 9.20391 25.4158ZM10.5 13.0337C12.4305 13.0337 14 11.5725 14 9.7753C14 7.97807 12.4305 6.51686 10.5 6.51686C8.56953 6.51686 7 7.97807 7 9.7753C7 11.5725 8.56953 13.0337 10.5 13.0337Z"
                fill="#FE5656"
              />
            </svg>
          </span>
          {/* <p>1164 đường Phạm Văn Đồng, P.Linh Đông, TP. Thủ Đức, TP. HCM</p> */}
          <p>{jobData.location}</p>
        </div>

        <p className="font-[700] sm:my-[15px] tablet-up:my-[25px] ">
          Cách thức ứng tuyển
        </p>
        <p>
          Ứng viên nộp hồ sơ trực tuyến bằng cách bấm nút{" "}
          <span href="#" className="text-[#FE5656]">
            ỨNG TUYỂN NGAY
          </span>{" "}
          dưới đây.
        </p>

        <div className="flex gap-[10px] sm:my-[10px] tablet-up:my-[30px]">
          {checkApplied ? (
            <button className="rounded-[4px] bg-[#BEB9B9] py-2 font-bold not-italic text-white hover:text-[#FE5656] hover:outline hover:outline-[#FE5656] sm:px-2 sm:text-[8px] sm:hover:outline-[1px] tablet-up:px-5 tablet-up:text-base">
              Đã Ứng Tuyển
            </button>
          ) : (
            <button
              className="rounded-[4px] bg-[#FE5656] py-2 font-bold not-italic text-white hover:bg-white hover:text-[#FE5656] hover:outline hover:outline-[#FE5656] sm:px-2 sm:text-[8px] sm:hover:outline-[1px] tablet-up:px-5 tablet-up:text-base"
              onClick={handleApply}
            >
              ỨNG TUYỂN NGAY
            </button>
          )}

          <button
            onClick={() => handleJobCare(jobData.id)}
            className="relative rounded-[4px] border-solid border-[#FE5656] py-2 font-bold  not-italic text-[#FE5656] hover:shadow-upper sm:border sm:pl-3 sm:pr-8 sm:text-[8px] tablet-up:border-[2px] tablet-up:pl-9 tablet-up:pr-16 tablet-up:text-base"
          >
            LƯU TIN
            <span className="absolute right-[15%] top-[50%] translate-y-[-50%]">
              {isCareJob ? (
                <>
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 15 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 1.875V20L7.5 15.625L0 20V1.875C0 0.839844 0.839844 0 1.875 0H13.125C14.1602 0 15 0.839844 15 1.875Z"
                      fill="#FE5656"
                    ></path>
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="21"
                    viewBox="0 0 15 21"
                    fill="none"
                  >
                    <path
                      d="M12.7734 0.65625H2.22656C1.25574 0.65625 0.46875 1.48267 0.46875 2.50215V19.1114C0.46875 20.0613 1.44983 20.6527 2.23096 20.1743L7.5 16.9463L12.7698 20.1739C13.5498 20.6189 14.5312 20.0613 14.5312 19.1114V2.50215C14.5312 1.48267 13.7439 0.65625 12.7734 0.65625ZM12.7734 18.0385L7.5 14.8081L2.22656 18.0385V2.73289C2.22656 2.60329 2.32288 2.50215 2.41333 2.50215H12.5208C12.6782 2.50215 12.7734 2.60329 12.7734 2.73289V18.0385Z"
                      fill="#7D7D7D"
                      className="fill-[#FE5656]"
                    />
                  </svg>
                </>
              )}
            </span>
          </button>
        </div>
        {/* <p>28/04/2023</p> */}
        <p>Hạn nộp hồ sơ: {convertDateFormatDDMMYYYY(jobData.endDate)}</p>
      </div>
    </>
  );
};

export default RecruitmentDetail;
