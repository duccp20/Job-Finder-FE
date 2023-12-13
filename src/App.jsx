import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterCandidate } from "./pages/register/register";
import LoginPage from "./pages/login/login";

import { Verify } from "./pages/verify";

import Profile from "./pages/profile/profile";
import { ForgetPass } from "./pages/forgetPass/forgetPass";
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
import Uploader from "./components/Uploader";
import CompanyInformation from "./pages/recruitment/company";
import LoginAs from "./components/LoginAs";
import Recruitment from "./pages/recruitment/overall";
import ContactInfor from "./pages/hr/contact";
import CompanyInfor from "./pages/hr/companyhr";
import RecruitmentDetail from "./pages/recruitment/detail";
import RecruitmentOverall from "./pages/recruitment/overall";
import ContactOverall from "./pages/hr/overall";
import { callFetchCandidateByUserId } from "./service/candidate/api";
import { doFetchCandidate } from "./redux/candidate/candidateSlice";
import PDF from "./pages/pdf/pdf";

const App = () => {
  const isLoading = useSelector((state) => state.account.isLoading);
  const user = useSelector((state) => state.account.user);
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
      path: "/pdf",
      element: <PDF />,
    },
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
    },
    // {
    //   path: "/forgetPass-mail",
    //   element: <ForgetPassMail />,
    // },
    // {
    //   path: "/forgetPass-code",
    //   element: <ForgetPassCode />,
    // },
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
      element: <RecruitmentOverall />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <RecruitmentDetail />,
        },
        {
          path: "company",
          element: <CompanyInformation />,
        },
      ],
    },

    {
      path: "/upload",
      element: <Uploader></Uploader>,
    },
    {
      path: "/loginas",
      element: <LoginAs></LoginAs>,
    },

    {
      path: "/contact",
      element: <ContactOverall />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <ContactInfor />,
        },
        {
          path: "company-infor",
          element: <CompanyInfor />,
        },
      ],
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
      window.location.pathname === "/reset-password" ||
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
