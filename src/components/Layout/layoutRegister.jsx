import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const LayoutRegister = () => {
  return (
    <>
      <div className="lg:hidden">
        <Header></Header>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default LayoutRegister;
