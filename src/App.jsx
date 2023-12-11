import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterCandidate } from "./pages/register/register";
import LoginPage from "./pages/login/login";
import { Verify } from "./pages/verify";
import Profile from "./pages/profile/profile";
import { ForgetPass } from "./pages/forgetPass/forgetpass";
import HeaderHome from "./components/HeaderHome";
import HomePage from "./pages/home/home";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import NewPassword from "./pages/newpass/newpass";
import Loading from "./components/Loading";
import { callFetchUserProfile } from "./service/user/api";
import { useDispatch, useSelector } from "react-redux";
import { doFetchAccountAction } from "./redux/account/accountSlice";
import PersonalDetails from "./pages/profile/personal-details";
import JobDetails from "./pages/profile/job-details";
import JobPersonOverall from "./pages/profile/job-person-overall";
import CompanyInformation from "./pages/recruitment/company";
import Recruitment from "./pages/recruitment/detail";

const App = () => {
  const isLoading = useSelector((state) => state.account.isLoading);
  const dispatch = useDispatch();
  const fetchAccount = async () => {
    if (
      window.location.pathname === "/register" ||
      window.location.pathname === "/login" ||
      window.location.pathname === "/forgot-password" ||
      window.location.pathname === "/verify-email"
    )
      return;

    const res = await callFetchUserProfile();

    if (res && res?.data) {
      dispatch(doFetchAccountAction(res.data));
    }
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterCandidate />,
    },
    {
      path: "/verify-email",
      element: <Verify />,
      errorElement: <NotFound />,
    },
    {
      path: "/forgot-password",
      element: <ForgetPass />,
      errorElement: <NotFound />,
      children: [
        {
          path: "verify",
          element: <ForgetPass />,
        },
      ],
    },
    {
      path: "/reset-password",
      element: <NewPassword />,
      errorElement: <NotFound />,
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <JobPersonOverall />,
        },
        {
          path: "personal",
          element: <PersonalDetails />,
        },
        {
          path: "job",
          element: <JobDetails />,
        },
      ],
    },

    {
      path: "/recruitment",
      element: <Recruitment />,
    },
    {
      path: "/company",
      element: <CompanyInformation />,
    },

    // {
    //   path: "/admin",
    //   element: <LayoutAdmin />,
    //   errorElement: <NotFound />,
    //   children: [
    //     {
    //       index: true,
    //       element: (
    //         <ProtectedRoute>
    //           <Dashboard />
    //         </ProtectedRoute>
    //       ),
    //     },
    //     {
    //       path: "user",
    //       element: (
    //         <ProtectedRoute>
    //           <UserTable />
    //         </ProtectedRoute>
    //       ),
    //     },
    //   ],
    // },
  ]);
  return (
    <>
      {/* Có API */}
      {!isLoading ||
      window.location.pathname === "/" ||
      window.location.pathname === "/login" ||
      window.location.pathname === "/register" ||
      window.location.pathname === "/forgot-password" ||
      window.location.pathname === "/verify-email" ? (
        <RouterProvider router={router} />
      ) : (
        <Loading></Loading>
      )}

      {/* Chưa có api */}
      {/* <RouterProvider router={router} /> */}
    </>
  );
};

export default App;
