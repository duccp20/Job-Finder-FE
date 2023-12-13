import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NotPermitted = () => {
  
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState (false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };  return (
    <div className="bg-white flex flex-row justify-center">
      <div className="bg-white w-[1440px]">
        <div className="bg-white flex flex-col md:flex-row items-center justify-center h-screen ">
          <div className="w-1/2 sm:w-auto">
            <img alt="Element" src="./assets/images/403.svg" className="w-11/12"/>
          </div>
          <div className="">
            <div className="text-2xl sm:text-5xl tracking-w font-extrabold text-[#263238] text-center">
              ACCESS DENIED!
            </div>
            <p className="text-lg md:text-lg font-semibold text-black text-center mt-4">
              You Don’t Have Permission To Access <br /> This Site
            </p>
            <div className="mt-10 justify-center px-40 cursor-pointer"
              onClick={() => {
                navigate("/")
              }}>
              <div className={isHovered ? 'bg-transparent border-2 border-[#fe5656] text-[#fe5656] md:text-xl rounded-full p-6 font-bold text-center ' : 'bg-[#fe5656] md:text-xl rounded-full p-6 text-center font-bold text-white border-2 border-[#fe5656]  '}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                Back To Home
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default NotPermitted;
