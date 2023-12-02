import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterCandidate } from "./pages/register/register";

import LoginPage from "./pages/login/login";
import { VerifyEmail } from "./pages/verifyEmail";
import EnterCode from "./pages/entercode/entercode";
import Profile from "./pages/profile/profile";
import { ForgetPass } from "./pages/forgetPass/forgetpass";
import HeaderHome from "./components/HeaderHome";
import PersonalInfor from "./pages/profile/personal_infor";
import JobInfor from "./pages/profile/job_infor";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Home from "./pages/home";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
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
      element: <VerifyEmail />,
      errorElement: <NotFound />,
      children: [
        {
          path: "?status=success",
          element: <VerifyEmail />,
        },
        {
          path: "?status=fail",
          element: <VerifyEmail />,
        },
        {
          path: "?status=completed",
          element: <VerifyEmail />,
        },
      ],
    },
    {
      path: "/forget-pass",
      element: <ForgetPass />,
    },
    {
      path: "/enter-code",
      element: <EnterCode />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/headerHome",
      element: <HeaderHome />,
    },
    {
      path: "/personalInfor",
      element: <PersonalInfor />,
    },
    {
      path: "/jobInfor",
      element: <JobInfor />,
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
      <RouterProvider router={router} />
    </>
  );
};

export default App;
