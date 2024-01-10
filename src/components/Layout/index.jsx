import React, { useEffect, useState } from "react";
import HeaderHome from "../HeaderHome";
import { Outlet } from "react-router";
import { callFetchCandidateByUserId } from "../../service/candidate/api";
import { useDispatch, useSelector } from "react-redux";
import { doFetchCandidate } from "../../redux/candidate/candidateSlice";
import { useNavigate } from "react-router-dom";
import { doSetRoleGuest } from "../../redux/account/accountSlice";
import HeaderHomeProps from "../HeaderHome/headerprops";

const Layout = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState(0);

  const handleLogoClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      setKey((prevKey) => prevKey + 1);
    }
  };
  return (
    <div>
      <HeaderHomeProps
        onLogoClick={handleLogoClick}
        role="candidate"
        firstObject="Tìm kiếm việc làm"
        secondObject="Việc làm đã ứng tuyển"
        thirdObject="Việc làm đã lưu"
      ></HeaderHomeProps>
      {/* <HeaderHome></HeaderHome> */}
      <Outlet key={key}></Outlet>
    </div>
  );
};

export default Layout;
