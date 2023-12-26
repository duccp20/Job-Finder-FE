import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NotPermitted from "../NotPermitted";

const RoleBasedHome = ({ children }) => {
  const role = useSelector((state) => state.account.user.roleDTO.name);
  console.log(role, "role");
  const path = window.location.pathname;

  const isAuthorized = (routePrefix, requiredRole) => {
    return path.startsWith(routePrefix) && role === requiredRole;
  };
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);

  return (
    <>
      {!isAuthenticated ||
      isAuthorized("/", "Role_Candidate") ||
      isAuthorized("/", null) ? (
        children
      ) : (
        <NotPermitted />
      )}
    </>
  );
};

export default RoleBasedHome;
