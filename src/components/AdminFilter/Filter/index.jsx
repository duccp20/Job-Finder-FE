import React, { useEffect, useRef, useState } from "react";

const AdminFilter = () => {
  const [selectedOption, setSelectedOption] = useState("Chọn");
  const filterOptions = ["Active", "Not active", "Disable"];
  const [dropdown, setDropdown] = useState({ openDropdown: false });
  const dropdownRef = useRef(null);

  const openDropdown = (dropdownName) => {
    setDropdown({ ...dropdown, [dropdownName]: true });
  };

  const closeDropdown = () => {
    setDropdown({ ...dropdown, openDropdown: false });
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    closeDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-full">
      <div className="flex items-end gap-[30px]  pt-[20px]">
        <div className="flex flex-col gap-[6px]">
          <p className="text-[16px] font-[600] not-italic">Trạng thái</p>
          <div
            className="relative flex cursor-pointer flex-col"
            ref={dropdownRef}
          >
            <div
              className="z-[2] flex items-center rounded border-[0.5px] border-[#13131340] bg-white px-[13px] py-[12px]"
              onClick={() => openDropdown("openDropdown")}
            >
              <label htmlFor="state">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  className="mr-[12px]"
                >
                  <path
                    d="M22.948 19.6004H12.7537V0.400391H22.948C23.9311 0.400391 24.874 0.737532 25.5692 1.33765C26.2644 1.93777 26.655 2.7517 26.655 3.60039V16.4004C26.655 17.2491 26.2644 18.063 25.5692 18.6631C24.874 19.2632 23.9311 19.6004 22.948 19.6004ZM1.68902 0.400391H10.9002V19.6004H0.705861C-0.277302 19.6004 -1.2202 19.2632 -1.9154 18.6631C-2.6106 18.063 -3.00116 17.2491 -3.00116 16.4004V3.60039C-3.00116 2.7517 -2.6106 1.93777 -1.9154 1.33765C-1.2202 0.737532 0.705861 0.400391 1.68902 0.400391ZM16.4607 3.60039C16.2149 3.60039 15.9792 3.68468 15.8054 3.83471C15.6316 3.98473 15.5339 4.18822 15.5339 4.40039C15.5339 4.61256 15.6316 4.81605 15.8054 4.96608C15.9792 5.11611 16.2149 5.20039 16.4607 5.20039H22.948C23.1938 5.20039 23.4295 5.11611 23.6033 4.96608C23.7771 4.81605 23.8747 4.61256 23.8747 4.40039C23.8747 4.18822 23.7771 3.98473 23.6033 3.83471C23.4295 3.68468 23.1938 3.60039 22.948 3.60039H16.4607Z"
                    fill="#FE5656"
                  />
                </svg>
              </label>
              <div className="relative flex w-[130px] flex-col">
                <div className=" z-[2] flex cursor-pointer items-center gap-2">
                  <span>{selectedOption}</span>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
              >
                <path
                  d="M6.18166 6.60553C5.91803 6.60553 5.65427 6.51338 5.45336 6.32907L0.301847 1.61084C-0.100616 1.24222 -0.100616 0.645072 0.301847 0.276459C0.704309 -0.0921531 1.3563 -0.0921531 1.75876 0.276459L6.18166 4.32898L10.6055 0.277196C11.008 -0.091416 11.66 -0.091416 12.0624 0.277196C12.4649 0.645809 12.4649 1.24296 12.0624 1.61157L6.91092 6.32981C6.70969 6.51412 6.44567 6.60553 6.18166 6.60553Z"
                  fill="#FE5656"
                />
              </svg>
            </div>
            {dropdown.openDropdown && (
              <div className="absolute right-0 top-[40px] z-[1] mt-1 w-[100%] bg-white px-[10px] pt-[10px] text-left text-[16px] font-[400] shadow-banner">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectOption(option)}
                    className="mb-[10px] block  w-full pt-1  text-left text-[16px] font-[400] hover:bg-[#DEDEDE]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="text-[16px] font-[600] not-italic">Ngày đăng ký</p>
          <div className="z-[2] flex items-center gap-[12px] rounded border-[0.5px] border-[#13131340] bg-white px-[13px] py-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.0001 11.11V5C21.0001 4.46957 20.7893 3.96086 20.4143 3.58579C20.0392 3.21071 19.5305 3 19.0001 3H14.8201C14.4001 1.84 13.3001 1 12.0001 1C10.7001 1 9.60006 1.84 9.18006 3H5.00006C3.90006 3 3.00006 3.9 3.00006 5V19C3.00006 19.5304 3.21077 20.0391 3.58585 20.4142C3.96092 20.7893 4.46963 21 5.00006 21H11.1101C12.3701 22.24 14.0901 23 16.0001 23C19.8701 23 23.0001 19.87 23.0001 16C23.0001 14.09 22.2401 12.37 21.0001 11.11ZM12.0001 3C12.5501 3 13.0001 3.45 13.0001 4C13.0001 4.55 12.5501 5 12.0001 5C11.4501 5 11.0001 4.55 11.0001 4C11.0001 3.45 11.4501 3 12.0001 3ZM5.00006 19V5H7.00006V7H17.0001V5H19.0001V9.68C18.0901 9.25 17.0801 9 16.0001 9H7.00006V11H11.1001C10.5001 11.57 10.0401 12.25 9.68006 13H7.00006V15H9.08006C9.03006 15.33 9.00006 15.66 9.00006 16C9.00006 17.08 9.25006 18.09 9.68006 19H5.00006ZM16.0001 21C13.2401 21 11.0001 18.76 11.0001 16C11.0001 13.24 13.2401 11 16.0001 11C18.7601 11 21.0001 13.24 21.0001 16C21.0001 18.76 18.7601 21 16.0001 21ZM16.5001 16.25L19.3601 17.94L18.6101 19.16L15.0001 17V12H16.5001V16.25Z"
                fill="#FE5656"
              />
            </svg>
            <input
              type="text"
              name=""
              id=""
              placeholder="Từ ngày"
              className="w-[160px]"
            />
          </div>
        </div>
        <div className="z-[2] flex items-center gap-[12px] rounded border-[0.5px] border-[#13131340] bg-white px-[13px] py-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.0001 11.11V5C21.0001 4.46957 20.7893 3.96086 20.4143 3.58579C20.0392 3.21071 19.5305 3 19.0001 3H14.8201C14.4001 1.84 13.3001 1 12.0001 1C10.7001 1 9.60006 1.84 9.18006 3H5.00006C3.90006 3 3.00006 3.9 3.00006 5V19C3.00006 19.5304 3.21077 20.0391 3.58585 20.4142C3.96092 20.7893 4.46963 21 5.00006 21H11.1101C12.3701 22.24 14.0901 23 16.0001 23C19.8701 23 23.0001 19.87 23.0001 16C23.0001 14.09 22.2401 12.37 21.0001 11.11ZM12.0001 3C12.5501 3 13.0001 3.45 13.0001 4C13.0001 4.55 12.5501 5 12.0001 5C11.4501 5 11.0001 4.55 11.0001 4C11.0001 3.45 11.4501 3 12.0001 3ZM5.00006 19V5H7.00006V7H17.0001V5H19.0001V9.68C18.0901 9.25 17.0801 9 16.0001 9H7.00006V11H11.1001C10.5001 11.57 10.0401 12.25 9.68006 13H7.00006V15H9.08006C9.03006 15.33 9.00006 15.66 9.00006 16C9.00006 17.08 9.25006 18.09 9.68006 19H5.00006ZM16.0001 21C13.2401 21 11.0001 18.76 11.0001 16C11.0001 13.24 13.2401 11 16.0001 11C18.7601 11 21.0001 13.24 21.0001 16C21.0001 18.76 18.7601 21 16.0001 21ZM16.5001 16.25L19.3601 17.94L18.6101 19.16L15.0001 17V12H16.5001V16.25Z"
              fill="#FE5656"
            />
          </svg>
          <input
            type="text"
            name=""
            id=""
            placeholder="Đến ngày"
            className="w-[160px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminFilter;
