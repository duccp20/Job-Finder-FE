import React from "react";

import { Toggle } from "../../components/Toggle";
import pen from "/public/svg/pen.svg";
import HeaderHome from "../../components/HeaderHome";

const Profile = (props) => {
  return (
    <div>
      <HeaderHome />
      <div className="flex h-screen w-full px-[100px] mt-[60px] gap-[24px] items-start">
        <div className="border border-[#FE5656] rounded-[10px] w-[40%] h-auto py-[50px] px-[45px] shadow-banner">
          <img
            className="aspect-square mx-auto rounded-full object-cover bg-center bg-no-repeat w-[200px] h-[200px]"
            src="https://images.unsplash.com/photo-1701084412727-1f3e01088a5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          {/* <h2>{props.name}</h2> */}
          <h3 className="text-red-500 text-center text-2xl not-italic font-extrabold mt-[35px] mb-[45px]">
            Tran Dang
          </h3>
          <hr className="mb-[35px] border-[1px]" />
          <div className="flex items-center">
            <p className="text-red-500 text-base not-italic font-semibold leading-relaxed pr-4">
              Cho phép nhà tuyển dụng tìm kiếm hồ sơ trực tuyến của bạn
            </p>
            <Toggle></Toggle>
          </div>
          <p className="text-[#7D7D7D] text-xs italic font-normal pt-3">
            Cho phép nhà tuyển dụng chủ động tìm kiếm hồ sơ của bạn để có thêm
            nhiều cơ hội việc làm tốt từ IT Jobs.
          </p>
        </div>
        <div className="flex flex-col w-[60%] h-auto gap-5">
          <div className="h-[45%] rounded-[10px] shadow-banner">
            <div className=" rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[0px] rounded-br-[0px] bg-[#FE5656] w-full h-[55px] flex justify-between py-[14px] px-[44px] shadow-banner">
              <span className="text-xl not-italic font-bold text-white ">
                Thông tin cá nhân
              </span>
              <a href="#" className="">
                <img src={pen} alt="" />
              </a>
            </div>
            <div className="table py-[30px] px-[40px]">
              <table className="min-w-full">
                <tbody className="text-left">
                  <tr className="">
                    <th className="py-[8px] px-[4px]">Họ và tên lót</th>
                    <td className="py-[8px] px-[4px]">Nguyen</td>
                    <th className="py-[8px] pl-[50px]">Tên</th>
                    <td className="py-[8px] px-[4px]">Hoa</td>
                  </tr>
                  <tr>
                    <th className="py-[8px] px-[4px]">Email </th>
                    <td className="py-[8px] px-[4px]">
                      nguyenhoa123@gmail.com
                    </td>
                    <th className="py-[8px] pl-[50px]">Ngày sinh </th>
                    <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
                  </tr>
                  <tr>
                    <th className="py-[8px] px-[4px]">Số điện thoại </th>
                    <td className="py-[8px] px-[4px]">0982151558</td>
                    <th className="py-[8px] pl-[50px]">Giới tính </th>
                    <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
                  </tr>
                  <tr>
                    <th className="py-[8px] px-[4px]">Tỉnh/ Thành phố </th>
                    <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
                    <th className="py-[8px] pl-[50px]">Quận/ Huyện </th>
                    <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
                  </tr>
                  <tr>
                    <th className="py-[8px] px-[4px]">Địa chỉ </th>
                    <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
                  </tr>
                  <tr>
                    <th className="py-[8px] px-[4px]">Trường học </th>
                    <td className="py-[8px] px-[4px]">(chưa có dữ liệu)</td>
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
              <a href="#" className="">
                <img src={pen} alt="" />
              </a>
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
      </div>
    </div>
  );
};

export default Profile;
