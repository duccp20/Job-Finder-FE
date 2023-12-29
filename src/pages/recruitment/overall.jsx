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

const RecruitmentOverall = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isShowModalLogin, setIsShowModalLogin] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();

  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);

  const handleApply = () => {
    if (isAuthenticated) {
      alert("Đã đăng nhập");
    } else {
      setIsShowModalLogin(true);
    }
  };

  const handleConfirm = () => {
    setIsShowModalLogin(false);
    navigate("/login");
  };

  const handleCancel = () => {
    setIsShowModalLogin(false);
  };
  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await callGetJobByID(id);
        console.log("response in recruitment", response);
        setData(response);
        dispatch(doSetJobData(response));
        setIsLoading(false); // Cập nhật state với dữ liệu từ API
      } catch (error) {
        console.error("Lỗi khi lấy thông tin chi tiết công việc: ", error);
      }
    };

    fetchJobDetail(); // Gọi hàm fetchJobDetail khi component được mount
  }, [id]);
  console.log("id in recruitment", id);
  console.log("location path", location);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HeaderHome />
          <SearchBar />
          <div className="mx-auto w-[90%] rounded-[6px] border-[2px] border-[#FE5656] sm:mb-[10px] sm:mt-[90px] sm:py-[30px] tablet-up:my-[10px] tablet-up:py-[45px]">
            {isShowModalLogin && (
              <PopupHr
                type="require-login"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
              ></PopupHr>
            )}
            <div className="taler flex items-center justify-between sm:px-[20px] tablet-up:px-[40px]">
              <div className="flex flex-col">
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
                <div className="mt-[10px] flex items-start gap-[19px] ">
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
                <button
                  onClick={handleApply}
                  className=" flex-1 rounded-[4px] bg-[#FE5656] py-2 font-bold not-italic text-white hover:bg-white hover:text-[#FE5656] hover:outline hover:outline-[#FE5656] sm:whitespace-nowrap sm:px-2 sm:text-[8px] sm:hover:outline-[1px] tablet-up:px-5 tablet-up:text-base"
                >
                  ỨNG TUYỂN NGAY
                </button>
                <button className="relative flex-1 rounded-[4px] border-solid border-[#FE5656] py-2 pr-5 font-bold not-italic text-[#FE5656] hover:shadow-upper sm:border sm:text-[8px] tablet-up:border-[2px] tablet-up:text-base">
                  LƯU TIN
                  <span className="absolute right-[15%] top-[50%] translate-y-[-50%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      className="sm:h-3 sm:w-3"
                    >
                      <path
                        d="M17.4175 0.9375H2.48821C1.11399 0.9375 0 1.78229 0 2.82442V19.8027C0 20.7737 1.38873 21.3783 2.49443 20.8893L9.95283 17.5896L17.4123 20.8889C18.5164 21.3437 19.9057 20.7737 19.9057 19.8027V2.82442C19.9057 1.78229 18.7912 0.9375 17.4175 0.9375ZM17.4175 18.706L9.95283 15.4039L2.48821 18.706V3.06028C2.48821 2.9278 2.62454 2.82442 2.75258 2.82442H17.0598C17.2827 2.82442 17.4175 2.9278 17.4175 3.06028V18.706Z"
                        fill="#FE5656"
                      />
                    </svg>
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
