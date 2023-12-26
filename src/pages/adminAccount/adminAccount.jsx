import React, { useState } from "react";
import AdminFilter from "../../components/AdminFilter/Filter";
import AdminTable from "../../components/AdminTable";
import { data } from "autoprefixer";

const AdminAccount = () => {
  const [filterOn, setFilterOn] = useState(false);
  const handleFilter = () => {
    setFilterOn(!filterOn);
  };
  return (
    <div className="py flex w-[85%] flex-col px-[40px] py-[36px]">
      <div className="mb-[40px] bg-white px-[20px] py-[15px] text-[20px] font-bold">
        Tài khoản Admin
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-[80%] items-center gap-[10px]">
          <div className="flex w-[50%] items-center gap-[15px] rounded-[6px] border-[0.5px] border-[#13131340] bg-white px-[15px] pb-[10px] pt-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                d="M17.4935 17.332L13.35 12.6562C14.2922 11.0777 14.7571 9.10546 14.5082 7.00389C14.0838 3.42928 11.4877 0.520299 8.31692 0.0672912C3.60264 -0.605873 -0.36151 3.86756 0.235052 9.18749C0.636591 12.7672 3.21475 15.6992 6.38275 16.1758C8.24505 16.4566 9.99313 15.9322 11.3916 14.8687L15.5351 19.5445C16.0757 20.1547 16.9526 20.1547 17.4932 19.5445C18.0335 18.9336 18.0335 17.9414 17.4935 17.332ZM2.91345 8.12499C2.91345 5.36796 4.90107 3.12499 7.34422 3.12499C9.78738 3.12499 11.775 5.36796 11.775 8.12499C11.775 10.882 9.78738 13.125 7.34422 13.125C4.90107 13.125 2.91345 10.8828 2.91345 8.12499Z"
                fill="#FE5656"
              />
            </svg>
            <input
              type="text"
              className=" placeholder:text-[#626262]"
              placeholder="Tìm kiếm nhanh"
            />
          </div>
          <div>
            <button
              class="rounded-[4px] bg-gradientCustom px-[32px] py-[12px] text-center text-base font-bold not-italic text-white "
              type="submit"
            >
              Tìm kiếm
            </button>
          </div>
          <div
            className="cursor-pointer items-center rounded-[6px] border-[0.5px] border-[#13131340] bg-white px-[14px] py-[14px]"
            onClick={handleFilter}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M12.4333 16.3915C12.4333 16.8998 12.0999 17.5665 11.6749 17.8248L10.5 18.5831C9.4083 19.2581 7.89163 18.4998 7.89163 17.1498V12.6915C7.89163 12.0998 7.5583 11.3415 7.21663 10.9248L4.01661 7.55813C3.59161 7.13313 3.2583 6.38314 3.2583 5.87481V3.94147C3.2583 2.93313 4.01665 2.1748 4.94165 2.1748H16.0583C16.9833 2.1748 17.7416 2.93313 17.7416 3.85813V5.70813C17.7416 6.38313 17.3166 7.2248 16.9 7.64147"
                stroke="#4C4C4C"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.8917 14.2669C15.3644 14.2669 16.5583 13.073 16.5583 11.6003C16.5583 10.1275 15.3644 8.93359 13.8917 8.93359C12.4189 8.93359 11.225 10.1275 11.225 11.6003C11.225 13.073 12.4189 14.2669 13.8917 14.2669Z"
                stroke="#4C4C4C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.0583 14.7669L16.225 13.9336"
                stroke="#4C4C4C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <button className="rounded bg-[#FE5656] px-[30px] py-[12px] text-center text-[20px] font-bold text-white">
          Add +
        </button>
      </div>
      {filterOn && <AdminFilter />}
      <AdminTable />
    </div>
  );
};

export default AdminAccount;
