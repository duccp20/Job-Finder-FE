import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <input
        name={props.name}
        ref={ref}
        type={props.type}
        id={props.id}
        {...props}
      />
    </div>
  );
});

export default Input;
