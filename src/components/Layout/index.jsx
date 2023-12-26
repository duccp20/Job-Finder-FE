import React, { useEffect } from "react";
import HeaderHome from "../HeaderHome";
import { Outlet } from "react-router";
import { callFetchCandidateByUserId } from "../../service/candidate/api";
import { useDispatch, useSelector } from "react-redux";
import { doFetchCandidate } from "../../redux/candidate/candidateSlice";
import { doSetRoleGuest } from "../../redux/account/accountSlice";

const Layout = () => {
  return (
    <div>
      <HeaderHome></HeaderHome>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
