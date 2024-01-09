import React, { useEffect, useState } from "react";
import { Toggle } from "../../components/Toggle";
import HeaderHome from "../../components/HeaderHome";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import guest from "/images/guest-logo.jpg";
import Input from "../../components/Input/input";
import {
  callChangeSearchable,
  callFetchCandidateByUserId,
  callUpdateAvatar,
} from "../../service/candidate/api";
import {
  doFetchCandidate,
  doSetSearchable,
} from "../../redux/candidate/candidateSlice";
import Spinner from "../../components/Spinner/spinnner";
import {
  doLoginAction,
  doSetAvatarProfile,
  doSetProfileData,
} from "../../redux/account/accountSlice";
import Notification from "../../components/Notification";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Profile = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [fileAvatar, setFileAvatar] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const searchable = useSelector((state) => state.candidate.data.searchable);
  const [pendingToggle, setPendingToggle] = useState(searchable);
  console.log("searchable in profile", searchable);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const user = useSelector((state) => state.account.user);
  const dataCandidate = useSelector((state) => state.candidate.data);
  const candidateID = useSelector((state) => state.candidate.id);
  console.log("dataCandidate in profile", dataCandidate);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { control } = useForm();
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
      setFileAvatar(file);
      console.log("file", file);
      setShowButton(true);
    }
  };

  const handleSubmitAvatar = async () => {
    setIsSubmitting(true);
    try {
      const res = await callUpdateAvatar(candidateID, fileAvatar);
      setIsSubmitting(false);
      if (res && res.httpCode === 200) {
        console.log("Ảnh đã được cập nhật");
        dispatch(doSetAvatarProfile(res.data));
        setImagePreview(
          `https://firebasestorage.googleapis.com/v0/b/job-worked.appspot.com/o/images%2F${res.data}?alt=media`,
        );
        setShowButton(false);
        toast.success("Ảnh đại diện đã được cập nhật thành công!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("Cấp nhật ảnh thất bại", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("Error in ava", error);
      setIsSubmitting(false);
      setShowButton(false);
    }
  };

  const handleToggle = (newState) => {
    setPendingToggle(newState);
    setShowNotification(true);
  };

  const handleConfirmToggle = async () => {
    setShowNotification(false);
    try {
      const res = await callChangeSearchable(candidateID);
      if (res && res.httpCode === 200) {
        dispatch(doSetSearchable(pendingToggle));
        toast.success("Cập nhật thành công!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("Cập nhật thất bại!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    setPendingToggle(searchable);
  }, [searchable]);

  const handleCancelToggle = () => {
    setShowNotification(false);
    setPendingToggle(searchable); // Reset lại trạng thái toggle
  };

  return (
    <div>
      <>
        <ToastContainer />
      </>
      {showNotification && (
        <Notification
          action="Cho phép tìm kiếm hồ sơ?"
          title={
            pendingToggle
              ? "Sau khi nhấn “Đồng ý”, nhà tuyển dụng có thể chủ động tìm kiếm hồ sơ của bạn."
              : "Sau khi nhấn “Đồng ý”, nhà tuyển dụng “KHÔNG THỂ” chủ động tìm kiếm hồ sơ của bạn."
          }
          des="Nhấn Đồng ý để xác nhận."
          onConfirm={handleConfirmToggle}
          onCancel={handleCancelToggle}
        />
      )}
      <div className="mt-[100px] flex h-auto w-full items-start justify-center  gap-[24px] px-4 ">
        <div className="h-auto w-[30%] rounded-[10px] border border-[#FE5656] px-6 py-[30px] shadow-banner ">
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
                  className="my-3 flex w-full cursor-pointer items-center justify-center rounded-[5px] py-2"
                >
                  {imagePreview && (
                    <div className="group relative inline-block">
                      <div className=" absolute  bottom-0    hidden  group-hover:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="auto"
                          height="auto"
                          viewBox="0 0 100 100"
                          fill="none"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="50"
                            fill="#D9D9D9"
                            fill-opacity="0.5"
                          />
                          <mask
                            id="mask0_1975_2076"
                            className="mask-type:alpha"
                            maskUnits="userSpaceOnUse"
                            x="38"
                            y="38"
                            width="50"
                            height="50"
                          >
                            <rect
                              x="38"
                              y="38"
                              width="50"
                              height="50"
                              fill="#D9D9D9"
                            />
                          </mask>
                          <g mask="url(#mask0_1975_2076)">
                            <path
                              d="M50 55.5C51.25 55.5 52.3125 55.0625 53.1875 54.1875C54.0625 53.3125 54.5 52.25 54.5 51C54.5 49.75 54.0625 48.6875 53.1875 47.8125C52.3125 46.9375 51.25 46.5 50 46.5C48.75 46.5 47.6875 46.9375 46.8125 47.8125C45.9375 48.6875 45.5 49.75 45.5 51C45.5 52.25 45.9375 53.3125 46.8125 54.1875C47.6875 55.0625 48.75 55.5 50 55.5ZM50 53.5C49.3 53.5 48.7083 53.2583 48.225 52.775C47.7417 52.2917 47.5 51.7 47.5 51C47.5 50.3 47.7417 49.7083 48.225 49.225C48.7083 48.7417 49.3 48.5 50 48.5C50.7 48.5 51.2917 48.7417 51.775 49.225C52.2583 49.7083 52.5 50.3 52.5 51C52.5 51.7 52.2583 52.2917 51.775 52.775C51.2917 53.2583 50.7 53.5 50 53.5ZM42 59C41.45 59 40.9792 58.8042 40.5875 58.4125C40.1958 58.0208 40 57.55 40 57V45C40 44.45 40.1958 43.9792 40.5875 43.5875C40.9792 43.1958 41.45 43 42 43H45.15L47 41H53L54.85 43H58C58.55 43 59.0208 43.1958 59.4125 43.5875C59.8042 43.9792 60 44.45 60 45V57C60 57.55 59.8042 58.0208 59.4125 58.4125C59.0208 58.8042 58.55 59 58 59H42ZM42 57H58V45H53.95L52.125 43H47.875L46.05 45H42V57Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </div>
                      <img
                        src={imagePreview}
                        alt="Selected Image"
                        className="mx-auto aspect-square h-[200px] w-[200px] rounded-full bg-center bg-no-repeat object-cover"
                      />
                    </div>
                  )}

                  {!imagePreview && (
                    <div className="group relative inline-block">
                      <div className=" absolute  bottom-0    hidden  group-hover:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="auto"
                          height="auto"
                          viewBox="0 0 100 100"
                          fill="none"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="50"
                            fill="#D9D9D9"
                            fill-opacity="0.5"
                          />
                          <mask
                            id="mask0_1975_2076"
                            className="mask-type:alpha"
                            maskUnits="userSpaceOnUse"
                            x="38"
                            y="38"
                            width="50"
                            height="50"
                          >
                            <rect
                              x="38"
                              y="38"
                              width="50"
                              height="50"
                              fill="#D9D9D9"
                            />
                          </mask>
                          <g mask="url(#mask0_1975_2076)">
                            <path
                              d="M50 55.5C51.25 55.5 52.3125 55.0625 53.1875 54.1875C54.0625 53.3125 54.5 52.25 54.5 51C54.5 49.75 54.0625 48.6875 53.1875 47.8125C52.3125 46.9375 51.25 46.5 50 46.5C48.75 46.5 47.6875 46.9375 46.8125 47.8125C45.9375 48.6875 45.5 49.75 45.5 51C45.5 52.25 45.9375 53.3125 46.8125 54.1875C47.6875 55.0625 48.75 55.5 50 55.5ZM50 53.5C49.3 53.5 48.7083 53.2583 48.225 52.775C47.7417 52.2917 47.5 51.7 47.5 51C47.5 50.3 47.7417 49.7083 48.225 49.225C48.7083 48.7417 49.3 48.5 50 48.5C50.7 48.5 51.2917 48.7417 51.775 49.225C52.2583 49.7083 52.5 50.3 52.5 51C52.5 51.7 52.2583 52.2917 51.775 52.775C51.2917 53.2583 50.7 53.5 50 53.5ZM42 59C41.45 59 40.9792 58.8042 40.5875 58.4125C40.1958 58.0208 40 57.55 40 57V45C40 44.45 40.1958 43.9792 40.5875 43.5875C40.9792 43.1958 41.45 43 42 43H45.15L47 41H53L54.85 43H58C58.55 43 59.0208 43.1958 59.4125 43.5875C59.8042 43.9792 60 44.45 60 45V57C60 57.55 59.8042 58.0208 59.4125 58.4125C59.0208 58.8042 58.55 59 58 59H42ZM42 57H58V45H53.95L52.125 43H47.875L46.05 45H42V57Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </div>
                      <img
                        src={
                          user.avatar
                            ? `https://firebasestorage.googleapis.com/v0/b/job-worked.appspot.com/o/images%2F${user.avatar}?alt=media`
                            : guest
                        }
                        alt="Selected Image"
                        className="mx-auto aspect-square h-[200px] w-[200px] rounded-full bg-center bg-no-repeat object-cover"
                      />
                    </div>
                  )}
                </label>
              </>
            )}
          />

          <h3 className="mb-[45px] mt-[35px] text-center text-2xl font-extrabold not-italic text-red-500">
            {isAuthenticated && user && user.lastName + " " + user.firstName}
          </h3>
          <hr className="mb-[35px] border-[1px]" />
          <div className="flex items-center">
            <p className="pr-4 text-base font-semibold not-italic leading-relaxed text-red-500">
              Cho phép nhà tuyển dụng tìm kiếm hồ sơ trực tuyến của bạn
            </p>
            <Toggle state={pendingToggle} onToggleChange={handleToggle} />
          </div>
          <p className="pt-3 text-xs font-normal italic text-[#7D7D7D]">
            Cho phép nhà tuyển dụng chủ động tìm kiếm hồ sơ của bạn để có thêm
            nhiều cơ hội việc làm tốt từ IT Jobs.
          </p>
          {showButton && (
            <button
              onClick={handleSubmitAvatar}
              className={`mt-3 w-full rounded-[4px] px-[22px] py-[12px] text-center text-[15px] font-bold text-white  ${
                isSubmitting ? "bg-gray-500" : "  bg-[#FE5656]"
              } `}
              type="submit"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Spinner />
                  <span>Đang Cập nhật</span>
                </span>
              ) : (
                "Cập nhật"
              )}
            </button>
          )}
        </div>
        <Outlet className="w-full" />
      </div>
    </div>
  );
};

export default Profile;
