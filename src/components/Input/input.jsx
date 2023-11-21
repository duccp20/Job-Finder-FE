import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        type={props.type}
        id={props.id}
        class="px-2"
        className="py-3 px-2 border-2 border-[#BEB9B9] rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;
