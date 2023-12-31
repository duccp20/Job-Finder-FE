import Spinner from "../Spinner/spinnner";

const Button = (props) => {
  return (
    <button
      className={`${
        props.className ? props.className : ""
      } rounded-[4px] px-[22px] py-[12px] text-center text-[15px] font-bold text-white  ${
        props.isSubmitting ? "bg-gray-500" : "bg-[#FE5656]"
      } `}
      type="submit"
    >
      {props.isSubmitting ? (
        <span className="flex items-center gap-2">
          <Spinner />
          <span>{props.textSubmitting}</span>
        </span>
      ) : (
        props.textNoSubmitting
      )}
    </button>
  );
};

export default Button;
