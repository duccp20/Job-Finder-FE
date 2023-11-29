import React, { useState } from "react";

export const Toggle = () => {
  const [on, setOn] = useState(true);

  const handleToggle = () => {
    setOn(!on), console.log(on);
  };

  return (
    <div className="flex">
      <label htmlFor="toggle-switch">
        <input
          type="checkbox"
          id="toggle-switch"
          className="cursor-pointer h-[24px] w-[48px] rounded-full appearance-none bg-[#9F9F9F] checked:bg-[#FE5656] transition duration-200 relative after:content-[''] after:h-[24px] after:w-[24px] after:rounded-full after:bg-white after:absolute after:left-0 after:top-0 after:shadow-lg after:scale-125 after:transiton after:duration-200 after:checked:transform after:checked:scale-125 after:checked:translate-x-[24px]"
          onChange={handleToggle}
        />
      </label>
    </div>
  );
};
