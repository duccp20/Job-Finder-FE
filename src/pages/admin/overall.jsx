import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/Admin/sideBar/sidebar";

const MenuAdmin = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <HeaderAdmin></HeaderAdmin>
      <div className="flex pt-[70px]">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MenuAdmin;
