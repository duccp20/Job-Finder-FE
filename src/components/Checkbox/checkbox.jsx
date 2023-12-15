import React from "react";

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center relative cursor-pointer">
      <label className="flex items-center relative">
        <input
          id={label}
          type="checkbox"
          checked={checked}
          onChange={() => onChange(id)}
          className="appearance-none w-5 h-5 border border-[#FE5656] rounded-md focus:outline-none checked:bg-[#FE5656] hover:ring-1 hover:ring-[#e44d4d] cursor-pointer"
        />
        <i className="fa-solid fa-check absolute text-white left-[3px] top-[3px] cursor-pointer"></i>
      </label>

      <label className="ml-2" htmlFor={label}>
        {label}
      </label>
      {/* <div>
        <ul>
          {checkboxes.map((checkbox) => (
            <li key={checkbox.id} className="mb-2">
              <label className="flex items-center relative cursor-pointer">
                <input
                  type="checkbox"
                  checked={checkbox.checked}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                  className=" appearance-none w-5 h-5 border border-[#FE5656] rounded-md focus:outline-none checked:bg-[#FE5656] hover:ring-1 hover:ring-[#e44d4d] cursor-pointer"
                />

                <i class="fa-solid fa-check absolute text-white left-[3px] top-[3px] cursor-pointer"></i>
                <span className="ml-2">{checkbox.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Checkbox;
