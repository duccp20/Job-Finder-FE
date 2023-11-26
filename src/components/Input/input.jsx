import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <input
        ref={ref}
        type={props.type}
        id={props.id}
        class="px-2"
        className={`py-3 px-2 border-2 ${props.className} ${props.borderColor} rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
        // className={`py-3 px-2 border-2 ${props.borderColor} rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
        {...props}
      />
    </div>
  );
});

export default Input;
