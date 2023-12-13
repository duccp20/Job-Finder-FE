import React from "react";
import pen from "/public/svg/pen.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const JobPersonOverall = () => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const user = useSelector((state) => state.account.user);
  const candidateData = useSelector((state) => state.candidate.data);
  const navigate = useNavigate();
  return (
    <div className="flex h-auto w-[60%] flex-col gap-5">
      <div className="h-[45%] rounded-[10px] shadow-banner">
        <div className=" flex h-[55px] w-full justify-between rounded-bl-[0px] rounded-br-[0px] rounded-tl-[10px] rounded-tr-[10px] bg-[#FE5656] px-[44px] py-[14px] shadow-banner">
          <span className="text-xl font-bold not-italic text-white ">
            Thông tin cá nhân
          </span>
          <div className="cursor-pointer" onClick={() => navigate("personal")}>
            <img src={pen} alt="" />
          </div>
        </div>
        <div className="table px-[40px] py-[30px]">
          <table className="min-w-full">
            <tbody className="text-left">
              <tr className="">
                <th className="px-[4px] py-[8px]">Họ và tên lót</th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.lastName}
                </td>
                <th className="py-[8px] pl-[50px]">Tên</th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.firstName}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Email </th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.email}
                </td>
                <th className="py-[8px] pl-[50px]">Ngày sinh </th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.birthDay
                    ? user.birthDay
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Số điện thoại </th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.phone
                    ? user.phone
                    : "(chưa có dữ liệu)"}
                </td>
                <th className="py-[8px] pl-[50px]">Giới tính </th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.gender ? "Nam" : "Nữ"}
                </td>
              </tr>

              <tr>
                <th className="px-[4px] py-[8px]">Địa chỉ </th>
                <td className="px-[4px] py-[8px]">
                  {" "}
                  {isAuthenticated && user && user.address
                    ? user.address
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Trường học </th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData.university
                    ? candidateData.university
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-[px] h-[55%] rounded-[10px] shadow-banner">
        <div className="flex h-[55px] w-full justify-between rounded-bl-[0px] rounded-br-[0px] rounded-tl-[10px] rounded-tr-[10px] bg-[#FE5656] px-[44px] py-[14px] shadow-banner">
          <span className="text-xl font-bold not-italic text-white ">
            Thông tin công việc muốn ứng tuyển
          </span>
          <div onClick={() => navigate("job")} className="cursor-pointer">
            <img src={pen} alt="" />
          </div>
        </div>
        <div className="table px-[40px] py-[30px]">
          <table className="min-w-full">
            <tbody className="text-left">
              <tr className="">
                <th className="px-[4px] py-[8px]">Công việc mong muốn</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData?.desiredJob
                    ? candidateData?.desiredJob
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Vị trí làm việc</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData?.positionDTOs
                    ? candidateData.positionDTOs
                        .map((pos) => pos.name)
                        .join(" / ")
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Chuyên ngành</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData?.majorDTOs
                    ? candidateData.majorDTOs.map((maj) => maj.name).join(" / ")
                    : "(chưa có dữ liệu)"}
                  {/* "referenceLetter": "Không có",
        "searchable": true,
        "positionDTOs": [
            {
                "id": 1,
                "name": "FE"
            }
        ],
        "majorDTOs": [
            {
                "id": 1,
                "name": "CNTT"
            }
        ],
        "scheduleDTOs": [
            {
                "id": 1,
                "name": null
            }
        ],
        "desiredJob": "Java Dev",
        "desiredWorkingProvince": "Hồ Chí Minh",
        "university": "Kinh Tế Luật",
        "cv": "1702403009585_Java_Backend_NguyenMinhVy.pdf" */}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Hình thức làm việc</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData?.scheduleDTOs
                    ? candidateData.scheduleDTOs
                        .map((schedule) => schedule.name)
                        .join(" / ")
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Địa điểm làm việc</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData?.desiredWorkingProvince
                    ? candidateData?.desiredWorkingProvince
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">CV đính kèm</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData?.cv
                    ? candidateData?.cv
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Thư xin việc</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData?.referenceLetter
                    ? candidateData?.referenceLetter
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobPersonOverall;
