import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const NotFound = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);

  const role = useSelector((state) => state.account.user.roleDTO.roleId);
  console.log("role", role);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleNavigate = () => {
    switch (role) {
      case 1:
        navigate("/admin");
        break;
      case 3:
        navigate("/hr");
        break;
      default:
        navigate("/");
    }
  };
  

  return (
    <div className="flex flex-row justify-center bg-white">
      <div className=" bg-white">
        <div className="flex h-screen items-center justify-center bg-white md:flex-row">
          <div className="w-1/2 sm:w-auto">
            <img alt="Element" src="/assets/images/404.svg" />
          </div>
          <div>
            <div className="mt-8 text-center text-2xl font-bold text-[#263238] sm:text-5xl">
              PAGE NOT FOUND
            </div>
            <p className="mt-4 text-center text-lg font-semibold text-black md:text-xl">
              We Couldn't Find The Page <br />
              You Were Looking For
            </p>
            <div
              className="mt-12 w-full cursor-pointer justify-center px-40"
              onClick={() => handleNavigate()}
            >
              {/* <div className='bg-[#fe5656] rounded-full text-white text-lg md:text-xl font-bold text-center py-3 px-6 
              ' > */}
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

export default NotFound;
