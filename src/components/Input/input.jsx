import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={` rounded-md ${props.bgColor}`}>
      <input
        name={props.name}
        ref={ref}
        type={props.type}
        id={props.id}
        className={`border-2 px-2 py-3 ${props.className} ${props.borderColor} w-full rounded-md font-[400] focus:border-blue-500 focus:outline-none focus:ring-blue-500`}
        {...props}
      />
    </div>
  );
});

export default Input;
