import React from "react";
import HeaderHome from "../HeaderHome";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <HeaderHome></HeaderHome>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
