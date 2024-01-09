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
        firstObject="Tìm kiếm việc làm"
        secondObject="Việc làm đã ứng tuyển"
        thirdObject="Việc làm đã lưu"
      ></HeaderHomeProps>
      {/* <HeaderHome></HeaderHome> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
