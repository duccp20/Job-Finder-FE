import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/Admin/sideBar/sidebar";

const MenuAdmin = () => {
  return (
    <div>
      <HeaderAdmin></HeaderAdmin>
      <div className="mt-[90px] flex gap-[20px]">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MenuAdmin;
