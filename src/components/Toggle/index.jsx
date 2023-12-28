import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Toggle = ({ state, onToggleChange }) => {
  const [on, setOn] = useState(state);

  useEffect(() => {
    setOn(state);
  }, [state]);

  const handleChange = () => {
    onToggleChange(!on); // Gọi hàm callback thay vì thay đổi trạng thái
  };
  return (
    <div className="flex">
      <label htmlFor="toggle-switch">
        <input
          type="checkbox"
          id="toggle-switch"
          checked={on}
          className="relative h-[24px] w-[48px] cursor-pointer appearance-none rounded-full bg-[#9F9F9F] transition duration-200 after:absolute after:left-0 after:top-0 after:h-[24px] after:w-[24px] after:scale-125 after:rounded-full after:bg-white after:shadow-lg after:transition after:duration-200 after:content-[''] checked:bg-[#FE5656] after:checked:translate-x-[24px] after:checked:scale-125 after:checked:transform"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
