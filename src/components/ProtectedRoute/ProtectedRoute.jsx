import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NotPermitted from "../NotPermitted";

const RoleBasedRoute = ({ children }) => {
  const role = useSelector((state) => state.account.user.roleDTO.name);
  const path = window.location.pathname;

  const isAuthorized = (routePrefix, requiredRole) => {
    return path.startsWith(routePrefix) && role === requiredRole;
  };

  if (
    isAuthorized("/admin", "Role_Admin") ||
    isAuthorized("/hr", "Role_HR") ||
    isAuthorized("/candidate", "Role_Candidate") ||
    isAuthorized("/", "Role_Candidate") ||
    isAuthorized("/", "Role_Guest")
  ) {
    return <>{children}</>;
  }

  return <NotPermitted />;
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);

  console.log(isAuthenticated, "isAuthenticated trong ProtectedRoute");

  return (
    <>
      {isAuthenticated ? (
        <RoleBasedRoute>{children}</RoleBasedRoute>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ProtectedRoute;
