import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NotPermitted = () => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex flex-row justify-center bg-white">
      <div className="w-[1440px] bg-white">
        <div className="flex h-screen flex-col items-center justify-center bg-white md:flex-row ">
          <div className="w-1/2 sm:w-auto">
            <img
              alt="Element"
              src="./assets/images/403.svg"
              className="w-11/12"
            />
          </div>
          <div className="">
            <div className="tracking-w text-center text-2xl font-extrabold text-[#263238] sm:text-5xl">
              ACCESS DENIED!
            </div>
            <p className="mt-4 text-center text-lg font-semibold text-black md:text-lg">
              You Don’t Have Permission To Access <br /> This Site
            </p>
            <div
              className="mt-10 cursor-pointer justify-center px-40"
              onClick={() => {
                navigate("/");
              }}
            >
              <div
                className={
                  isHovered
                    ? "rounded-full border-2 border-[#fe5656] bg-transparent p-6 text-center font-bold text-[#fe5656] md:text-xl "
                    : "rounded-full border-2 border-[#fe5656] bg-[#fe5656] p-6 text-center font-bold text-white md:text-xl  "
                }
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                Back To Home
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotPermitted;
