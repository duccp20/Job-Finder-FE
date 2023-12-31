import React, { useEffect, useRef, useState } from "react";

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

  const [dropdown, setDropdown] = useState({
    checkboxesDropdown: false,
    locationDropdown: false,
    majorDropdown: false,
  });
  const handleDropdown = (nameDropdown) => {
    setDropdown((prev) => {
      const newDropdown = { ...prev };

      if (newDropdown[nameDropdown] === false) {
        Object.keys(newDropdown).forEach((key) => {
          newDropdown[key] = key === nameDropdown;
        });
      } else {
        newDropdown[nameDropdown] = !newDropdown[nameDropdown];
      }

      return newDropdown;
    });
  };

  const handleCheckboxChange = (id, setState) => {
    setState((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox,
      ),
    );
  };

  const { loading, dataJob, totalPages, currentPage, setCurrentPage } =
    useDataFetcher();

  console.log("data quantity", dataJob.length);
  return (
    <div className="bg-[#F6F6F6]">
      {/* <LoginAs></LoginAs> */}
      <div className="mt-[60px] flex h-screen w-full py-[36px] sm:px-[20px] md:mt-0 md:flex-col md:gap-[20px] md:py-5 tablet-range:px-[50px] desktop-up:gap-[45px] desktop-up:px-[100px]">
        <div className=" sm:flex-col sm:gap-[15px] md:flex md:w-full md:justify-between desktop-up:w-[20%]">
          {[
            {
              state: checkboxes,
              setState: setCheckboxes,
              title: "Hình thức làm việc",
              name: "checkboxesDropdown",
            },
            {
              state: location,
              setState: setLocation,
              title: "Vị trí làm việc",
              name: "locationDropdown",
            },
            {
              state: major,
              setState: setMajor,
              title: "Chuyên ngành",
              name: "majorDropdown",
            },
          ].map((section) => (
            <div
              key={section.title}
              className=" relative h-auto rounded-[10px] border-[0.5px] border-[#DEDEDE] bg-white px-[18px] pt-[12px] md:cursor-pointer md:pb-[10px] desktop-up:mb-[15px] desktop-up:pb-[24px]"
            >
              <div
                className=" flex items-center justify-between md:gap-[20px]"
                onClick={() => handleDropdown(section.name)}
              >
                <span className="text-base font-bold not-italic text-[#FE5656] desktop-up:mb-[20px]">
                  {section.title}
                </span>
                <span className="desktop-up:hidden">
                  {dropdown[section.name] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="6"
                      viewBox="0 0 18 6"
                      fill="none"
                    >
                      <path
                        d="M17.6604 0.904457L9.06507 6L0.469726 0.904458L1.9954 -6.66893e-08L9.06507 4.19108L16.1347 -6.8474e-07L17.6604 0.904457Z"
                        fill="#FE5656"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="18"
                      viewBox="0 0 7 18"
                      fill="none"
                    >
                      <path
                        d="M0.969401 0.404518L6.06494 8.99987L0.969399 17.5952L0.0649415 16.0695L4.25602 8.99987L0.0649428 1.93019L0.969401 0.404518Z"
                        fill="#FE5656"
                      />
                    </svg>
                  )}
                </span>
              </div>
              {dropdown[section.name] && (
                <div className="absolute left-0 top-[70%] w-full rounded-b-[10px] border border-t-0 border-[#DEDEDE] bg-white px-[10px] pb-[10px] pt-[20px] sm:z-[2] desktop-up:hidden">
                  <ul className="w-full">
                    {section.state.map((checkbox) => (
                      <li key={checkbox.id} className="mb-2 w-full">
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
              )}
              <div className="md:hidden">
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

        <div className=" flex w-full flex-col gap-[36px] md:w-full in-lg:w-[80%]">
          <form className="flex h-auto items-center justify-between rounded-[6px] sm:flex-col sm:gap-[15px] tablet-up:border-[0.5px] tablet-up:border-[#FE5656] tablet-up:px-[18px] tablet-up:py-[12px] ">
            <div className="flex flex-grow items-end sm:w-full sm:rounded-[6px] sm:border-[0.5px] sm:border-[#FE5656] sm:px-[20px] sm:py-[10px]">
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

            <div className="flex sm:w-full sm:items-center sm:rounded-[6px] sm:border-[0.5px] sm:border-[#FE5656] sm:px-[20px] sm:py-[10px] tablet-up:items-end tablet-up:pr-[30px]">
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
              <ProvincesDropdown placeholder="Khu vực"></ProvincesDropdown>
            </div>
            <div className="bg-white">
              <button
                className="whitespace-nowrap rounded-[4px] bg-gradientCustom px-[30px] py-[6px] text-center text-base font-bold not-italic text-white shadow-md sm:py-2"
                type="submit"
              >
                Tìm kiếm
              </button>
            </div>
          </form>
          <div>
            {loading ? (
              <Loading></Loading>
            ) : (
              <>
                <div>
                  {dataJob && dataJob.length > 0 ? (
                    dataJob.map((data) => (
                      <JobItem
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        companyDTO={data.companyDTO}
                        province={data.province}
                        positionDTOs={data.positionDTOs}
                        scheduleDTOs={data.scheduleDTOs}
                        majorDTOs={data.majorDTOs}
                        amount={data.amount}
                        startDate={data.startDate}
                        endDate={data.endDate}
                      ></JobItem>
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
