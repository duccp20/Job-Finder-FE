import React, { useEffect, useRef, useState } from "react";

const MultiSelectDropdown = ({
  options,
  value = [],
  onChange,
  text,
  height,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Tắt dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSelectItem = (item) => {
    let newSelectedItems;
    if (value.some((selected) => selected.id === item.id)) {
      newSelectedItems = value.filter((selected) => selected.id !== item.id);
    } else {
      newSelectedItems = [...value, item];
    }
    onChange(newSelectedItems);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const iconPath =
    "M8.00004 8.5C7.65887 8.5 7.31754 8.39014 7.05754 8.17041L0.390869 2.54541C-0.129964 2.10596 -0.129964 1.39404 0.390869 0.95459C0.911703 0.515137 1.75545 0.515137 2.27629 0.95459L8.00004 5.78594L13.725 0.955469C14.2459 0.516015 15.0896 0.516015 15.6105 0.955469C16.1313 1.39492 16.1313 2.10684 15.6105 2.54629L8.94379 8.17129C8.68337 8.39102 8.3417 8.5 8.00004 8.5Z";

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex h-[48px] items-center justify-between rounded-md border-2 border-gray-300"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="z-10 flex gap-1">
          {value.length > 0 ? (
            value.map((item) => (
              <div
                key={item.id}
                className=" rounded bg-gray-100 p-2  not-italic text-[#7D7D7D]"
              >
                <span className="text-base font-medium">{item.name}</span>
                <button
                  className="ml-2 rounded-full px-1 text-[#7D7D7D] hover:bg-gray-200 focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectItem(item);
                  }}
                >
                  &times;
                </button>
              </div>
            ))
          ) : (
            <span className="border-2-300 font w-full  rounded-md p-2 text-base font-medium">
              {text}
            </span> // Placeholder text
          )}
        </div>

        {/* Toggle Icon */}
        <svg
          onClick={toggleDropdown}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="8"
          viewBox="0 0 16 9"
          fill="none"
          className={`transform transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        >
          <path d={iconPath} fill="#BEBEBE" />
        </svg>
      </div>
      {isDropdownOpen && (
        <div
          className={`h-${height} w-full overflow-y-auto rounded bg-white shadow-lg`}
        >
          {options.map((option) => (
            <div
              key={option.id}
              className="cursor-pointer p-2 hover:bg-gray-100"
              onClick={() => handleSelectItem(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
