import React from "react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";



const NotFound = () => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-white flex flex-row justify-center">
      <div className="bg-white w-[1440px]">
        <div className="bg-white flex flex-col md:flex-row items-center justify-center h-screen">
          <div className="w-1/2 sm:w-auto">
            <img alt="Element" src="./assets/images/404.svg" />
          </div>
          <div>
            <div className="text-2xl sm:text-5xl font-bold text-[#263238] text-center mt-8">
              PAGE NOT FOUND
            </div>
            <p className="text-lg md:text-xl font-semibold text-black text-center mt-4">
              We Couldn't Find The Page <br />You Were Looking For
            </p>
            <div className="mt-12 w-full justify-center px-40 cursor-pointer"
              onClick={() => {
                navigate("/")
              }}

            >
              {/* <div className='bg-[#fe5656] rounded-full text-white text-lg md:text-xl font-bold text-center py-3 px-6 
              ' > */}
              <div className={isHovered ? 'bg-transparent border-2 border-[#fe5656] text-[#fe5656] md:text-xl rounded-full p-6 font-bold text-center ' : 'bg-[#fe5656] md:text-xl rounded-full p-6 text-center font-bold text-white border-2 border-[#fe5656]  '}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut} >

                Back To Home
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )


};

export default NotFound;
