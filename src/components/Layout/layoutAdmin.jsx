import React, { useEffect } from "react";
import { Outlet } from "react-router";
import HeaderAdmin from "../HeaderAdmin";

const LayoutAdmin = () => {
  return (
    <div>
      <HeaderAdmin></HeaderAdmin>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutAdmin;
