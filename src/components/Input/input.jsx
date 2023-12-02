import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <input
        name={props.name}
        ref={ref}
        type={props.type}
        id={props.id}
        className={`py-3 px-2 border-2 ${props.className} ${props.borderColor} rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-blue-500`}
        {...props}
      />
    </div>
  );
});

export default Input;
