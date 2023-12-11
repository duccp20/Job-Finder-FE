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
    <div className="flex flex-col w-[60%] h-auto gap-5">
      <div className="h-[45%] rounded-[10px] shadow-banner">
        <div className=" rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[0px] rounded-br-[0px] bg-[#FE5656] w-full h-[55px] flex justify-between py-[14px] px-[44px] shadow-banner">
          <span className="text-xl not-italic font-bold text-white ">
            Thông tin cá nhân
          </span>
          <div className="cursor-pointer" onClick={() => navigate("personal")}>
            <img src={pen} alt="" />
          </div>
        </div>
        <div className="table py-[30px] px-[40px]">
          <table className="min-w-full">
            <tbody className="text-left">
              <tr className="">
                <th className="py-[8px] px-[4px]">Họ và tên lót</th>
                <td className="py-[8px] px-[4px]">
                  {isAuthenticated && user && user.lastName}
                </td>
                <th className="py-[8px] pl-[50px]">Tên</th>
                <td className="py-[8px] px-[4px]">
                  {isAuthenticated && user && user.firstName}
                </td>
              </tr>
              <tr>
                <th className="py-[8px] px-[4px]">Email </th>
                <td className="py-[8px] px-[4px]">
                  {isAuthenticated && user && user.email}
                </td>
                <th className="py-[8px] pl-[50px]">Ngày sinh </th>
                <td className="py-[8px] px-[4px]">
                  {isAuthenticated && user && user.birthDay
                    ? user.birthDay
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="py-[8px] px-[4px]">Số điện thoại </th>
                <td className="py-[8px] px-[4px]">
                  {isAuthenticated && user && user.phone
                    ? user.phone
                    : "(chưa có dữ liệu)"}
                </td>
                <th className="py-[8px] pl-[50px]">Giới tính </th>
                <td className="py-[8px] px-[4px]">
                  {isAuthenticated && user && user.gender ? "Nam" : "Nữ"}
                </td>
              </tr>
              {/* <tr>
                <th className="py-[8px] px-[4px]">Tỉnh/ Thành phố </th>
                <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
                <th className="py-[8px] pl-[50px]">Quận/ Huyện </th>
                <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
              </tr> */}
              <tr>
                <th className="py-[8px] px-[4px]">Địa chỉ </th>
                <td className="py-[8px] px-[4px]">
                  {" "}
                  {isAuthenticated && user && user.address
                    ? user.address
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="py-[8px] px-[4px]">Trường học </th>
                <td className="py-[8px] px-[4px]">
                  {candidateData && candidateData.university
                    ? candidateData.university
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-[55%] mt-[px] shadow-banner rounded-[10px]">
        <div className="rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[0px] rounded-br-[0px] bg-[#FE5656] w-full h-[55px] flex justify-between py-[14px] px-[44px] shadow-banner">
          <span className="text-xl not-italic font-bold text-white ">
            Thông tin công việc muốn ứng tuyển
          </span>
          <div onClick={() => navigate("job")} className="cursor-pointer">
            <img src={pen} alt="" />
          </div>
        </div>
        <div className="table py-[30px] px-[40px]">
          <table className="min-w-full">
            <tbody className="text-left">
              <tr className="">
                <th className="py-[8px] px-[4px]">Công việc mong muốn</th>
                <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
              </tr>
              <tr>
                <th className="py-[8px] px-[4px]">Vị trí làm việc</th>
                <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
              </tr>
              <tr>
                <th className="py-[8px] px-[4px]">Chuyên ngành</th>
                <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
              </tr>
              <tr>
                <th className="py-[8px] px-[4px]">Hình thức làm việc</th>
                <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
              </tr>
              <tr>
                <th className="py-[8px] px-[4px]">Địa điểm làm việc</th>
                <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
              </tr>
              <tr>
                <th className="py-[8px] px-[4px]">CV đính kèm</th>
                <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
              </tr>
              <tr>
                <th className="py-[8px] px-[4px]">Thư xin việc</th>
                <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobPersonOverall;
