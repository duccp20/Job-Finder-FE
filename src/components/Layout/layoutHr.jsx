import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import HeaderHR from "../HeaderHR/headerHr";
import HeaderHomeProps from "../HeaderHome/headerprops";
import { useNavigate } from "react-router-dom";
const LayoutHr = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState(0);

  const handleLogoClick = () => {
    if (window.location.pathname !== "/hr") {
      navigate("/hr");
    } else {
      setKey((prevKey) => prevKey + 1);
    }
  };
  return (
    <div>
      <HeaderHR key={key} onLogoClick={handleLogoClick}></HeaderHR>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutHr;
