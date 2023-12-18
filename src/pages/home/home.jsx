import React, { useEffect, useState } from "react";
import HeaderHome from "../../components/HeaderHome";
import dropdown from "/public/svg/dropdown.svg";
import check from "/public/svg/check.svg";
import JobItem from "../../components/JobItem";
import Pagination from "../../components/Pagination";
import useDataFetcher from "../../components/Pagination/useDataFetcher";
import LoginAs from "../../components/LoginAs";
import Loading from "../../components/Loading";
import Checkbox from "../../components/Checkbox/checkbox";
import Skeleton from "../../components/SkeletonLoader/skeleton";
import { useSelector } from "react-redux";
import ProvincesDropdown from "../../components/DropdownProvince";
import { doSetRoleGuest } from "../../redux/account/accountSlice";

const HomePage = () => {
  const [major, setMajor] = useState([]);
  const [location, setLocation] = useState([]);
  const [checkboxes, setCheckboxes] = useState([]);
  const data = useSelector((state) => state.baseData.data);
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);

  if (!isAuthenticated) doSetRoleGuest({ name: "Role_Guest", id: 0 });

  console.log(data);

  const mapState = (data, checked = false) =>
    data.map((item) => ({ id: item.id, label: item.name, checked }));

  useEffect(() => {
    // Chỉ cập nhật trạng thái nếu data có dữ liệu
    if (data?.majors) {
      setMajor(mapState(data.majors));
    }
    if (data?.positions) {
      setLocation(mapState(data.positions));
    }
    if (data?.schedules) {
      setCheckboxes(mapState(data.schedules));
    }
  }, [data]);

  /*
   *
   * @description
   * tạo hàm chứa dữ liệu checkbox
   *
   */

  const handleCheckboxChange = (id, setState) => {
    setState((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox,
      ),
    );
  };

  const { loading, pages, totalPages, currentPage, setCurrentPage } =
    useDataFetcher();

  return (
    <div>
      <div className="mt-[60px]  flex  h-screen w-full gap-[45px]  px-[100px] py-[36px] ">
        <div className=" w-[20%]">
          {[
            {
              state: checkboxes,
              setState: setCheckboxes,
              title: "Hình thức làm việc",
            },
            {
              state: location,
              setState: setLocation,
              title: "Vị trí làm việc",
            },
            { state: major, setState: setMajor, title: "Chuyên ngành" },
          ].map((section) => (
            <div
              key={section.title}
              className="mb-[15px] h-auto rounded-[10px] border-[0.5px] border-[#DEDEDE] px-[18px] pb-[24px] pt-[12px]"
            >
              <div className="relative flex justify-between">
                <span className="text- mb-[20px] font-bold not-italic text-[#FE5656]">
                  {section.title}
                </span>
              </div>
              <div>
                <ul>
                  {section.state.map((checkbox) => (
                    <li key={checkbox.id} className="mb-2">
                      <Checkbox
                        id={checkbox.id}
                        label={checkbox.label}
                        checked={checkbox.checked}
                        onChange={() =>
                          handleCheckboxChange(checkbox.id, section.setState)
                        }
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex w-[80%] flex-col gap-[36px]">
          <form className="flex h-auto items-center justify-between rounded-[6px] border-[0.5px] border-[#FE5656] px-[18px] py-[12px]">
            <div className="flex flex-grow items-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                htmlFor="findjob"
              >
                <g clip-path="url(#clip0_937_516)">
                  <path
                    d="M18.5658 17.332L14.1238 12.6562C15.1339 11.0777 15.6323 9.10546 15.3655 7.00389C14.9105 3.42928 12.1273 0.520299 8.72808 0.0672912C3.67416 -0.605873 -0.575609 3.86756 0.0639337 9.18749C0.494402 12.7672 3.25831 15.6992 6.65456 16.1758C8.65104 16.4566 10.5251 15.9322 12.0243 14.8687L16.4663 19.5445C17.0459 20.1547 17.9859 20.1547 18.5656 19.5445C19.1447 18.9336 19.1447 17.9414 18.5658 17.332ZM2.93531 8.12499C2.93531 5.36796 5.06613 3.12499 7.68531 3.12499C10.3045 3.12499 12.4353 5.36796 12.4353 8.12499C12.4353 10.882 10.3045 13.125 7.68531 13.125C5.06613 13.125 2.93531 10.8828 2.93531 8.12499Z"
                    fill="url(#paint0_linear_937_516)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_937_516"
                    x1="9.49996"
                    y1="0"
                    x2="9.49996"
                    y2="20.0021"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFB950" />
                    <stop offset="1" stop-color="#FE5656" />
                  </linearGradient>
                  <clipPath id="clip0_937_516">
                    <rect width="19" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <input
                type="text"
                name="findjob"
                id="findjob"
                placeholder="Tìm kiếm việc làm"
                className="w-full pl-[10px] placeholder:text-[#626262]"
              />
            </div>

            <div className="flex items-end pr-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
              >
                <path
                  d="M6.16629 20.5731C4.25375 18.1845 0 12.3953 0 9.14349C0 5.1982 3.14946 2 7.03463 2C10.9183 2 14.0693 5.1982 14.0693 9.14349C14.0693 12.3953 9.78253 18.1845 7.90297 20.5731C7.45231 21.1423 6.61695 21.1423 6.16629 20.5731ZM7.03463 11.5246C8.32798 11.5246 9.37951 10.4568 9.37951 9.14349C9.37951 7.83013 8.32798 6.76232 7.03463 6.76232C5.74129 6.76232 4.68975 7.83013 4.68975 9.14349C4.68975 10.4568 5.74129 11.5246 7.03463 11.5246Z"
                  fill="url(#paint0_linear_937_520)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_937_520"
                    x1="7.03463"
                    y1="2"
                    x2="7.03463"
                    y2="21"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFB950" />
                    <stop offset="1" stop-color="#FE5656" />
                  </linearGradient>
                </defs>
              </svg>
              <ProvincesDropdown></ProvincesDropdown>
              {/* <input
                type="text"
                name="district"
                id="district"
                placeholder="Khu vực"
                className="placeholder:text-[#626262] "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                className="cursor-pointer"
              >
                <g clip-path="url(#clip0_937_523)">
                  <path
                    d="M7.99979 13.5C7.65863 13.5 7.31729 13.3901 7.05729 13.1704L0.390625 7.54541C-0.130208 7.10596 -0.130208 6.39404 0.390625 5.95459C0.911458 5.51514 1.75521 5.51514 2.27604 5.95459L7.99979 10.7859L13.7248 5.95547C14.2456 5.51602 15.0894 5.51602 15.6102 5.95547C16.131 6.39492 16.131 7.10684 15.6102 7.54629L8.94354 13.1713C8.68312 13.391 8.34146 13.5 7.99979 13.5Z"
                    fill="url(#paint0_linear_937_523)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_937_523"
                    x1="8.00042"
                    y1="5.625"
                    x2="8.00042"
                    y2="13.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFB950" />
                    <stop offset="1" stop-color="#FE5656" />
                  </linearGradient>
                  <clipPath id="clip0_937_523">
                    <rect width="16" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg> */}
            </div>
            <div className="">
              <button
                className="text- rounded-[4px] bg-gradientCustom px-[30px] py-[6px] text-center font-bold not-italic text-white shadow-md"
                type="submit"
              >
                Tìm kiếm
              </button>
            </div>
          </form>
          {/* {data} */}
          <div>
            {loading ? (
              <Loading></Loading>
            ) : (
              <>
                <div>
                  {pages && pages.length > 0 ? (
                    pages.map((page) => (
                      <JobItem key={page.id} {...page}></JobItem>
                    ))
                  ) : (
                    <p className="text-center">Không có dữ liệu :{"("}</p>
                  )}
                </div>
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                ></Pagination>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
