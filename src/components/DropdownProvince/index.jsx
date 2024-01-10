import React, { useState, useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handler]);

  return ref;
};
const ProvincesDropdown = (props) => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useClickOutside(() => setShowDropdown(false));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/tinh_tp.json");
        const data = await response.json();
        setProvinces(Object.values(data));
      } catch (error) {
        console.error("Error fetching provinces data:", error);
      }
    };

    fetchData();
  }, []);

  const handleProvinceClick = (province) => {
    setSelectedProvince(province);
    setSearchTerm(province.name);
    setShowDropdown(false);
    props.onProvinceChange(province.name);
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };
  const renderIcon = () => {
    if (props.placeholder === "Khu vực") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          className="cursor-pointer"
          onClick={handleButtonClick}
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
        </svg>
      );
    } else if (props.placeholder === "Địa điểm") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="7"
          viewBox="0 0 13 7"
          fill="none"
          className="cursor-pointer"
          onClick={handleButtonClick}
        >
          <path
            d="M6.18166 6.60553C5.91803 6.60553 5.65427 6.51338 5.45336 6.32907L0.301847 1.61084C-0.100616 1.24222 -0.100616 0.645072 0.301847 0.276459C0.704309 -0.0921531 1.3563 -0.0921531 1.75876 0.276459L6.18166 4.32898L10.6055 0.277196C11.008 -0.091416 11.66 -0.091416 12.0624 0.277196C12.4649 0.645809 12.4649 1.24296 12.0624 1.61157L6.91092 6.32981C6.70969 6.51412 6.44567 6.60553 6.18166 6.60553Z"
            fill="#FE5656"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          className="cursor-pointer"
          onClick={handleButtonClick}
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
        </svg>
      );
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
  };

  const filteredProvinces = provinces.filter((province) =>
    province.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className=" flex w-full items-center">
      <div className="w-full">
        <label htmlFor="province" className="border-transparent">
          {/* {searchTerm || ""} */}
        </label>
        <input
          type="text"
          placeholder={props.placeholder}
          value={searchTerm}
          onChange={handleSearch}
          style={props.style}
          className=" border border-solid border-transparent pt-[2px] focus:outline-none "
        />
        {showDropdown && (
          <ul
            ref={dropdownRef}
            className="absolute z-[1] mt-2 max-h-48 w-[15vw] overflow-y-auto border border-solid border-gray-300 bg-[white]"
            style={props.style}
          >
            {filteredProvinces.map((province) => (
              <li
                key={province.code}
                onClick={() => handleProvinceClick(province)}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                {province.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {renderIcon()}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="7"
          viewBox="0 0 13 7"
          fill="none"
          className="cursor-pointer"
          onClick={handleButtonClick}
        >
          <path
            d="M6.18166 6.60553C5.91803 6.60553 5.65427 6.51338 5.45336 6.32907L0.301847 1.61084C-0.100616 1.24222 -0.100616 0.645072 0.301847 0.276459C0.704309 -0.0921531 1.3563 -0.0921531 1.75876 0.276459L6.18166 4.32898L10.6055 0.277196C11.008 -0.091416 11.66 -0.091416 12.0624 0.277196C12.4649 0.645809 12.4649 1.24296 12.0624 1.61157L6.91092 6.32981C6.70969 6.51412 6.44567 6.60553 6.18166 6.60553Z"
            fill="#FE5656"
          />
        </svg> */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          className="cursor-pointer"
          onClick={handleButtonClick}
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
    </div>
  );
};

export default ProvincesDropdown;
