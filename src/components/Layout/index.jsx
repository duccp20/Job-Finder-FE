import React, { useEffect } from "react";
import HeaderHome from "../HeaderHome";
import { Outlet } from "react-router";
import { callFetchCandidateByUserId } from "../../service/candidate/api";
import { useDispatch, useSelector } from "react-redux";
import { doFetchCandidate } from "../../redux/candidate/candidateSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.account.user);
  const fetchCandidate = async () => {
    const res = await callFetchCandidateByUserId(user.id);
    console.log(res);
    if (res && res?.data) {
      console.log(res.data);
      dispatch(doFetchCandidate(res.data));
    }

    if (res && res?.errors) {
      console.log(res.errors + " " + res.message);
    }
  };

  useEffect(() => {
    fetchCandidate();
  }, []);
  return (
    <div>
      <HeaderHome></HeaderHome>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
