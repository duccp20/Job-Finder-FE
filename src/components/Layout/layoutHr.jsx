import React, { useEffect } from "react";
import { Outlet } from "react-router";
import HeaderHR from "../HeaderHR/headerHr";

const LayoutHr = () => {
  return (
    <div>
      <HeaderHR></HeaderHR>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutHr;
