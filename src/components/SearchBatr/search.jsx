import React from "react";
import ProvincesDropdown from "../DropdownProvince";

const SearchBar = () => {
  return (
    <div className=" mt-[70px] flex w-full flex-col items-center gap-[36px]">
      <form className="my-[40px] flex h-auto w-[90%] items-center justify-between rounded-[6px] border-[0.5px] border-[#FE5656] px-[18px] py-[12px]">
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
        </div>
        <div className="">
          <button
            className="rounded-[4px] bg-gradientCustom px-[30px] py-[6px] text-center text-base font-bold not-italic text-white shadow-md"
            type="submit"
          >
            Tìm kiếm
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
