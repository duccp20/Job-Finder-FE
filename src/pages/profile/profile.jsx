import React, { useEffect, useState } from "react";
import { Toggle } from "../../components/Toggle";
import HeaderHome from "../../components/HeaderHome";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input/input";
import { callFetchCandidateByUserId } from "../../service/candidate/api";
import { doFetchCandidate } from "../../redux/candidate/candidateSlice";
import Popup from "../../components/Popup";

const Profile = () => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const user = useSelector((state) => state.account.user);

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
    }
  };

  return (
    <div>
      <HeaderHome />
      <div className="my-[100px] flex h-auto w-full flex-col items-start gap-[24px] px-4 lg:flex-row lg:px-[100px]">
        <div className="h-auto w-full rounded-[10px] border border-[#FE5656] px-6 py-[30px] shadow-banner lg:w-[40%] lg:px-[45px] lg:py-[50px]">
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
                    <div>
                      <img
                        src={imagePreview}
                        alt="Selected Image"
                        className="mx-auto aspect-square h-[200px] w-[200px] rounded-full bg-center bg-no-repeat object-cover"
                      />
                    </div>
                  )}

                  {!imagePreview && (
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <Toggle></Toggle>
          </div>
          <p className="pt-3 text-xs font-normal italic text-[#7D7D7D]">
            Cho phép nhà tuyển dụng chủ động tìm kiếm hồ sơ của bạn để có thêm
            nhiều cơ hội việc làm tốt từ IT Jobs.
          </p>
        </div>
        <Outlet className="w-full lg:w-[60%]" />
      </div>
    </div>
  );
};

export default Profile;
