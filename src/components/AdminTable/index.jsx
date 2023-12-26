import React, { useState } from "react";
import Pagination from "../Pagination";
import useDataFetcher from "../Pagination/useDataFetcher";

const AdminTable = () => {
  const { loading, pages, totalPages, currentPage, setCurrentPage } =
    useDataFetcher();
  const [isOpen, setIsOpen] = useState(false);

  const userData = [
    {
      id: "#AD1320",
      avatar:
        "https://images.unsplash.com/photo-1639610806434-ef56b7522338?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastName: "Nguyễn Văn",
      firstName: "A",
      email: "nguyenvana@example.com",
      status: "Active",
      registrationDate: "01/03/2023   12:30",
      position:
        "Nhân viên chăm sóc khách h... Nhân viên chăm sóc khách h...Nhân viên chăm sóc khách h...Nhân viên chăm sóc khách h...",
    },
    {
      id: "#AD1320",
      avatar:
        "https://images.unsplash.com/photo-1639610806434-ef56b7522338?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastName: "Nguyễn Văn",
      firstName: "A",
      email: "nguyenvana@example.com",
      status: "Disable",
      registrationDate: "01/03/2023   12:30",
      position: "Nhân viên chăm sóc khách h... ",
    },
    {
      id: "#AD1320",
      avatar:
        "https://images.unsplash.com/photo-1639610806434-ef56b7522338?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastName: "Nguyễn Văn",
      firstName: "A",
      email: "nguyenvana@example.com",
      status: "Not active",
      registrationDate: "01/03/2023   12:30",
      position: "Nhân viên chăm sóc khách h...",
    },
  ];
  return (
    <div>
      <div className="mb-[15px] mt-[40px] flex gap-[11px]">
        <button className=" bg-[#FE5656] px-[25px] py-[10px] text-[14px] font-[600] text-white">
          Tất cả
        </button>
        <button className=" bg-[#FE5656] px-[10px] py-[10px] text-[14px] font-[600] text-white opacity-50">
          Thùng rác
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#FE5656] text-white">
          <tr>
            <th className="p-[10px] text-left text-base font-bold uppercase">
              ID
            </th>
            <th className="p-[10px] text-center text-base font-bold">Ảnh</th>
            <th className="p-[10px] text-left text-base font-bold">
              Họ và tên lót
            </th>
            <th className="p-[10px] text-left text-base font-bold">Tên</th>
            <th className="p-[10px] text-left text-base font-bold ">Email</th>
            <th className="p-[10px] text-left text-base font-bold">
              Trạng Thái
            </th>
            <th className="p-[10px] text-left text-base font-bold">
              <div className="flex items-center gap-[10px] text-center">
                <span>Ngày đăng kí</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="7"
                  viewBox="0 0 16 7"
                  fill="none"
                >
                  <path
                    d="M7.99979 6.8028C7.65863 6.8028 7.31729 6.71064 7.05729 6.52634L0.390625 1.8081C-0.130208 1.43949 -0.130208 0.842337 0.390625 0.473725C0.911458 0.105113 1.75521 0.105113 2.27604 0.473725L7.99979 4.52625L13.7248 0.474462C14.2456 0.10585 15.0894 0.10585 15.6102 0.474462C16.131 0.843074 16.131 1.44023 15.6102 1.80884L8.94354 6.52708C8.68312 6.71138 8.34146 6.8028 7.99979 6.8028Z"
                    fill="white"
                  />
                </svg>
              </div>
            </th>
            <th className="p-[10px] text-left text-base font-bold">Chức vụ</th>
            <th className="p-[10px] text-left text-base font-bold">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {userData.map((user, index) => (
            <tr
              key={index}
              className={`bg-${
                index % 2 === 0 ? "gray-200" : "white"
              } border border-solid border-[#DEDEDE] p-[10px]`}
            >
              <td className="py-[5px] text-center text-[16px] font-[400]">
                {user.id}
              </td>
              <td className="p-[5px] text-center">
                <img
                  src={user.avatar}
                  alt={`Avatar ${user.id}`}
                  className="h-[30px] w-[30px] rounded-full object-cover shadow-custom"
                />
              </td>
              <td className="p-[10px] text-[16px] font-[400]">
                {user.lastName}
              </td>
              <td className="p-[10px] text-[16px] font-[400]">
                {user.firstName}
              </td>
              <td className="max-w-[210px] overflow-x-auto p-[10px] text-[16px] font-[400]">
                <div className="truncate">{user.email}</div>
              </td>
              <td className="overflow-x-hidden px-[10px] text-[16px] font-[400]">
                <div
                  className={`w-[90] rounded-[5px] py-[10px] text-center ${
                    user.status === "Active"
                      ? "bg-[#DEF7DA] text-[#25A71C]"
                      : user.status === "Not active"
                        ? "bg-[#F9D5D5] text-[#DC2020]"
                        : user.status === "Disable"
                          ? "bg-[#E6E6E6] text-[#5C5C5C]"
                          : ""
                  }`}
                >
                  {user.status}
                </div>
              </td>
              <td className=" overflow-x-hidden p-[10px] text-[16px] font-[400]">
                {user.registrationDate}
              </td>
              <td className="max-w-[250px] overflow-x-auto p-[10px] text-[16px] font-[400]">
                <div className="truncate">{user.position}</div>
              </td>
              <td
                className="overflow-x-hidden p-[10px] text-[16px] font-[400]"
                x
              >
                <div className="flex gap-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      d="M5 12C5 12 7.545 7 12 7C16.454 7 19 12 19 12C19 12 16.454 17 12 17C7.545 17 5 12 5 12Z"
                      fill="white"
                      stroke="#FE5656"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13ZM21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17M21 7V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V7"
                      fill="white"
                    />
                    <path
                      d="M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17M21 7V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V7M12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13Z"
                      stroke="#FE5656"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      d="M0 3.24789L1.63556 1.71053L3.83333 3.79263L4.19111 4.13158L5.46889 5.34211L20.4444 19.5295L23 21.9505L21.3772 23.5L19.5117 21.7326C19.0772 22.0837 18.5278 22.2895 17.8889 22.2895H7.66667C6.26111 22.2895 5.11111 21.2 5.11111 19.8684V8.09L0 3.24789ZM21.7222 1.71053V4.13158H7.43667L4.88111 1.71053H8.30556L9.58333 0.5H15.9722L17.25 1.71053H21.7222ZM20.4444 5.34211V16.4547L8.71444 5.34211H20.4444Z"
                      fill="#FE5656"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      d="M12 14V22H4C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM14.595 18.811C14.4682 18.2778 14.4682 17.7222 14.595 17.189L13.603 16.616L14.603 14.884L15.595 15.457C15.9932 15.0799 16.4745 14.8018 17 14.645V13.5H19V14.645C19.532 14.803 20.012 15.085 20.405 15.457L21.397 14.884L22.397 16.616L21.406 17.189C21.5326 17.7223 21.5326 18.2777 21.406 18.811L22.397 19.384L21.397 21.116L20.405 20.543C20.0069 20.9201 19.5256 21.1983 19 21.355V22.5H17V21.355C16.4744 21.1983 15.9931 20.9201 15.595 20.543L14.603 21.116L13.603 19.384L14.595 18.811ZM18 17C17.7348 17 17.4804 17.1054 17.2929 17.2929C17.1054 17.4804 17 17.7348 17 18C17 18.2652 17.1054 18.5196 17.2929 18.7071C17.4804 18.8946 17.7348 19 18 19C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18C19 17.7348 18.8946 17.4804 18.7071 17.2929C18.5196 17.1054 18.2652 17 18 17Z"
                      fill="#FE5656"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between bg-white px-[10px]">
        <span className="text-[14px] font-[400] text-[#6C757D]">
          Hiển thị 21-30 trong 40 dữ liệu
        </span>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default AdminTable;
