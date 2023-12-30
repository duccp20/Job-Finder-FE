import React, { useEffect } from "react";
import HeaderHome from "../HeaderHome";
import { Outlet } from "react-router";
import { callFetchCandidateByUserId } from "../../service/candidate/api";
import { useDispatch, useSelector } from "react-redux";
import { doFetchCandidate } from "../../redux/candidate/candidateSlice";

import { doSetRoleGuest } from "../../redux/account/accountSlice";

import HeaderHomeProps from "../HeaderHome/headerprops";

const Layout = () => {
  return (
    <div>
      <HeaderHomeProps
        role="candidate"
        firstobject="Việc làm đã ứng tuyển"
        secondobject="Việc làm đã lưu"
      ></HeaderHomeProps>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
