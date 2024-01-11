import React, { useEffect, useState } from "react";
import HeaderHome from "../../components/HeaderHome";
import SearchBar from "../../components/SearchBatr/search";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { callGetJobByID } from "../../service/job/api";
import { useDispatch, useSelector } from "react-redux";
import { doSetJobData } from "../../redux/job/jobSlice";
import Loading from "../../components/Loading";
import PopupHr from "../../components/PopupHr";
import {
  callCreateJobCare,
  callDeleteJobCareByJobID,
} from "../../service/jobcare/api";
import Uploader from "../../components/Uploader";
import Popup from "../../components/Popup";
import { callCheckCandidateHaveAppliedJob } from "../../service/applyJob/api";

const RecruitmentOverall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();

  const saved = new URLSearchParams(location.search).get("saved");
  const savedValue = saved === "true";
  const [isLoading, setIsLoading] = useState(true);
  const [isShowModalLogin, setIsShowModalLogin] = useState(false);
  const [isShowModalJobCare, setIsShowModalJobCare] = useState(false);
  const [isShowUpload, setIsShowUpload] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [checkApplied, setCheckApplied] = useState(false);
  const [isCareJob, setIsCareJob] = useState(savedValue);
  const [data, setData] = useState([]);

  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);

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
  useEffect(() => {
    console.log(isCareJob);
  }, [isCareJob]);
  const handleConfirm = (action) => {
    if (action === "apply") {
      setIsShowModalLogin(false);
      navigate("/login");
    } else {
      setIsShowModalJobCare(false);
      navigate("/login");
    }
  };

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
    const fetchJobDetail = async () => {
      try {
        const response = await callGetJobByID(id);
        console.log("response in recruitment", response);
        setData(response);
        dispatch(doSetJobData(response));
        console.log("id", id);
        const check = await callCheckCandidateHaveAppliedJob(id);
        console.log("check", check.data);
        setCheckApplied(check.data);
        console.log("checkApplied", checkApplied);
        setIsLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin chi tiết công việc: ", error);
      }
    };

    fetchJobDetail(); // Gọi hàm fetchJobDetail khi component được mount
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
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
          <SearchBar />
          <div className="mx-auto w-[90%] rounded-[6px] border-[2px] border-[#FE5656] sm:mb-[10px] sm:mt-[90px] sm:py-[30px] tablet-up:my-[10px] tablet-up:py-[45px]">
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
            <div className="taler flex items-start justify-between sm:px-[20px] tablet-up:px-[40px]">
              <div className="desktop-up:flex desktop-up:flex-col">
                <div className="flex">
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/job-worked.appspot.com/o/images%2F${data?.companyDTO?.logo}?alt=media`}
                    alt=""
                    className="mr-[20px] rounded-[8px] border border-[#7D7D7D] object-cover sm:h-[60px] sm:w-[60px] tablet-up:h-[90px] tablet-up:w-[90px]"
                  />
                  <div className="flex flex-grow flex-col justify-between sm:py-[5px]">
                    <h3 className="font-bold not-italic text-red-500 sm:text-[12px] tablet-up:text-xl">
                      {data?.name}
                    </h3>
                    <span className="sm:text-[8px]">
                      {data?.companyDTO?.name}
                    </span>
                    <div className="flex sm:items-center tablet-up:items-baseline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="16"
                        viewBox="0 0 19 16"
                        fill="none"
                        className="sm:h-3 sm:w-3"
                      >
                        <g clip-path="url(#clip0_194_975)">
                          <path
                            d="M5.32544 15.6748C3.6737 13.8549 0 9.44412 0 6.96658C0 3.96065 2.71999 1.52393 6.07536 1.52393C9.42947 1.52393 12.1507 3.96065 12.1507 6.96658C12.1507 9.44412 8.44855 13.8549 6.82529 15.6748C6.43609 16.1085 5.71464 16.1085 5.32544 15.6748ZM6.07536 8.7808C7.19234 8.7808 8.10048 7.96724 8.10048 6.96658C8.10048 5.96593 7.19234 5.15236 6.07536 5.15236C4.95838 5.15236 4.05024 5.96593 4.05024 6.96658C4.05024 7.96724 4.95838 8.7808 6.07536 8.7808Z"
                            fill="#FE5656"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_194_975">
                            <rect width="19" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="font-light not-italic text-gray-800 sm:text-[8px] tablet-up:text-base">
                        {data?.province}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-[10px] flex items-start gap-[19px] sm:w-full">
                  {data?.positionDTOs.map((position) => (
                    <span
                      key={position.id}
                      className="inline-block bg-[#F3F9FC]  font-semibold not-italic text-gray-600 sm:p-[5px] sm:text-[8px] tablet-up:p-[10px] tablet-up:text-xs"
                    >
                      {position.name}
                    </span>
                  ))}
                  {data?.scheduleDTOs.map((schedule) => (
                    <span
                      key={schedule.id}
                      className="inline-block bg-[#F3F9FC]  font-semibold not-italic text-gray-600 sm:p-[5px] sm:text-[8px] tablet-up:p-[10px] tablet-up:text-xs"
                    >
                      {schedule.name}
                    </span>
                  ))}
                  {data?.majorDTOs.map((major) => (
                    <span
                      key={major.id}
                      className="inline-block bg-[#F3F9FC]  font-semibold not-italic text-gray-600 sm:p-[5px] sm:text-[8px] tablet-up:p-[10px] tablet-up:text-xs"
                    >
                      {major.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center gap-[10px] ">
                {checkApplied ? (
                  <button className="flex-1 rounded-[4px] bg-[#BEB9B9] py-2 font-bold uppercase not-italic text-white  sm:whitespace-nowrap sm:px-2 sm:text-[8px]  tablet-up:px-5 tablet-up:text-base">
                    Đã Ứng Tuyển
                  </button>
                ) : (
                  <button
                    onClick={handleApply}
                    className=" flex-1 rounded-[4px] bg-[#FE5656] py-2 font-bold not-italic text-white hover:bg-white hover:text-[#FE5656] hover:outline hover:outline-[#FE5656] sm:whitespace-nowrap sm:px-2 sm:text-[8px] sm:hover:outline-[1px] tablet-up:px-5 tablet-up:text-base"
                  >
                    ỨNG TUYỂN NGAY
                  </button>
                )}

                <button
                  onClick={() => handleJobCare(data.id)}
                  className="relative flex-1 rounded-[4px] border-solid border-[#FE5656] py-2 pr-5 font-bold not-italic text-[#FE5656] hover:shadow-upper sm:border sm:text-[8px] tablet-up:border-[2px] tablet-up:text-base"
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
            </div>
            <div className="flex w-full cursor-pointer items-center py-[10px] font-[600] shadow-banner sm:mt-[10px] sm:gap-5 sm:pl-[20px] sm:text-[10px] tablet-up:mt-[20px] tablet-up:gap-7 tablet-up:pl-[40px] tablet-up:text-[16px]">
              <span
                className={`border-b-[2px] border-transparent hover:border-b-[#FE5656] hover:text-[#FE5656] ${
                  location.pathname === `/job-detail/${data.id}`
                    ? "border-b-[#FE5656] text-[#FE5656]"
                    : "text-black"
                }`}
                onClick={() => navigate(`/job-detail/${data.id}`)}
              >
                CHI TIẾT
              </span>
              <span
                className={`border-b-[2px] border-transparent hover:border-b-[#FE5656] hover:text-[#FE5656] ${
                  location.pathname === `/job-detail/company/${data.id}`
                    ? "border-b-[#FE5656] text-[#FE5656]"
                    : "text-black"
                }`}
                onClick={() => navigate(`company/${data.id}`)}
              >
                TỔNG QUAN CÔNG TY
              </span>
            </div>
            <Outlet></Outlet>
          </div>
        </>
      )}
    </div>
  );
};

export default RecruitmentOverall;
